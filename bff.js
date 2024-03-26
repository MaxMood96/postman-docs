const fs = require('fs');
const sh = require('shelljs');
const crypto = require('crypto');
const fetch = require('node-fetch');
const path = require("path");
const { allow } = require('./package.json');
const bffData = require('./build/bffData');

const { pmTech: allowedPmTech } = allow;
const delay = 1000;
const runtime = {
  pm: [''],
};

const cacheCdn = (url, name) =>
  new Promise((resolve) => {
    sh.exec('mkdir -p public');

    fetch(url).then((res) => {
      res.text().then((resp) => {
        if (resp) {
          fs.writeFile(path.join('public', `${name}.js`), resp, (err) => {
            if (err) {
              throw err;
            } else {
              resolve(true);
            }
          });
        }
      });
    });
  });

if (process.env.PM_TECH) {
  sh.exec('mkdir -p public');

  Object.keys(runtime).forEach((key) => {
    if (runtime[key][0]) {
      const fileBuffer = fs.readFileSync(runtime[key][0]);
      const hashSum = crypto.createHash('sha1');
      const ext = runtime[key][0]
        .split('/')
        .pop()
        .split('.')
        .pop();

      hashSum.update(fileBuffer);

      const hex = hashSum.digest('hex');

      runtime[key].push(`_${hex}.${ext}`);

      sh.exec(`cp ${runtime[key][0]} public/${runtime[key][1]}`);
    }
  });
}

const prefetch = async () => {
  sh.exec('mkdir -p bff-data');

  await bffData();

  let pmt = '';

  if (process.env.PM_TECH_RT) {
    sh.config.silent = true;
    pmt = sh.exec('cat bff-data/pmt.js').stdout.split('\n').shift();
    sh.config.silent = false;

    sh.exec('mkdir -p public');

    Object.keys(runtime).forEach((key) => {
      if (runtime[key][0]) {
        const fileBuffer = fs.readFileSync(runtime[key][0]);
        const hashSum = crypto.createHash('sha1');
        const ext = runtime[key][0]
          .split('/')
          .pop()
          .split('.')
          .pop();

        hashSum.update(fileBuffer);

        const hex = hashSum.digest('hex');

        runtime[key].push(`_${hex}.${ext}`);

        setTimeout(() => {
          sh.exec(`cp ${runtime[key][0]} public/${runtime[key][1]}`);
        }, delay);
      }
    });
  }

  const UACode = 'G-CX7P9K6W67';
  const GCode = UACode;
  const RampMetrics = `
    var _rmq=_rmq||[],_rmq_domain="postman.com";
    _rmq.push(["setAccount","asLtEBCh7D4pMetaFgSz","asLtEBCh7D4pMetaFgSz:LsgKvmHz1TMJTazA_M37"]);
    _rmq.push(["trackPageview"]);_rmq.push(["trackSubmit"]);
    (function(){var a=document.createElement("script");
    a.type="text/javascript";a['src']="/rm.min.js";
    var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)})();
  `;


  const script = (process.env.PM_TECH_RT
      && `
${RampMetrics}
${pmt}
setTimeout(function(){
  var propertyName = 'postman-docs';
  if (window.pmt) {
    window.pmt('setScalp', [{
      property: propertyName
    }]);
    window.pmt('scalp', [
      'pm-analytics',
      'load',
      document.location.pathname
    ]);
    window.pmt('trackClicks');

    var dnt = (parseInt(navigator.doNotTrack) === 1 || parseInt(window.doNotTrack) === 1 || parseInt(navigator.msDoNotTrack) === 1 || navigator.doNotTrack === "yes");

    window.pmt('log', ['navigator.doNotTrack: ' + dnt]);

    if(!dnt) {
      load('/_ga.js');
      load('/_gtag.js');

      var d = 1000, int;
      var int = setInterval(function(){
        if (window.ga) {
          window.pmt('set', ['ga', function(){
            if (typeof window.ga === 'function') {
              window.ga.apply(this, arguments);
            }
            return window.ga;
          }]);

          var sitename = document.location.hostname;
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GCode}'); // UACode & GCode are the same
          window.pmt('log', ['[gtag] config: ${GCode}']);
          window.pmt('ga', ['${UACode}', sitename]);
          window.pmt('log', ['initialized GA: ' + sitename + ' (' + '${UACode}' + ')']);
          window._iaq = window._iaq || {};
          clearInterval(int);
        }
      }, d);
    }
  }
}, 1000);

function load(src, cb) {
   var e = document.createElement('script');
   e.src = src;
   e.async = true;
   e.onreadystatechange = function(){
     if (this.readyState === 'complete' || this.readyState === 'loaded') {
       if (typeof cb === 'function') {
         cb();
       }
     }
   };
   e.onload = cb;
   document.head.appendChild(e);
 }
`)
|| `
  console.info('Postman OSS');
`;

  fs.writeFile('bff.json', JSON.stringify({ script }), async (err) => {
    if (err) {
      throw err;
    }

    await cacheCdn('https://www.google-analytics.com/analytics.js', '_ga');
    await cacheCdn('https://www.googletagmanager.com/gtag/js', '_gtag');
    sh.exec('cp node_modules/@rampmetrics/rm/rm.min.js public/');
  });
};

prefetch();
