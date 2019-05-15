"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nativescript_dev_appium_1 = require("nativescript-dev-appium");
function navigateBackToHome(driver, view) {
    return __awaiter(this, void 0, void 0, function () {
        var location, homeTitle;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    location = view !== undefined ? view : "Gauge Angular";
                    return [4, driver.findElementByTextIfExists(location, nativescript_dev_appium_1.SearchOptions.exact)];
                case 1:
                    homeTitle = _a.sent();
                    _a.label = 2;
                case 2:
                    if (!(homeTitle === undefined)) return [3, 6];
                    return [4, driver.navBack()];
                case 3:
                    _a.sent();
                    return [4, driver.wait(1000)];
                case 4:
                    _a.sent();
                    return [4, driver.findElementByTextIfExists(location, nativescript_dev_appium_1.SearchOptions.exact)];
                case 5:
                    homeTitle = _a.sent();
                    return [3, 2];
                case 6: return [2];
            }
        });
    });
}
exports.navigateBackToHome = navigateBackToHome;
function navigateBackToView(driver, view) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, navigateBackToHome(driver, view)];
                case 1:
                    _a.sent();
                    return [2];
            }
        });
    });
}
exports.navigateBackToView = navigateBackToView;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUVBQWlGO0FBR2pGLFNBQXNCLGtCQUFrQixDQUFDLE1BQW9CLEVBQUUsSUFBYTs7Ozs7O29CQUNwRSxRQUFRLEdBQUcsSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUM7b0JBQzNDLFdBQU0sTUFBTSxDQUFDLHlCQUF5QixDQUFDLFFBQVEsRUFBRSx1Q0FBYSxDQUFDLEtBQUssQ0FBQyxFQUFBOztvQkFBakYsU0FBUyxHQUFHLFNBQXFFOzs7eUJBQzlFLENBQUEsU0FBUyxLQUFLLFNBQVMsQ0FBQTtvQkFDMUIsV0FBTSxNQUFNLENBQUMsT0FBTyxFQUFFLEVBQUE7O29CQUF0QixTQUFzQixDQUFDO29CQUN2QixXQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUE7O29CQUF2QixTQUF1QixDQUFDO29CQUNaLFdBQU0sTUFBTSxDQUFDLHlCQUF5QixDQUFDLFFBQVEsRUFBRSx1Q0FBYSxDQUFDLEtBQUssQ0FBQyxFQUFBOztvQkFBakYsU0FBUyxHQUFHLFNBQXFFLENBQUM7Ozs7OztDQUV6RjtBQVJELGdEQVFDO0FBRUQsU0FBc0Isa0JBQWtCLENBQUMsTUFBb0IsRUFBRSxJQUFZOzs7O3dCQUN2RSxXQUFNLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBQTs7b0JBQXRDLFNBQXNDLENBQUM7Ozs7O0NBQzFDO0FBRkQsZ0RBRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBpdW1Ecml2ZXIsIFNlYXJjaE9wdGlvbnMsIFVJRWxlbWVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZGV2LWFwcGl1bVwiO1xuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBuYXZpZ2F0ZUJhY2tUb0hvbWUoZHJpdmVyOiBBcHBpdW1Ecml2ZXIsIHZpZXc/OiBzdHJpbmcpIHtcbiAgICBsZXQgbG9jYXRpb24gPSB2aWV3ICE9PSB1bmRlZmluZWQgPyB2aWV3IDogXCJHYXVnZSBBbmd1bGFyXCI7XG4gICAgbGV0IGhvbWVUaXRsZSA9IGF3YWl0IGRyaXZlci5maW5kRWxlbWVudEJ5VGV4dElmRXhpc3RzKGxvY2F0aW9uLCBTZWFyY2hPcHRpb25zLmV4YWN0KTtcbiAgICB3aGlsZSAoaG9tZVRpdGxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgYXdhaXQgZHJpdmVyLm5hdkJhY2soKTtcbiAgICAgICAgYXdhaXQgZHJpdmVyLndhaXQoMTAwMCk7XG4gICAgICAgIGhvbWVUaXRsZSA9IGF3YWl0IGRyaXZlci5maW5kRWxlbWVudEJ5VGV4dElmRXhpc3RzKGxvY2F0aW9uLCBTZWFyY2hPcHRpb25zLmV4YWN0KTtcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBuYXZpZ2F0ZUJhY2tUb1ZpZXcoZHJpdmVyOiBBcHBpdW1Ecml2ZXIsIHZpZXc6IHN0cmluZykge1xuICAgIGF3YWl0IG5hdmlnYXRlQmFja1RvSG9tZShkcml2ZXIsIHZpZXcpO1xufSJdfQ==