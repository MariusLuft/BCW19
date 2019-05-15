"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var nativescript_dev_appium_1 = require("nativescript-dev-appium");
var parser_1 = require("nativescript-dev-appium/lib/parser");
var chai_1 = require("chai");
var helper_1 = require("./helper");
var fs = require('fs');
var addContext = require('mochawesome/addContext');
var rimraf = require('rimraf');
var isSauceRun = parser_1.isSauceLab;
var isAndroid = parser_1.runType.includes("android");
describe("Gauge", function () {
    var gettingStartedText = "Getting started";
    var scalesText = "Scales";
    var customizationText = "Customization";
    var styleBindingsText = "Style bindings";
    var animationsText = "Animations";
    var driver;
    before(function () { return __awaiter(_this, void 0, void 0, function () {
        var dir;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, nativescript_dev_appium_1.createDriver()];
                case 1:
                    driver = _a.sent();
                    driver.defaultWaitTime = 15000;
                    dir = "mochawesome-report";
                    if (!fs.existsSync(dir)) {
                        fs.mkdirSync(dir);
                    }
                    rimraf('mochawesome-report/*', function () { });
                    return [2];
            }
        });
    }); });
    after(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (isSauceRun) {
                        driver.sessionId().then(function (sessionId) {
                            console.log("Report: https://saucelabs.com/beta/tests/" + sessionId);
                        });
                    }
                    return [4, driver.quit()];
                case 1:
                    _a.sent();
                    console.log("Driver quits!");
                    return [2];
            }
        });
    }); });
    afterEach(function () {
        return __awaiter(this, void 0, void 0, function () {
            var png;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.currentTest.state && this.currentTest.state === "failed")) return [3, 2];
                        return [4, driver.logScreenshot(this.currentTest.title)];
                    case 1:
                        png = _a.sent();
                        fs.copyFile(png, './mochawesome-report/' + this.currentTest.title + '.png', function (err) {
                            if (err) {
                                throw err;
                            }
                            console.log('Screenshot saved.');
                        });
                        addContext(this, './' + this.currentTest.title + '.png');
                        _a.label = 2;
                    case 2: return [2];
                }
            });
        });
    });
    it("should open Getting started", function () { return __awaiter(_this, void 0, void 0, function () {
        var gettingStartedButton, gettingStartedTitle, isTrue;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, driver.findElementByText(gettingStartedText)];
                case 1:
                    gettingStartedButton = _a.sent();
                    return [4, gettingStartedButton.click()];
                case 2:
                    _a.sent();
                    return [4, driver.findElementByText("Getting Started")];
                case 3:
                    gettingStartedTitle = _a.sent();
                    chai_1.expect(gettingStartedTitle).to.exist;
                    return [4, driver.compareScreen("getting-started")];
                case 4:
                    isTrue = _a.sent();
                    chai_1.expect(isTrue).to.be.true;
                    return [2];
            }
        });
    }); });
    it("should open Scales", function () { return __awaiter(_this, void 0, void 0, function () {
        var scalesButton, scalesTitle, isTrue;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, helper_1.navigateBackToHome(driver)];
                case 1:
                    _a.sent();
                    return [4, driver.findElementByText(scalesText)];
                case 2:
                    scalesButton = _a.sent();
                    return [4, scalesButton.click()];
                case 3:
                    _a.sent();
                    return [4, driver.findElementByText(scalesText)];
                case 4:
                    scalesTitle = _a.sent();
                    chai_1.expect(scalesTitle).to.exist;
                    return [4, driver.compareScreen("scales")];
                case 5:
                    isTrue = _a.sent();
                    chai_1.expect(isTrue).to.be.true;
                    return [2];
            }
        });
    }); });
    it("should open Customization", function () { return __awaiter(_this, void 0, void 0, function () {
        var customizationButton, customizationTitle, isTrue;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, helper_1.navigateBackToHome(driver)];
                case 1:
                    _a.sent();
                    return [4, driver.findElementByText(customizationText)];
                case 2:
                    customizationButton = _a.sent();
                    return [4, customizationButton.click()];
                case 3:
                    _a.sent();
                    return [4, driver.findElementByText(customizationText)];
                case 4:
                    customizationTitle = _a.sent();
                    chai_1.expect(customizationTitle).to.exist;
                    return [4, driver.wait(5000)];
                case 5:
                    _a.sent();
                    return [4, driver.compareScreen("customization")];
                case 6:
                    isTrue = _a.sent();
                    chai_1.expect(isTrue).to.be.true;
                    return [2];
            }
        });
    }); });
    it("should open Style bindings", function () { return __awaiter(_this, void 0, void 0, function () {
        var styleBindingsButton, styleBindingsTitle, isTrue;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, helper_1.navigateBackToHome(driver)];
                case 1:
                    _a.sent();
                    return [4, driver.findElementByText(styleBindingsText)];
                case 2:
                    styleBindingsButton = _a.sent();
                    return [4, styleBindingsButton.click()];
                case 3:
                    _a.sent();
                    return [4, driver.findElementByText(styleBindingsText)];
                case 4:
                    styleBindingsTitle = _a.sent();
                    chai_1.expect(styleBindingsTitle).to.exist;
                    return [4, driver.wait(5000)];
                case 5:
                    _a.sent();
                    return [4, driver.compareScreen("style-bindings")];
                case 6:
                    isTrue = _a.sent();
                    chai_1.expect(isTrue).to.be.true;
                    return [2];
            }
        });
    }); });
    it("should open Animations", function () { return __awaiter(_this, void 0, void 0, function () {
        var animationsButton, animationsTitle, isTrue;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, helper_1.navigateBackToHome(driver)];
                case 1:
                    _a.sent();
                    return [4, driver.findElementByText(animationsText)];
                case 2:
                    animationsButton = _a.sent();
                    return [4, animationsButton.click()];
                case 3:
                    _a.sent();
                    return [4, driver.findElementByText(animationsText)];
                case 4:
                    animationsTitle = _a.sent();
                    chai_1.expect(animationsTitle).to.exist;
                    return [4, driver.compareScreen("animations")];
                case 5:
                    isTrue = _a.sent();
                    chai_1.expect(isTrue).to.be.true;
                    return [2];
            }
        });
    }); });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHMuZTJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGVzdHMuZTJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxpQkF3R0c7O0FBeEdILG1FQUF3RztBQUN4Ryw2REFBeUU7QUFDekUsNkJBQThCO0FBQzlCLG1DQUFrRTtBQUNsRSxJQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDekIsSUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLHdCQUF3QixDQUFDLENBQUM7QUFDckQsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRWpDLElBQU0sVUFBVSxHQUFHLG1CQUFVLENBQUM7QUFDOUIsSUFBTSxTQUFTLEdBQVksZ0JBQU8sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFdkQsUUFBUSxDQUFDLE9BQU8sRUFBRTtJQUNkLElBQU0sa0JBQWtCLEdBQUcsaUJBQWlCLENBQUM7SUFDN0MsSUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDO0lBQzVCLElBQU0saUJBQWlCLEdBQUcsZUFBZSxDQUFDO0lBQzFDLElBQU0saUJBQWlCLEdBQUcsZ0JBQWdCLENBQUM7SUFDM0MsSUFBTSxjQUFjLEdBQUcsWUFBWSxDQUFDO0lBQ3BDLElBQUksTUFBb0IsQ0FBQztJQUV6QixNQUFNLENBQUM7Ozs7d0JBQ00sV0FBTSxzQ0FBWSxFQUFFLEVBQUE7O29CQUE3QixNQUFNLEdBQUcsU0FBb0IsQ0FBQztvQkFDOUIsTUFBTSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7b0JBRTNCLEdBQUcsR0FBRyxvQkFBb0IsQ0FBQztvQkFDL0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7d0JBQ3JCLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ3JCO29CQUNELE1BQU0sQ0FBQyxzQkFBc0IsRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDOzs7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LENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFBOztvQkFBdkIsU0FBdUIsQ0FBQztvQkFDVCxXQUFNLE1BQU0sQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsRUFBQTs7b0JBQXJELE1BQU0sR0FBRyxTQUE0QztvQkFDM0QsYUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzs7O1NBQzdCLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx3QkFBd0IsRUFBRTs7Ozt3QkFDekIsV0FBTSwyQkFBa0IsQ0FBQyxNQUFNLENBQUMsRUFBQTs7b0JBQWhDLFNBQWdDLENBQUM7b0JBQ1IsV0FBTSxNQUFNLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLEVBQUE7O29CQUFqRSxnQkFBZ0IsR0FBRyxTQUE4QztvQkFDdkUsV0FBTSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsRUFBQTs7b0JBQTlCLFNBQThCLENBQUM7b0JBQ1AsV0FBTSxNQUFNLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLEVBQUE7O29CQUFoRSxlQUFlLEdBQUcsU0FBOEM7b0JBQ3RFLGFBQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO29CQUNsQixXQUFNLE1BQU0sQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEVBQUE7O29CQUFqRCxNQUFNLEdBQUcsU0FBd0M7b0JBQ3ZELGFBQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs7OztTQUM3QixDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcGl1bURyaXZlciwgY3JlYXRlRHJpdmVyLCBTZWFyY2hPcHRpb25zLCBMb2NhdG9yLCBEaXJlY3Rpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LWRldi1hcHBpdW1cIjtcbmltcG9ydCB7IGlzU2F1Y2VMYWIsIHJ1blR5cGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWRldi1hcHBpdW0vbGliL3BhcnNlclwiO1xuaW1wb3J0IHsgZXhwZWN0IH0gZnJvbSBcImNoYWlcIjtcbmltcG9ydCB7IG5hdmlnYXRlQmFja1RvVmlldywgbmF2aWdhdGVCYWNrVG9Ib21lIH0gZnJvbSBcIi4vaGVscGVyXCI7XG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG5jb25zdCBhZGRDb250ZXh0ID0gcmVxdWlyZSgnbW9jaGF3ZXNvbWUvYWRkQ29udGV4dCcpO1xuY29uc3QgcmltcmFmID0gcmVxdWlyZSgncmltcmFmJyk7XG5cbmNvbnN0IGlzU2F1Y2VSdW4gPSBpc1NhdWNlTGFiO1xuY29uc3QgaXNBbmRyb2lkOiBib29sZWFuID0gcnVuVHlwZS5pbmNsdWRlcyhcImFuZHJvaWRcIik7XG5cbmRlc2NyaWJlKFwiR2F1Z2VcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGdldHRpbmdTdGFydGVkVGV4dCA9IFwiR2V0dGluZyBzdGFydGVkXCI7XG4gICAgY29uc3Qgc2NhbGVzVGV4dCA9IFwiU2NhbGVzXCI7XG4gICAgY29uc3QgY3VzdG9taXphdGlvblRleHQgPSBcIkN1c3RvbWl6YXRpb25cIjtcbiAgICBjb25zdCBzdHlsZUJpbmRpbmdzVGV4dCA9IFwiU3R5bGUgYmluZGluZ3NcIjtcbiAgICBjb25zdCBhbmltYXRpb25zVGV4dCA9IFwiQW5pbWF0aW9uc1wiO1xuICAgIGxldCBkcml2ZXI6IEFwcGl1bURyaXZlcjtcblxuICAgIGJlZm9yZShhc3luYyAoKSA9PiB7XG4gICAgICAgIGRyaXZlciA9IGF3YWl0IGNyZWF0ZURyaXZlcigpO1xuICAgICAgICBkcml2ZXIuZGVmYXVsdFdhaXRUaW1lID0gMTUwMDA7XG5cbiAgICAgICAgbGV0IGRpciA9IFwibW9jaGF3ZXNvbWUtcmVwb3J0XCI7XG4gICAgICAgIGlmICghZnMuZXhpc3RzU3luYyhkaXIpKSB7XG4gICAgICAgICAgICBmcy5ta2RpclN5bmMoZGlyKTtcbiAgICAgICAgfVxuICAgICAgICByaW1yYWYoJ21vY2hhd2Vzb21lLXJlcG9ydC8qJywgZnVuY3Rpb24gKCkgeyB9KTtcbiAgICB9KTtcblxuICAgIGFmdGVyKGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYgKGlzU2F1Y2VSdW4pIHtcbiAgICAgICAgICAgIGRyaXZlci5zZXNzaW9uSWQoKS50aGVuKGZ1bmN0aW9uIChzZXNzaW9uSWQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlcG9ydDogaHR0cHM6Ly9zYXVjZWxhYnMuY29tL2JldGEvdGVzdHMvXCIgKyBzZXNzaW9uSWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgZHJpdmVyLnF1aXQoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJEcml2ZXIgcXVpdHMhXCIpO1xuICAgIH0pO1xuXG4gICAgYWZ0ZXJFYWNoKGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFRlc3Quc3RhdGUgJiYgdGhpcy5jdXJyZW50VGVzdC5zdGF0ZSA9PT0gXCJmYWlsZWRcIikge1xuICAgICAgICAgICAgbGV0IHBuZyA9IGF3YWl0IGRyaXZlci5sb2dTY3JlZW5zaG90KHRoaXMuY3VycmVudFRlc3QudGl0bGUpO1xuICAgICAgICAgICAgZnMuY29weUZpbGUocG5nLCAnLi9tb2NoYXdlc29tZS1yZXBvcnQvJyArIHRoaXMuY3VycmVudFRlc3QudGl0bGUgKyAnLnBuZycsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NjcmVlbnNob3Qgc2F2ZWQuJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGFkZENvbnRleHQodGhpcywgJy4vJyArIHRoaXMuY3VycmVudFRlc3QudGl0bGUgKyAnLnBuZycpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBpdChcInNob3VsZCBvcGVuIEdldHRpbmcgc3RhcnRlZFwiLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGdldHRpbmdTdGFydGVkQnV0dG9uID0gYXdhaXQgZHJpdmVyLmZpbmRFbGVtZW50QnlUZXh0KGdldHRpbmdTdGFydGVkVGV4dCk7XG4gICAgICAgIGF3YWl0IGdldHRpbmdTdGFydGVkQnV0dG9uLmNsaWNrKCk7XG4gICAgICAgIGNvbnN0IGdldHRpbmdTdGFydGVkVGl0bGUgPSBhd2FpdCBkcml2ZXIuZmluZEVsZW1lbnRCeVRleHQoXCJHZXR0aW5nIFN0YXJ0ZWRcIik7XG4gICAgICAgIGV4cGVjdChnZXR0aW5nU3RhcnRlZFRpdGxlKS50by5leGlzdDtcbiAgICAgICAgY29uc3QgaXNUcnVlID0gYXdhaXQgZHJpdmVyLmNvbXBhcmVTY3JlZW4oXCJnZXR0aW5nLXN0YXJ0ZWRcIik7XG4gICAgICAgIGV4cGVjdChpc1RydWUpLnRvLmJlLnRydWU7XG4gICAgfSk7XG5cbiAgICBpdChcInNob3VsZCBvcGVuIFNjYWxlc1wiLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIGF3YWl0IG5hdmlnYXRlQmFja1RvSG9tZShkcml2ZXIpO1xuICAgICAgICBjb25zdCBzY2FsZXNCdXR0b24gPSBhd2FpdCBkcml2ZXIuZmluZEVsZW1lbnRCeVRleHQoc2NhbGVzVGV4dCk7XG4gICAgICAgIGF3YWl0IHNjYWxlc0J1dHRvbi5jbGljaygpO1xuICAgICAgICBjb25zdCBzY2FsZXNUaXRsZSA9IGF3YWl0IGRyaXZlci5maW5kRWxlbWVudEJ5VGV4dChzY2FsZXNUZXh0KTtcbiAgICAgICAgZXhwZWN0KHNjYWxlc1RpdGxlKS50by5leGlzdDtcbiAgICAgICAgY29uc3QgaXNUcnVlID0gYXdhaXQgZHJpdmVyLmNvbXBhcmVTY3JlZW4oXCJzY2FsZXNcIik7XG4gICAgICAgIGV4cGVjdChpc1RydWUpLnRvLmJlLnRydWU7XG4gICAgfSk7XG5cbiAgICBpdChcInNob3VsZCBvcGVuIEN1c3RvbWl6YXRpb25cIiwgYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCBuYXZpZ2F0ZUJhY2tUb0hvbWUoZHJpdmVyKTtcbiAgICAgICAgY29uc3QgY3VzdG9taXphdGlvbkJ1dHRvbiA9IGF3YWl0IGRyaXZlci5maW5kRWxlbWVudEJ5VGV4dChjdXN0b21pemF0aW9uVGV4dCk7XG4gICAgICAgIGF3YWl0IGN1c3RvbWl6YXRpb25CdXR0b24uY2xpY2soKTtcbiAgICAgICAgY29uc3QgY3VzdG9taXphdGlvblRpdGxlID0gYXdhaXQgZHJpdmVyLmZpbmRFbGVtZW50QnlUZXh0KGN1c3RvbWl6YXRpb25UZXh0KTtcbiAgICAgICAgZXhwZWN0KGN1c3RvbWl6YXRpb25UaXRsZSkudG8uZXhpc3Q7XG4gICAgICAgIGF3YWl0IGRyaXZlci53YWl0KDUwMDApO1xuICAgICAgICBjb25zdCBpc1RydWUgPSBhd2FpdCBkcml2ZXIuY29tcGFyZVNjcmVlbihcImN1c3RvbWl6YXRpb25cIik7XG4gICAgICAgIGV4cGVjdChpc1RydWUpLnRvLmJlLnRydWU7XG4gICAgfSk7XG5cbiAgICBpdChcInNob3VsZCBvcGVuIFN0eWxlIGJpbmRpbmdzXCIsIGFzeW5jICgpID0+IHtcbiAgICAgICAgYXdhaXQgbmF2aWdhdGVCYWNrVG9Ib21lKGRyaXZlcik7XG4gICAgICAgIGNvbnN0IHN0eWxlQmluZGluZ3NCdXR0b24gPSBhd2FpdCBkcml2ZXIuZmluZEVsZW1lbnRCeVRleHQoc3R5bGVCaW5kaW5nc1RleHQpO1xuICAgICAgICBhd2FpdCBzdHlsZUJpbmRpbmdzQnV0dG9uLmNsaWNrKCk7XG4gICAgICAgIGNvbnN0IHN0eWxlQmluZGluZ3NUaXRsZSA9IGF3YWl0IGRyaXZlci5maW5kRWxlbWVudEJ5VGV4dChzdHlsZUJpbmRpbmdzVGV4dCk7XG4gICAgICAgIGV4cGVjdChzdHlsZUJpbmRpbmdzVGl0bGUpLnRvLmV4aXN0O1xuICAgICAgICBhd2FpdCBkcml2ZXIud2FpdCg1MDAwKTtcbiAgICAgICAgY29uc3QgaXNUcnVlID0gYXdhaXQgZHJpdmVyLmNvbXBhcmVTY3JlZW4oXCJzdHlsZS1iaW5kaW5nc1wiKTtcbiAgICAgICAgZXhwZWN0KGlzVHJ1ZSkudG8uYmUudHJ1ZTtcbiAgICB9KTtcblxuICAgIGl0KFwic2hvdWxkIG9wZW4gQW5pbWF0aW9uc1wiLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIGF3YWl0IG5hdmlnYXRlQmFja1RvSG9tZShkcml2ZXIpO1xuICAgICAgICBjb25zdCBhbmltYXRpb25zQnV0dG9uID0gYXdhaXQgZHJpdmVyLmZpbmRFbGVtZW50QnlUZXh0KGFuaW1hdGlvbnNUZXh0KTtcbiAgICAgICAgYXdhaXQgYW5pbWF0aW9uc0J1dHRvbi5jbGljaygpO1xuICAgICAgICBjb25zdCBhbmltYXRpb25zVGl0bGUgPSBhd2FpdCBkcml2ZXIuZmluZEVsZW1lbnRCeVRleHQoYW5pbWF0aW9uc1RleHQpO1xuICAgICAgICBleHBlY3QoYW5pbWF0aW9uc1RpdGxlKS50by5leGlzdDtcbiAgICAgICAgY29uc3QgaXNUcnVlID0gYXdhaXQgZHJpdmVyLmNvbXBhcmVTY3JlZW4oXCJhbmltYXRpb25zXCIpO1xuICAgICAgICBleHBlY3QoaXNUcnVlKS50by5iZS50cnVlO1xuICAgIH0pO1xuXG59KTsiXX0=