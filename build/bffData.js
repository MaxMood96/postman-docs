const fs = require("fs")
const fetch = require("node-fetch")
const path = require("path")
const sh = require("shelljs")

sh.config.silent = true

sh.exec("mkdir -p bff-data")

require('./pmt')

sh.config.silent = false

const TIME = new Date().getTime()
const api = process.env.MKAPI_URL || 'https://www.postman.com/mkapi'
const url = `${api}/worker.json?${TIME}`

const bffData = () =>
  new Promise((resolve) => {
    if (api) {
      fetch(url).then((res) => {
        res.text().then((resp) => {
          if (resp) {
            const { services } = JSON.parse(resp)
            const max = services.length
            let i

            for (i = 0; i < max; i += 1) {
              const service = services[i]
              const serviceUrl = `${api}/${service}.json?${TIME}`

              fetch(serviceUrl).then((re) => {
                re.text().then((respo) => {
                  if (respo) {
                    fs.writeFile(
                      path.join(".", "bff-data", `${service}.json`),
                      respo,
                      () => {
                        //
                      }
                    )

                    /* eslint-disable no-console */
                    console.info(`Success pre-fetch ${service}`)
                    /* eslint-enable */
                  }
                })
              })
            }

            resolve(true)
          }
        })
      })
    } else {
      /* eslint-disable no-console */
      console.log("No bff endpoint provided.")
      /* eslint-enable */
    }
  })

module.exports = bffData
