const { iconSet } = require('@quasar/extras/material-icons')

module.exports = function (ctx) {
  return {
    framework: {
      // ...
      extras: [
        iconSet
      ],
      // ...
    },
  }
}
