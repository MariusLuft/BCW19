"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var utils_1 = require("tns-core-modules/utils/utils");
var action_bar_1 = require("tns-core-modules/ui/action-bar");
var page_1 = require("tns-core-modules/ui/page");
var router_2 = require("nativescript-angular/router");
var application_1 = require("tns-core-modules/application");
var TKToggleNavButtonDirective = (function () {
    function TKToggleNavButtonDirective(route, page, routerExtensions) {
        this.routerExtensions = routerExtensions;
        var navigationButton = this.createNavigationButton();
        page.actionBar.navigationButton = navigationButton;
    }
    TKToggleNavButtonDirective.prototype.createNavigationButton = function () {
        var _this = this;
        var navigationButton = new action_bar_1.NavigationButton();
        navigationButton.visibility = "visible";
        if (application_1.android) {
            navigationButton.android.systemIcon = "ic_menu_back";
            navigationButton.on("tap", function (args) {
                utils_1.ad.dismissSoftInput();
                _this.routerExtensions.backToPreviousPage();
            });
        }
        else {
            navigationButton.text = "Back";
        }
        return navigationButton;
    };
    TKToggleNavButtonDirective = __decorate([
        core_1.Directive({
            selector: "[tkToggleNavButton]"
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, page_1.Page, router_2.RouterExtensions])
    ], TKToggleNavButtonDirective);
    return TKToggleNavButtonDirective;
}());
exports.TKToggleNavButtonDirective = TKToggleNavButtonDirective;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLW5hdi1idXR0b24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidG9nZ2xlLW5hdi1idXR0b24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMENBQWlEO0FBQ2pELHNDQUEwQztBQUUxQyxzREFBa0Q7QUFDbEQsNkRBQWtFO0FBQ2xFLGlEQUFnRDtBQUNoRCxzREFBK0Q7QUFDL0QsNERBQXVEO0FBTXZEO0lBQ0ksb0NBQVksS0FBcUIsRUFBRSxJQUFVLEVBQVUsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDckYsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUNyRCxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO0lBQ3ZELENBQUM7SUFFRCwyREFBc0IsR0FBdEI7UUFBQSxpQkFlQztRQWRHLElBQUksZ0JBQWdCLEdBQUcsSUFBSSw2QkFBZ0IsRUFBRSxDQUFDO1FBQzlDLGdCQUFnQixDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFFeEMsSUFBSSxxQkFBTyxFQUFFO1lBQ1QsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxjQUFjLENBQUM7WUFDckQsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxVQUFDLElBQWU7Z0JBQ3ZDLFVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUN0QixLQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUMvQyxDQUFDLENBQUMsQ0FBQztTQUNOO2FBQU07WUFDSCxnQkFBZ0IsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1NBQ2xDO1FBRUQsT0FBTyxnQkFBZ0IsQ0FBQztJQUM1QixDQUFDO0lBckJRLDBCQUEwQjtRQUp0QyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHFCQUFxQjtTQUNsQyxDQUFDO3lDQUdxQix1QkFBYyxFQUFRLFdBQUksRUFBNEIseUJBQWdCO09BRGhGLDBCQUEwQixDQXNCdEM7SUFBRCxpQ0FBQztDQUFBLEFBdEJELElBc0JDO0FBdEJZLGdFQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgYWQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91dGlscy91dGlsc1wiO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkJ1dHRvbiB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2FjdGlvbi1iYXJcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IGFuZHJvaWQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbdGtUb2dnbGVOYXZCdXR0b25dXCJcbn0pXG5cbmV4cG9ydCBjbGFzcyBUS1RvZ2dsZU5hdkJ1dHRvbkRpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3Iocm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcbiAgICAgICAgbGV0IG5hdmlnYXRpb25CdXR0b24gPSB0aGlzLmNyZWF0ZU5hdmlnYXRpb25CdXR0b24oKTtcbiAgICAgICAgcGFnZS5hY3Rpb25CYXIubmF2aWdhdGlvbkJ1dHRvbiA9IG5hdmlnYXRpb25CdXR0b247XG4gICAgfVxuXG4gICAgY3JlYXRlTmF2aWdhdGlvbkJ1dHRvbigpOiBOYXZpZ2F0aW9uQnV0dG9uIHtcbiAgICAgICAgbGV0IG5hdmlnYXRpb25CdXR0b24gPSBuZXcgTmF2aWdhdGlvbkJ1dHRvbigpO1xuICAgICAgICBuYXZpZ2F0aW9uQnV0dG9uLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcblxuICAgICAgICBpZiAoYW5kcm9pZCkge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJ1dHRvbi5hbmRyb2lkLnN5c3RlbUljb24gPSBcImljX21lbnVfYmFja1wiO1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJ1dHRvbi5vbihcInRhcFwiLCAoYXJnczogRXZlbnREYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgYWQuZGlzbWlzc1NvZnRJbnB1dCgpO1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrVG9QcmV2aW91c1BhZ2UoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJ1dHRvbi50ZXh0ID0gXCJCYWNrXCI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmF2aWdhdGlvbkJ1dHRvbjtcbiAgICB9XG59XG4iXX0=