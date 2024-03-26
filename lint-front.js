const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

function readFiles(dirPath) {
 fs.readdirSync(dirPath).forEach(item => {
   const itemPath = path.join(dirPath, item);
   const stat = fs.lstatSync(itemPath);

   if (stat.isDirectory()) {
     // If item is a directory, recurse into it
     readFiles(itemPath);
   } else if (stat.isFile()) {
     // If item is a file, read and parse its frontmatter
     const fileContents = fs.readFileSync(itemPath, 'utf8');
     const { data } = matter(fileContents);


    if (data.hasOwnProperty('title')) {
        if (typeof data['title'] !== 'string') {
          console.error(`Invalid type for title: expected string, got ${typeof data['title']}`);
        } else if (/[\u201C\u201D\u2018\u2019]/g.test(data['title'])) {
          console.error(`ERROR: ** Smart quotes detected in title: ${data['title']} **`);
        }
      } else {
        console.error(`Missing 'title' field in frontmatter (%s)`, itemPath);
      }
    }
 });
}

readFiles('./src/pages/docs');

