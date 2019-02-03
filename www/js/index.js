var service_uuid="75cf7374-a137-47e7-95e5-e675189c8a3e";
var characteristic_uuid="0d563a58-196a-48ce-ace2-dfec78acc814";
document.addEventListener('deviceready', deviceready, false);
var connectedDevice=null;
function deviceready(){
  startBLE();
  $("button[name='unlock']").on("click",function(){
    if(connectedDevice===null){
      startBLE();
    }
    else {
      window.MacAddress.getMacAddress(
      function(macAddress) {writeBLE(macAddress);},function(fail) {alert("Failed because"+fail+", Retry Please");});
    }
  });
}
function startBLE() {
  ble.scan([], 30, function(device) {
      if(device.name=="ENPELN"){
        ble.autoConnect(device.id,function(BleDevice){
          connectedDevice=BleDevice;
          alert("connected to : " + device.name );
        },function(){alert("couldn't connect to ENPELN BLE device");});
      }
        });
}
function writeBLE(data){
  ble.write(connectedDevice.id, service_uuid, characteristic_uuid, stringToBytes(data), function(){
  }, function(){writeBLE(data);});
}
function stringToBytes(string) {
   var array = new Uint8Array(string.length);
   for (var i = 0, l = string.length; i < l; i++) {
       array[i] = string.charCodeAt(i);
    }
    return array.buffer;
}
