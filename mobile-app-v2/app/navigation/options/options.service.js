"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var OptionsService = (function () {
    function OptionsService() {
    }
    Object.defineProperty(OptionsService.prototype, "paramName", {
        get: function () {
            return this._paramName;
        },
        set: function (value) {
            this._paramName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OptionsService.prototype, "paramValue", {
        get: function () {
            return this._paramValue;
        },
        set: function (value) {
            this._paramValue = value;
        },
        enumerable: true,
        configurable: true
    });
    OptionsService = __decorate([
        core_1.Injectable()
    ], OptionsService);
    return OptionsService;
}());
exports.OptionsService = OptionsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9ucy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib3B0aW9ucy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRzNDO0lBQUE7SUFtQkEsQ0FBQztJQWZHLHNCQUFJLHFDQUFTO2FBQWI7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQzthQUVELFVBQWMsS0FBYTtZQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUM1QixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLHNDQUFVO2FBSWQ7WUFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUIsQ0FBQzthQU5ELFVBQWUsS0FBVTtZQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQWRRLGNBQWM7UUFEMUIsaUJBQVUsRUFBRTtPQUNBLGNBQWMsQ0FtQjFCO0lBQUQscUJBQUM7Q0FBQSxBQW5CRCxJQW1CQztBQW5CWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9wdGlvbnNTZXJ2aWNlIHtcbiAgICBwcml2YXRlIF9wYXJhbU5hbWU6IHN0cmluZztcbiAgICBwcml2YXRlIF9wYXJhbVZhbHVlOiBhbnk7XG5cbiAgICBnZXQgcGFyYW1OYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXJhbU5hbWU7XG4gICAgfVxuXG4gICAgc2V0IHBhcmFtTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3BhcmFtTmFtZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHNldCBwYXJhbVZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5fcGFyYW1WYWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBwYXJhbVZhbHVlKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXJhbVZhbHVlO1xuICAgIH1cbn0iXX0=