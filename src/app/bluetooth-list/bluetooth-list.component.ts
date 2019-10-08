import {ItemEventData} from "tns-core-modules/ui/list-view"
import {AfterViewInit, Component, OnInit} from '@angular/core';
import {BluetoothService} from "~/app/services/bluetooth.service";
import {FoundedDevice} from "~/app/services/founded.device";

@Component({
    selector: 'ns-bluetooth-list',
    templateUrl: './bluetooth-list.component.html',
    moduleId: module.id,
    styleUrls: ['./bluetooth-list.component.css']
})
export class BluetoothListComponent implements OnInit ,AfterViewInit{
    ngAfterViewInit(): void {
        this.searchDevice();
    }

    foundedDevices: Array<FoundedDevice>;

    constructor(private blService: BluetoothService) {

    }


    ngOnInit() {

    }


    searchDevice() {
       this.blService.search();
    }

    onItemTap(args: ItemEventData): void {
        console.log('Item with index: ' + args.index + ' tapped');
    }
}
