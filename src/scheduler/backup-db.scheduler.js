const cron = require('node-cron')
const exec = require('child_process').exec
const rollbar = require('../config/rollbar.config')

const backupDBScheduler = cron.schedule('0 0 * * *', () => {
  console.log('dumping . . .')
  exec('mysqldump -u root db_express > db_express_dump.sql', (error) => {
    if (error) {
      console.log('dumping error : ', error.message)
      rollbar.error(`Scheduler - backup-db.scheduler.js : ${error.message}`)
    } else {
      console.log('dumping finish')
    }
  })
})

backupDBScheduler.stop()

module.exports = backupDBScheduler
