import {Injectable} from '@angular/core';
import {FoundedDevice} from "~/app/services/founded.device";
import * as Utils from 'utils/utils';
import {ad} from "tns-core-modules/utils/utils";
import {BluetoothDevice} from "~/app/bluetooth/blue-tooth-device";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/distinctUntilChanged';

var dialogs = require("tns-core-modules/ui/dialogs");
import {Bluetooth} from 'nativescript-bluetooth';

const bluetooth = new Bluetooth();

@Injectable({
    providedIn: 'root'
})
export class BluetoothService {

    constructor() {
    }


    search() {
        this.doIsEnabledBluetooth();

    }


    doIsEnabledBluetooth() {
        setTimeout(() =>
            bluetooth.enable().then(function (enabled) {
                let foundedDeviceArray: BluetoothDevice[] = [];

                if (enabled) {
                    console.log("Bluetooth is enabled.");
                    setTimeout(() =>
                            this.doStartScanning()
                        , 1000);
                }
            }), 1000);
    }

    doStartScanning() {
        let foundedDeviceArray: BluetoothDevice[] = [];
        bluetooth
            .startScanning({
                onDiscovered: function (device) {
                    console.log("almapaprikak1", device)
                    const blDevice = new BluetoothDevice(device.UUID, device.localName);
                    foundedDeviceArray.push(blDevice);
                    console.log("MACILACI", foundedDeviceArray)
                }
            })
            .then(
                function () {
                    dialogs.alert({
                        title: "Scanning is complete.",
                        message: "Scanning is complete",
                        okButtonText: "OK"
                    });
                    return foundedDeviceArray;
                },
                function (err) {
                    console.log("ERRdOR", err);
                    return null;
                }
            );
    }

    doStopScanning() {
        bluetooth.stopScanning().then(
            function () {
                dialogs.alert({
                    title: "Stop Scanning",
                    message: "Scanning is stopped",
                    okButtonText: "OK"
                });
            },
            function (err) {
                dialogs.alert({
                    title: "Error occured!",
                    message: err,
                    okButtonText: "OK"
                });
            }
        );
    }

}
