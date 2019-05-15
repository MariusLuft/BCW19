"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var router_1 = require("@angular/router");
var AppComponent = (function () {
    function AppComponent(_routEx, _router) {
        this._routEx = _routEx;
        this._router = _router;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "tk-app",
            template: "<page-router-outlet></page-router-outlet>"
        }),
        __metadata("design:paramtypes", [nativescript_angular_1.RouterExtensions, router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsNkRBQXdEO0FBQ3hELDBDQUF5RDtBQU16RDtJQUNFLHNCQUFvQixPQUF3QixFQUFVLE9BQWU7UUFBakQsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFRO0lBRXJFLENBQUM7SUFFRCwrQkFBUSxHQUFSO0lBQ0EsQ0FBQztJQU5VLFlBQVk7UUFKeEIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSwyQ0FBMkM7U0FDdEQsQ0FBQzt5Q0FFNEIsdUNBQWdCLEVBQW1CLGVBQU07T0FEMUQsWUFBWSxDQU94QjtJQUFELG1CQUFDO0NBQUEsQUFQRCxJQU9DO0FBUFksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInRrLWFwcFwiLFxuICB0ZW1wbGF0ZTogXCI8cGFnZS1yb3V0ZXItb3V0bGV0PjwvcGFnZS1yb3V0ZXItb3V0bGV0PlwiXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dEV4OlJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKXtcblxuICB9XG5cbiAgbmdPbkluaXQoKXtcbiAgfVxufVxuIl19