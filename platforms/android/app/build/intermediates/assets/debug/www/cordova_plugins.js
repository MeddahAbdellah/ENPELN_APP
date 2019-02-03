cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "com-badrit-macaddress.MacAddress",
    "file": "plugins/com-badrit-macaddress/www/MacAddress.js",
    "pluginId": "com-badrit-macaddress",
    "clobbers": [
      "window.MacAddress"
    ]
  },
  {
    "id": "cordova-plugin-ble-central.ble",
    "file": "plugins/cordova-plugin-ble-central/www/ble.js",
    "pluginId": "cordova-plugin-ble-central",
    "clobbers": [
      "ble"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "com-badrit-macaddress": "0.2.0",
  "cordova-plugin-ble-central": "1.2.2"
};
// BOTTOM OF METADATA
});