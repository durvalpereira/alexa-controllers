require('dotenv').config()
const exec = require('child_process').exec

const wemore = require('wemore')
const computer = wemore.Emulate({
  friendlyName: 'MacBook',
  port: 64344,
  serial: process.env.SERIAL
})

computer.on('listening', function() {
  console.log('MacBook listening on', this.port)
})

computer.on('on', function() {
  exec('caffeinate -u -t 2', function(error, stdout, stderr) {})
})

computer.on('off', function() {
  exec('pmset sleepnow', function(error, stdout, stderr) {})
})