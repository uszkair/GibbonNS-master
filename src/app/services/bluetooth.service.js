"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var founded_device_1 = require("~/app/services/founded.device");
var Utils = require("utils/utils");
// import * as bluetooth from 'nativescript-bluetooth';
var BluetoothService = /** @class */ (function () {
    function BluetoothService() {
        this._manager = Utils.ad.getApplicationContext().getSystemService((android.content.Context).BLUETOOTH_SERVICE);
        this._adapter = this._manager.getAdapter();
    }
    Object.defineProperty(BluetoothService.prototype, "IsEnabled", {
        get: function () {
            var _this = this;
            // bluetooth.isBluetoothEnabled().then(
            //     enabled => console.log("Enabled? " + enabled)
            // );
            return new Promise(function (resolve, reject) {
                try {
                    console.log('IsEnabled: ', _this._adapter.isEnabled());
                    resolve(_this._adapter != null && _this._adapter.isEnabled());
                }
                catch (ex) {
                    reject(ex);
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    BluetoothService.prototype.isEnabled = function () {
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
    };
    Object.defineProperty(BluetoothService.prototype, "FoundedDevices", {
        get: function () {
            if (this._adapter.isEnabled()) {
                this._adapter.enable();
            }
            var devices = this._adapter.getBondedDevices().toArray();
            var results = new Array();
            var length = devices.length;
            for (var i = 0; i < length; i++) {
                var device = (devices[i]);
                var address = device.getAddress();
                var name_1 = device.getName();
                results.push(new founded_device_1.FoundedDevice(address, name_1));
            }
            return results;
        },
        enumerable: true,
        configurable: true
    });
    BluetoothService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], BluetoothService);
    return BluetoothService;
}());
exports.BluetoothService = BluetoothService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmx1ZXRvb3RoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJibHVldG9vdGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxnRUFBNEQ7QUFDNUQsbUNBQXFDO0FBQ3JDLHVEQUF1RDtBQUt2RDtJQUtFO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLHFCQUFxQixFQUFFLENBQUMsZ0JBQWdCLENBQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBRSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDdEgsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFRCxzQkFBVyx1Q0FBUzthQUFwQjtZQUFBLGlCQVlDO1lBWEMsdUNBQXVDO1lBQ3ZDLG9EQUFvRDtZQUNwRCxLQUFLO1lBQ0wsT0FBTyxJQUFJLE9BQU8sQ0FBVSxVQUFDLE9BQU8sRUFBRSxNQUFNO2dCQUMxQyxJQUFJO29CQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztvQkFDdEQsT0FBTyxDQUFDLEtBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxJQUFJLEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztpQkFDN0Q7Z0JBQUMsT0FBTyxFQUFFLEVBQUU7b0JBQ1gsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUNaO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDOzs7T0FBQTtJQUVELG9DQUFTLEdBQVQ7UUFDRSxxREFBcUQ7UUFDckQsd0RBQXdEO1FBQ3hELEVBQUU7UUFDRiwwREFBMEQ7UUFDMUQsb0JBQW9CO1FBQ3BCLHlCQUF5QjtRQUN6Qix1Q0FBdUM7UUFDdkMsaUNBQWlDO1FBQ2pDLFFBQVE7UUFDUixNQUFNO0lBQ1IsQ0FBQztJQU1ELHNCQUFXLDRDQUFjO2FBQXpCO1lBRUUsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxFQUFFO2dCQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ3hCO1lBRUQsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzNELElBQU0sT0FBTyxHQUFHLElBQUksS0FBSyxFQUFpQixDQUFDO1lBQzNDLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFFOUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFFL0IsSUFBTSxNQUFNLEdBQXNDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRS9ELElBQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDcEMsSUFBTSxNQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUM5QixPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksOEJBQWEsQ0FBQyxPQUFPLEVBQUUsTUFBSSxDQUFDLENBQUMsQ0FBQzthQUNoRDtZQUVELE9BQU8sT0FBTyxDQUFDO1FBQ2pCLENBQUM7OztPQUFBO0lBN0RVLGdCQUFnQjtRQUg1QixpQkFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQzs7T0FDVyxnQkFBZ0IsQ0FvRTVCO0lBQUQsdUJBQUM7Q0FBQSxBQXBFRCxJQW9FQztBQXBFWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0ZvdW5kZWREZXZpY2V9IGZyb20gXCJ+L2FwcC9zZXJ2aWNlcy9mb3VuZGVkLmRldmljZVwiO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAndXRpbHMvdXRpbHMnO1xuLy8gaW1wb3J0ICogYXMgYmx1ZXRvb3RoIGZyb20gJ25hdGl2ZXNjcmlwdC1ibHVldG9vdGgnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBCbHVldG9vdGhTZXJ2aWNlIHtcblxuICBwcml2YXRlIHJlYWRvbmx5IF9hZGFwdGVyIDogYW5kcm9pZC5ibHVldG9vdGguQmx1ZXRvb3RoQWRhcHRlcjtcbiAgcHJpdmF0ZSByZWFkb25seSBfbWFuYWdlciA6IGFueTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9tYW5hZ2VyID0gVXRpbHMuYWQuZ2V0QXBwbGljYXRpb25Db250ZXh0KCkuZ2V0U3lzdGVtU2VydmljZSgoPGFueT4oYW5kcm9pZC5jb250ZW50LkNvbnRleHQpKS5CTFVFVE9PVEhfU0VSVklDRSk7XG4gICAgdGhpcy5fYWRhcHRlciA9IHRoaXMuX21hbmFnZXIuZ2V0QWRhcHRlcigpO1xuICB9XG5cbiAgcHVibGljIGdldCBJc0VuYWJsZWQoKSA6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIC8vIGJsdWV0b290aC5pc0JsdWV0b290aEVuYWJsZWQoKS50aGVuKFxuICAgIC8vICAgICBlbmFibGVkID0+IGNvbnNvbGUubG9nKFwiRW5hYmxlZD8gXCIgKyBlbmFibGVkKVxuICAgIC8vICk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGJvb2xlYW4+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdJc0VuYWJsZWQ6ICcsIHRoaXMuX2FkYXB0ZXIuaXNFbmFibGVkKCkpO1xuICAgICAgICByZXNvbHZlKHRoaXMuX2FkYXB0ZXIgIT0gbnVsbCAmJiB0aGlzLl9hZGFwdGVyLmlzRW5hYmxlZCgpKTtcbiAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgIHJlamVjdChleCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpc0VuYWJsZWQoKXtcbiAgICAvLyB2YXIgYmx1ZXRvb3RoID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1ibHVldG9vdGhcIik7XG4gICAgLy8gdmFyIGRpYWxvZ3MgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCIpO1xuICAgIC8vXG4gICAgLy8gYmx1ZXRvb3RoLmlzQmx1ZXRvb3RoRW5hYmxlZCgpLnRoZW4oZnVuY3Rpb24oZW5hYmxlZCkge1xuICAgIC8vICAgZGlhbG9ncy5hbGVydCh7XG4gICAgLy8gICAgIHRpdGxlOiBcIkVuYWJsZWQ/XCIsXG4gICAgLy8gICAgIG1lc3NhZ2U6IGVuYWJsZWQgPyBcIlllc1wiIDogXCJOb1wiLFxuICAgIC8vICAgICBva0J1dHRvblRleHQ6IFwiT0ssIHRoYW5rc1wiXG4gICAgLy8gICB9KTtcbiAgICAvLyB9KTtcbiAgfVxuXG5cblxuXG5cbiAgcHVibGljIGdldCBGb3VuZGVkRGV2aWNlcygpIDogQXJyYXk8Rm91bmRlZERldmljZT4ge1xuXG4gICAgaWYgKHRoaXMuX2FkYXB0ZXIuaXNFbmFibGVkKCkpIHtcbiAgICAgIHRoaXMuX2FkYXB0ZXIuZW5hYmxlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgZGV2aWNlcyA9IHRoaXMuX2FkYXB0ZXIuZ2V0Qm9uZGVkRGV2aWNlcygpLnRvQXJyYXkoKTtcbiAgICBjb25zdCByZXN1bHRzID0gbmV3IEFycmF5PEZvdW5kZWREZXZpY2U+KCk7XG4gICAgY29uc3QgbGVuZ3RoID0gZGV2aWNlcy5sZW5ndGg7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cbiAgICAgIGNvbnN0IGRldmljZSA9IDxhbmRyb2lkLmJsdWV0b290aC5CbHVldG9vdGhEZXZpY2U+KGRldmljZXNbaV0pO1xuXG4gICAgICBjb25zdCBhZGRyZXNzID0gZGV2aWNlLmdldEFkZHJlc3MoKTtcbiAgICAgIGNvbnN0IG5hbWUgPSBkZXZpY2UuZ2V0TmFtZSgpO1xuICAgICAgcmVzdWx0cy5wdXNoKG5ldyBGb3VuZGVkRGV2aWNlKGFkZHJlc3MsIG5hbWUpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxuXG5cblxuXG5cblxufVxuIl19