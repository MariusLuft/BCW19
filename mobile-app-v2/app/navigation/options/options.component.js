"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var router_1 = require("@angular/router");
var frameModule = require("tns-core-modules/ui/frame");
var page_1 = require("tns-core-modules/ui/page");
var options_service_1 = require("../../navigation/options/options.service");
var OptionsComponent = (function () {
    function OptionsComponent(_page, _route, _optionsService) {
        this._page = _page;
        this._route = _route;
        this._optionsService = _optionsService;
        this._selectedIndex = -1;
        this._dataItems = new observable_array_1.ObservableArray();
    }
    OptionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._sub = this._route.queryParams.subscribe(function (params) {
            var items = params['items'];
            _this._selectedIndex = +params['selectedIndex'];
            if (items) {
                var splitItems = items.toString().split(',');
                _this._dataItems = new observable_array_1.ObservableArray(splitItems);
            }
        });
    };
    OptionsComponent.prototype.ngOnDestroy = function () {
        this._sub.unsubscribe();
    };
    OptionsComponent.prototype.onLoaded = function () { };
    Object.defineProperty(OptionsComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    OptionsComponent.prototype.onItemTap = function (args) {
        this._optionsService.paramValue = args.index;
        frameModule.topmost().goBack();
    };
    OptionsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "tk-options",
            templateUrl: "options.component.html",
            styleUrls: ["options.component.css"]
        }),
        core_1.Injectable(),
        __metadata("design:paramtypes", [page_1.Page, router_1.ActivatedRoute, options_service_1.OptionsService])
    ], OptionsComponent);
    return OptionsComponent;
}());
exports.OptionsComponent = OptionsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvcHRpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvRjtBQUNwRiwyRUFBeUU7QUFDekUsMENBQWlEO0FBQ2pELHVEQUF5RDtBQUN6RCxpREFBZ0Q7QUFDaEQsNEVBQTBFO0FBUzFFO0lBS0ksMEJBQW9CLEtBQVcsRUFBVSxNQUFzQixFQUFVLGVBQStCO1FBQXBGLFVBQUssR0FBTCxLQUFLLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUZoRyxtQkFBYyxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBR2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxrQ0FBZSxFQUFVLENBQUM7SUFDcEQsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFBQSxpQkFXQztRQVZHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUN6QyxVQUFDLE1BQVc7WUFDUixJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDOUIsS0FBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUMvQyxJQUFJLEtBQUssRUFBRTtnQkFDUCxJQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMvQyxLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksa0NBQWUsQ0FBUyxVQUFVLENBQUMsQ0FBQzthQUM3RDtRQUNMLENBQUMsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQUVELHNDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFTSxtQ0FBUSxHQUFmLGNBQW9CLENBQUM7SUFFckIsc0JBQUksdUNBQVM7YUFBYjtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUdNLG9DQUFTLEdBQWhCLFVBQWlCLElBQUk7UUFDakIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM3QyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQXBDUSxnQkFBZ0I7UUFQNUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3ZDLENBQUM7UUFDRCxpQkFBVSxFQUFFO3lDQU1rQixXQUFJLEVBQWtCLHVCQUFjLEVBQTJCLGdDQUFjO09BTC9GLGdCQUFnQixDQXFDNUI7SUFBRCx1QkFBQztDQUFBLEFBckNELElBcUNDO0FBckNZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIEluamVjdGFibGUsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCAqIGFzIGZyYW1lTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuaW1wb3J0IHsgT3B0aW9uc1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vbmF2aWdhdGlvbi9vcHRpb25zL29wdGlvbnMuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiBcInRrLW9wdGlvbnNcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJvcHRpb25zLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCJvcHRpb25zLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT3B0aW9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIF9kYXRhSXRlbXM6IE9ic2VydmFibGVBcnJheTxzdHJpbmc+O1xuICAgIHByaXZhdGUgX3N1YjogYW55O1xuICAgIHByaXZhdGUgX3NlbGVjdGVkSW5kZXg6IG51bWJlciA9IC0xO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcGFnZTogUGFnZSwgcHJpdmF0ZSBfcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIF9vcHRpb25zU2VydmljZTogT3B0aW9uc1NlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5fZGF0YUl0ZW1zID0gbmV3IE9ic2VydmFibGVBcnJheTxzdHJpbmc+KCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuX3N1YiA9IHRoaXMuX3JvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShcbiAgICAgICAgICAgIChwYXJhbXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gcGFyYW1zWydpdGVtcyddO1xuICAgICAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkSW5kZXggPSArcGFyYW1zWydzZWxlY3RlZEluZGV4J107XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1zKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwbGl0SXRlbXMgPSBpdGVtcy50b1N0cmluZygpLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RhdGFJdGVtcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8c3RyaW5nPihzcGxpdEl0ZW1zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuX3N1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkxvYWRlZCgpIHsgfVxuXG4gICAgZ2V0IGRhdGFJdGVtcygpOiBPYnNlcnZhYmxlQXJyYXk8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhSXRlbXM7XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgb25JdGVtVGFwKGFyZ3MpIHtcbiAgICAgICAgdGhpcy5fb3B0aW9uc1NlcnZpY2UucGFyYW1WYWx1ZSA9IGFyZ3MuaW5kZXg7XG4gICAgICAgIGZyYW1lTW9kdWxlLnRvcG1vc3QoKS5nb0JhY2soKTtcbiAgICB9XG59Il19