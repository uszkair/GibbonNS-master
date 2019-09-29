"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var bluetooth_service_1 = require("~/app/services/bluetooth.service");
var BluetoothListComponent = /** @class */ (function () {
    function BluetoothListComponent(blService) {
        this.blService = blService;
    }
    BluetoothListComponent.prototype.ngOnInit = function () {
        this.searchDevice();
    };
    BluetoothListComponent.prototype.searchDevice = function () {
        if (this.blService.IsEnabled) {
        }
        this.foundedDevices = [{
                address: '1002', name: 'Robi'
            },
            {
                address: '1003', name: 'Sanyi'
            }]; //;this.blService.FoundedDevices;
    };
    BluetoothListComponent.prototype.onItemTap = function (args) {
        console.log('Item with index: ' + args.index + ' tapped');
    };
    BluetoothListComponent = __decorate([
        core_1.Component({
            selector: 'ns-bluetooth-list',
            templateUrl: './bluetooth-list.component.html',
            moduleId: module.id,
            styleUrls: ['./bluetooth-list.component.css']
        }),
        __metadata("design:paramtypes", [bluetooth_service_1.BluetoothService])
    ], BluetoothListComponent);
    return BluetoothListComponent;
}());
exports.BluetoothListComponent = BluetoothListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmx1ZXRvb3RoLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmx1ZXRvb3RoLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esc0NBQWdEO0FBQ2hELHNFQUFrRTtBQVNsRTtJQUlJLGdDQUFvQixTQUEyQjtRQUEzQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUUvQyxDQUFDO0lBR0QseUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBR0QsNkNBQVksR0FBWjtRQUNJLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUU7U0FFN0I7UUFDRCxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUM7Z0JBQ25CLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU07YUFDaEM7WUFDRDtnQkFDSSxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPO2FBQ2pDLENBQUMsQ0FBQSxDQUFBLGlDQUFpQztJQUN2QyxDQUFDO0lBRUQsMENBQVMsR0FBVCxVQUFVLElBQW1CO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBNUJRLHNCQUFzQjtRQU5sQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixXQUFXLEVBQUUsaUNBQWlDO1lBQzlDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztTQUNoRCxDQUFDO3lDQUtpQyxvQ0FBZ0I7T0FKdEMsc0JBQXNCLENBNkJsQztJQUFELDZCQUFDO0NBQUEsQUE3QkQsSUE2QkM7QUE3Qlksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJdGVtRXZlbnREYXRhfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXdcIlxuaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0JsdWV0b290aFNlcnZpY2V9IGZyb20gXCJ+L2FwcC9zZXJ2aWNlcy9ibHVldG9vdGguc2VydmljZVwiO1xuaW1wb3J0IHtGb3VuZGVkRGV2aWNlfSBmcm9tIFwifi9hcHAvc2VydmljZXMvZm91bmRlZC5kZXZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICducy1ibHVldG9vdGgtbGlzdCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2JsdWV0b290aC1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHN0eWxlVXJsczogWycuL2JsdWV0b290aC1saXN0LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBCbHVldG9vdGhMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGZvdW5kZWREZXZpY2VzOiBBcnJheTxGb3VuZGVkRGV2aWNlPjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYmxTZXJ2aWNlOiBCbHVldG9vdGhTZXJ2aWNlKSB7XG5cbiAgICB9XG5cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnNlYXJjaERldmljZSgpO1xuICAgIH1cblxuXG4gICAgc2VhcmNoRGV2aWNlKCkge1xuICAgICAgICBpZiAodGhpcy5ibFNlcnZpY2UuSXNFbmFibGVkKSB7XG5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZvdW5kZWREZXZpY2VzID0gW3tcbiAgICAgICAgICAgIGFkZHJlc3M6ICcxMDAyJywgbmFtZTogJ1JvYmknXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGFkZHJlc3M6ICcxMDAzJywgbmFtZTogJ1NhbnlpJ1xuICAgICAgICB9XS8vO3RoaXMuYmxTZXJ2aWNlLkZvdW5kZWREZXZpY2VzO1xuICAgIH1cblxuICAgIG9uSXRlbVRhcChhcmdzOiBJdGVtRXZlbnREYXRhKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdJdGVtIHdpdGggaW5kZXg6ICcgKyBhcmdzLmluZGV4ICsgJyB0YXBwZWQnKTtcbiAgICB9XG59XG4iXX0=