var service_uuid="75cf7374-a137-47e7-95e5-e675189c8a3e";
var characteristic_uuid="0d563a58-196a-48ce-ace2-dfec78acc814";
document.addEventListener('deviceready', deviceready, false);
var connectedDevice=null;
function deviceready(){
  startBLE();
  $("button[name='unlock']").onClick(){
    if(connectedDevice===null){
      alert("Device Not Connected");
      startBLE();
    }
    else {
      window.MacAddress.getMacAddress(
function(macAddress) {writeBLE(macAddress);},function(fail) {alert("Failed because"+fail+", Retry Please");}
);
    }
  }
}
function startBLE() {
  ble.scan([], 30, function(device) {
      alert(device.name);
      if(device.name=="ENPELN"){
        ble.autoConnect(device.id,function(BleDevice){
          connectedDevice=BleDevice;
        },function(){alert("couldn't connect to PAEPACK BLE device");});
      }
        });
}
function writeBLE(data){
  ble.write(connectedDevice.id, service_uuid, characteristic_uuid, stringToBytes(data), function(){
    console.log("sent : "+data);
  }, function(){writeBLE(data);});
}
