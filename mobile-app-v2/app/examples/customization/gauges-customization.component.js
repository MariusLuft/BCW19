"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var view_1 = require("tns-core-modules/ui/core/view");
var GaugesCustomizationComponent = (function () {
    function GaugesCustomizationComponent() {
    }
    GaugesCustomizationComponent.prototype.ngAfterViewInit = function () {
    };
    GaugesCustomizationComponent.prototype.getScan = function (args) {
        var _this = this;
        fetch("http://100.100.149.140/iolink/v1/devices/1/processdata/value?format=raw&direction=both")
            .then(function (response) { return response.json(); })
            .then(function (capacitorResponse) {
            var capacitorValue = capacitorResponse.in.value.deviceRawTypeValue;
            console.log("Capacitor Value: " + capacitorValue);
            var button = args.object;
            var parent = button.parent;
            fetch("http://100.100.149.140/iolink/v1/devices/3/processdata/value?format=raw&direction=both")
                .then(function (rfidresponse) { return rfidresponse.json(); })
                .then(function (rfidJson) {
                var rfidValue = rfidJson.in.value.deviceRawTypeValue;
                var rfidlbl = view_1.getViewById(parent, "rfidLabel");
                rfidlbl.text = rfidValue;
                var timestampValue = (new Date).toLocaleDateString("%A, %B, %e, %Y");
                var timestamplbl = view_1.getViewById(parent, "timestampLabel");
                timestamplbl.text = timestampValue;
                var scale = _this.scaleElement.nativeElement;
                for (var i = 0; i < scale.indicators.length; i++) {
                    var barIndicator = scale.indicators.getItem(i);
                    barIndicator.maximum = parseInt(String(capacitorValue).substring(0, 3));
                }
            }).catch(function (e) {
                console.error("Error reading RFID");
                console.error(e);
            });
        }).catch(function (e) {
            console.error("Error reading Capacitor");
            console.error(e);
        });
    };
    __decorate([
        core_1.ViewChild("myScale"),
        __metadata("design:type", core_1.ElementRef)
    ], GaugesCustomizationComponent.prototype, "scaleElement", void 0);
    GaugesCustomizationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "tk-gauges-customization",
            templateUrl: "gauges-customization.component.html",
            styleUrls: ["gauges-customization.component.css"]
        }),
        __metadata("design:paramtypes", [])
    ], GaugesCustomizationComponent);
    return GaugesCustomizationComponent;
}());
exports.GaugesCustomizationComponent = GaugesCustomizationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F1Z2VzLWN1c3RvbWl6YXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2F1Z2VzLWN1c3RvbWl6YXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esc0NBQWdGO0FBTWhGLHNEQUE0RDtBQVM1RDtJQUNJO0lBQ0EsQ0FBQztJQUlELHNEQUFlLEdBQWY7SUFFQSxDQUFDO0lBRU0sOENBQU8sR0FBZCxVQUFlLElBQWU7UUFBOUIsaUJBMENDO1FBekNHLEtBQUssQ0FBQyx3RkFBd0YsQ0FBQzthQUM5RixJQUFJLENBQUMsVUFBQyxRQUFRLElBQUssT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO2FBQ25DLElBQUksQ0FBQyxVQUFDLGlCQUFpQjtZQUVwQixJQUFJLGNBQWMsR0FBRyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDO1lBQ25FLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUcsY0FBYyxDQUFDLENBQUM7WUFFbEQsSUFBSSxNQUFNLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUMvQixJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBSTNCLEtBQUssQ0FBQyx3RkFBd0YsQ0FBQztpQkFDOUYsSUFBSSxDQUFDLFVBQUMsWUFBWSxJQUFLLE9BQUEsWUFBWSxDQUFDLElBQUksRUFBRSxFQUFuQixDQUFtQixDQUFDO2lCQUMzQyxJQUFJLENBQUMsVUFBQyxRQUFRO2dCQUdYLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDO2dCQUNyRCxJQUFJLE9BQU8sR0FBVSxrQkFBVyxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztnQkFDdEQsT0FBTyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7Z0JBR3pCLElBQUksY0FBYyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUNyRSxJQUFJLFlBQVksR0FBVSxrQkFBVyxDQUFDLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUNoRSxZQUFZLENBQUMsSUFBSSxHQUFHLGNBQWMsQ0FBQztnQkFHbkMsSUFBSSxLQUFLLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxhQUE0QixDQUFDO2dCQUMzRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQzlDLElBQUksWUFBWSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBdUIsQ0FBQztvQkFDckUsWUFBWSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDM0U7WUFFTCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxDQUFDO2dCQUNQLE9BQU8sQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQztnQkFDcEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLENBQUM7WUFDUCxPQUFPLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUE7WUFDeEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFoRHFCO1FBQXJCLGdCQUFTLENBQUMsU0FBUyxDQUFDO2tDQUFlLGlCQUFVO3NFQUFDO0lBSnRDLDRCQUE0QjtRQU54QyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSx5QkFBeUI7WUFDbkMsV0FBVyxFQUFFLHFDQUFxQztZQUNsRCxTQUFTLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQztTQUNwRCxDQUFDOztPQUNXLDRCQUE0QixDQXFEeEM7SUFBRCxtQ0FBQztDQUFBLEFBckRELElBcURDO0FBckRZLG9FQUE0QiIsInNvdXJjZXNDb250ZW50IjpbIi8vID4+IGdhdWdlcy1jdXN0b21pemF0aW9uLWFuZ3VsYXJcbmltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJhZGlhbFNjYWxlLCBSYWRpYWxCYXJJbmRpY2F0b3IgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWdhdWdlXCI7XG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGFiZWxcIjtcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9jb3JlL3ZpZXdcIjtcbmltcG9ydCB7IHRvcG1vc3QgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiO1xuaW1wb3J0IHsgZ2V0Vmlld0J5SWQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9jb3JlL3ZpZXdcIjtcbmltcG9ydCB7IE5hdmlnYXRlZERhdGEsIFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6IFwidGstZ2F1Z2VzLWN1c3RvbWl6YXRpb25cIixcbiAgICB0ZW1wbGF0ZVVybDogXCJnYXVnZXMtY3VzdG9taXphdGlvbi5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiZ2F1Z2VzLWN1c3RvbWl6YXRpb24uY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBHYXVnZXNDdXN0b21pemF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgQFZpZXdDaGlsZChcIm15U2NhbGVcIikgc2NhbGVFbGVtZW50OiBFbGVtZW50UmVmO1xuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICBcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0U2NhbihhcmdzOiBFdmVudERhdGEpe1xuICAgICAgICBmZXRjaChcImh0dHA6Ly8xMDAuMTAwLjE0OS4xNDAvaW9saW5rL3YxL2RldmljZXMvMS9wcm9jZXNzZGF0YS92YWx1ZT9mb3JtYXQ9cmF3JmRpcmVjdGlvbj1ib3RoXCIpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbigoY2FwYWNpdG9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJDYXBhY2l0b3IgUmVzcG9uc2UgKioqKioqKiogXCIrIEpTT04uc3RyaW5naWZ5KGNhcGFjaXRvclJlc3BvbnNlKSk7XG4gICAgICAgICAgICB2YXIgY2FwYWNpdG9yVmFsdWUgPSBjYXBhY2l0b3JSZXNwb25zZS5pbi52YWx1ZS5kZXZpY2VSYXdUeXBlVmFsdWU7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNhcGFjaXRvciBWYWx1ZTogXCIgKyBjYXBhY2l0b3JWYWx1ZSk7XG5cbiAgICAgICAgICAgIGxldCBidXR0b24gPSA8Vmlldz5hcmdzLm9iamVjdDtcbiAgICAgICAgICAgIGxldCBwYXJlbnQgPSBidXR0b24ucGFyZW50O1xuICAgICAgICAgICAgLy9sZXQgY2FwYWNpdG9ybGJsID0gPExhYmVsPmdldFZpZXdCeUlkKHBhcmVudCwgXCJjYXBhY2l0b3JMYWJlbFwiKTtcbiAgICAgICAgICAgIC8vY2FwYWNpdG9ybGJsLnRleHQgPSBjYXBhY2l0b3JWYWx1ZTtcblxuICAgICAgICAgICAgZmV0Y2goXCJodHRwOi8vMTAwLjEwMC4xNDkuMTQwL2lvbGluay92MS9kZXZpY2VzLzMvcHJvY2Vzc2RhdGEvdmFsdWU/Zm9ybWF0PXJhdyZkaXJlY3Rpb249Ym90aFwiKVxuICAgICAgICAgICAgLnRoZW4oKHJmaWRyZXNwb25zZSkgPT4gcmZpZHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKChyZmlkSnNvbikgPT4ge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJSRklEIFJlc3BvbnNlICoqKioqKioqIFwiKyBKU09OLnN0cmluZ2lmeShyZmlkSnNvbikpO1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJSRklEIFZhbHVlOiBcIiArIHJmaWRKc29uLmluLnZhbHVlLmRldmljZVJhd1R5cGVWYWx1ZSk7XG4gICAgICAgICAgICAgICAgdmFyIHJmaWRWYWx1ZSA9IHJmaWRKc29uLmluLnZhbHVlLmRldmljZVJhd1R5cGVWYWx1ZTtcbiAgICAgICAgICAgICAgICBsZXQgcmZpZGxibCA9IDxMYWJlbD5nZXRWaWV3QnlJZChwYXJlbnQsIFwicmZpZExhYmVsXCIpO1xuICAgICAgICAgICAgICAgIHJmaWRsYmwudGV4dCA9IHJmaWRWYWx1ZTtcblxuXG4gICAgICAgICAgICAgICAgdmFyIHRpbWVzdGFtcFZhbHVlID0gKG5ldyBEYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoXCIlQSwgJUIsICVlLCAlWVwiKTtcbiAgICAgICAgICAgICAgICBsZXQgdGltZXN0YW1wbGJsID0gPExhYmVsPmdldFZpZXdCeUlkKHBhcmVudCwgXCJ0aW1lc3RhbXBMYWJlbFwiKTtcbiAgICAgICAgICAgICAgICB0aW1lc3RhbXBsYmwudGV4dCA9IHRpbWVzdGFtcFZhbHVlO1xuXG5cbiAgICAgICAgICAgICAgICBsZXQgc2NhbGUgPSB0aGlzLnNjYWxlRWxlbWVudC5uYXRpdmVFbGVtZW50IGFzIFJhZGlhbFNjYWxlO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2NhbGUuaW5kaWNhdG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYmFySW5kaWNhdG9yID0gc2NhbGUuaW5kaWNhdG9ycy5nZXRJdGVtKGkpIGFzIFJhZGlhbEJhckluZGljYXRvcjtcbiAgICAgICAgICAgICAgICAgICAgYmFySW5kaWNhdG9yLm1heGltdW0gPSBwYXJzZUludChTdHJpbmcoY2FwYWNpdG9yVmFsdWUpLnN1YnN0cmluZygwLCAzKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgcmVhZGluZyBSRklEXCIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciByZWFkaW5nIENhcGFjaXRvclwiKVxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4vLyA8PCBnYXVnZXMtY3VzdG9taXphdGlvbi1hbmd1bGFyXG4iXX0=