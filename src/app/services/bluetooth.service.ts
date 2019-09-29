import { Injectable } from '@angular/core';
import {FoundedDevice} from "~/app/services/founded.device";
import * as Utils from 'utils/utils';
// import * as bluetooth from 'nativescript-bluetooth';

@Injectable({
  providedIn: 'root'
})
export class BluetoothService {

  private readonly _adapter : android.bluetooth.BluetoothAdapter;
  private readonly _manager : any;

  constructor() {
    this._manager = Utils.ad.getApplicationContext().getSystemService((<any>(android.content.Context)).BLUETOOTH_SERVICE);
    this._adapter = this._manager.getAdapter();
  }

  public get IsEnabled() : Promise<boolean> {
    // bluetooth.isBluetoothEnabled().then(
    //     enabled => console.log("Enabled? " + enabled)
    // );
    return new Promise<boolean>((resolve, reject) => {
      try {
        console.log('IsEnabled: ', this._adapter.isEnabled());
        resolve(this._adapter != null && this._adapter.isEnabled());
      } catch (ex) {
        reject(ex);
      }
    });
  }

  isEnabled(){
    // var bluetooth = require("nativescript-bluetooth");
    // var dialogs = require("tns-core-modules/ui/dialogs");
    //
    // bluetooth.isBluetoothEnabled().then(function(enabled) {
    //   dialogs.alert({
    //     title: "Enabled?",
    //     message: enabled ? "Yes" : "No",
    //     okButtonText: "OK, thanks"
    //   });
    // });
  }





  public get FoundedDevices() : Array<FoundedDevice> {

    if (this._adapter.isEnabled()) {
      this._adapter.enable();
    }

    const devices = this._adapter.getBondedDevices().toArray();
    const results = new Array<FoundedDevice>();
    const length = devices.length;

    for (let i = 0; i < length; i++) {

      const device = <android.bluetooth.BluetoothDevice>(devices[i]);

      const address = device.getAddress();
      const name = device.getName();
      results.push(new FoundedDevice(address, name));
    }

    return results;
  }






}
