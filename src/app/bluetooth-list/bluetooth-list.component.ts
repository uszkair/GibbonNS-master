import {ItemEventData} from "tns-core-modules/ui/list-view"
import {Component, OnInit} from '@angular/core';
import {BluetoothService} from "~/app/services/bluetooth.service";
import {FoundedDevice} from "~/app/services/founded.device";

@Component({
    selector: 'ns-bluetooth-list',
    templateUrl: './bluetooth-list.component.html',
    moduleId: module.id,
    styleUrls: ['./bluetooth-list.component.css']
})
export class BluetoothListComponent implements OnInit {

    foundedDevices: Array<FoundedDevice>;

    constructor(private blService: BluetoothService) {

    }


    ngOnInit() {
        this.searchDevice();
    }


    searchDevice() {
        if (this.blService.IsEnabled) {

        }
        this.foundedDevices = [{
            address: '1002', name: 'Robi'
        },
        {
            address: '1003', name: 'Sanyi'
        }]//;this.blService.FoundedDevices;
    }

    onItemTap(args: ItemEventData): void {
        console.log('Item with index: ' + args.index + ' tapped');
    }
}
