"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var GaugesAnimationsComponent = (function () {
    function GaugesAnimationsComponent() {
        this.values = [60, 80, 120, 160];
    }
    GaugesAnimationsComponent.prototype.ngAfterViewInit = function () {
        this._needle = this.needleElement.nativeElement;
    };
    GaugesAnimationsComponent.prototype.onValueChange = function (value) {
        this._needle.value = value;
    };
    __decorate([
        core_1.ViewChild("needle"),
        __metadata("design:type", core_1.ElementRef)
    ], GaugesAnimationsComponent.prototype, "needleElement", void 0);
    GaugesAnimationsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "tk-gauges-animations",
            templateUrl: "gauges-animations.component.html",
            styleUrls: ["gauges-animations.component.css"]
        }),
        __metadata("design:paramtypes", [])
    ], GaugesAnimationsComponent);
    return GaugesAnimationsComponent;
}());
exports.GaugesAnimationsComponent = GaugesAnimationsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F1Z2VzLWFuaW1hdGlvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2F1Z2VzLWFuaW1hdGlvbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esc0NBQWdGO0FBU2hGO0lBSUk7UUFGTyxXQUFNLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUVuQixDQUFDO0lBRWpCLG1EQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBNkIsQ0FBQztJQUNwRSxDQUFDO0lBSU0saURBQWEsR0FBcEIsVUFBcUIsS0FBYTtRQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUpvQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBZ0IsaUJBQVU7b0VBQUM7SUFWdEMseUJBQXlCO1FBTnJDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxXQUFXLEVBQUUsa0NBQWtDO1lBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO1NBQ2pELENBQUM7O09BQ1cseUJBQXlCLENBZXJDO0lBQUQsZ0NBQUM7Q0FBQSxBQWZELElBZUM7QUFmWSw4REFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA+PiBnYXVnZXMtYW5pbWF0aW9ucy1hbmd1bGFyXG5pbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSYWRpYWxOZWVkbGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWdhdWdlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6IFwidGstZ2F1Z2VzLWFuaW1hdGlvbnNcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJnYXVnZXMtYW5pbWF0aW9ucy5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiZ2F1Z2VzLWFuaW1hdGlvbnMuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBHYXVnZXNBbmltYXRpb25zQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgcHJpdmF0ZSBfbmVlZGxlOiBSYWRpYWxOZWVkbGU7XG4gICAgcHVibGljIHZhbHVlcyA9IFs2MCwgODAsIDEyMCwgMTYwXTtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuX25lZWRsZSA9IHRoaXMubmVlZGxlRWxlbWVudC5uYXRpdmVFbGVtZW50IGFzIFJhZGlhbE5lZWRsZTtcbiAgICB9XG5cbiAgICBAVmlld0NoaWxkKFwibmVlZGxlXCIpIG5lZWRsZUVsZW1lbnQ6IEVsZW1lbnRSZWY7XG5cbiAgICBwdWJsaWMgb25WYWx1ZUNoYW5nZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX25lZWRsZS52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbn1cbi8vIDw8IGdhdWdlcy1hbmltYXRpb25zLWFuZ3VsYXIiXX0=