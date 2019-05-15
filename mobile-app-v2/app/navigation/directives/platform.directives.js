"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_1 = require("tns-core-modules/platform");
var platform_providers_1 = require("nativescript-angular/platform-providers");
var TKIfAndroidDirective = (function () {
    function TKIfAndroidDirective(device, container, templateRef) {
        if (device.os === platform_1.platformNames.android) {
            container.createEmbeddedView(templateRef);
        }
    }
    TKIfAndroidDirective = __decorate([
        core_1.Directive({ selector: "[tkIfAndroid]" }),
        __param(0, core_1.Inject(platform_providers_1.DEVICE)),
        __metadata("design:paramtypes", [Object, core_1.ViewContainerRef, core_1.TemplateRef])
    ], TKIfAndroidDirective);
    return TKIfAndroidDirective;
}());
exports.TKIfAndroidDirective = TKIfAndroidDirective;
var TKIfIOSDirective = (function () {
    function TKIfIOSDirective(device, container, templateRef) {
        if (device.os === platform_1.platformNames.ios) {
            container.createEmbeddedView(templateRef);
        }
    }
    TKIfIOSDirective = __decorate([
        core_1.Directive({ selector: "[tkIfIOS]" }),
        __param(0, core_1.Inject(platform_providers_1.DEVICE)),
        __metadata("design:paramtypes", [Object, core_1.ViewContainerRef, core_1.TemplateRef])
    ], TKIfIOSDirective);
    return TKIfIOSDirective;
}());
exports.TKIfIOSDirective = TKIfIOSDirective;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm0uZGlyZWN0aXZlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBsYXRmb3JtLmRpcmVjdGl2ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUY7QUFDakYsc0RBQWtFO0FBQ2xFLDhFQUFpRTtBQUdqRTtJQUNJLDhCQUE2QixNQUFjLEVBQUUsU0FBMkIsRUFBRSxXQUFnQztRQUN0RyxJQUFJLE1BQU0sQ0FBQyxFQUFFLEtBQUssd0JBQWEsQ0FBQyxPQUFPLEVBQUU7WUFDckMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzdDO0lBQ0wsQ0FBQztJQUxRLG9CQUFvQjtRQURoQyxnQkFBUyxDQUFDLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxDQUFDO1FBRXZCLFdBQUEsYUFBTSxDQUFDLDJCQUFNLENBQUMsQ0FBQTtpREFBNEIsdUJBQWdCLEVBQWUsa0JBQVc7T0FEekYsb0JBQW9CLENBTWhDO0lBQUQsMkJBQUM7Q0FBQSxBQU5ELElBTUM7QUFOWSxvREFBb0I7QUFTakM7SUFDSSwwQkFBNkIsTUFBYyxFQUFFLFNBQTJCLEVBQUUsV0FBZ0M7UUFDdEcsSUFBSSxNQUFNLENBQUMsRUFBRSxLQUFLLHdCQUFhLENBQUMsR0FBRyxFQUFFO1lBQ2pDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUM3QztJQUNMLENBQUM7SUFMUSxnQkFBZ0I7UUFENUIsZ0JBQVMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsQ0FBQztRQUVuQixXQUFBLGFBQU0sQ0FBQywyQkFBTSxDQUFDLENBQUE7aURBQTRCLHVCQUFnQixFQUFlLGtCQUFXO09BRHpGLGdCQUFnQixDQU01QjtJQUFELHVCQUFDO0NBQUEsQUFORCxJQU1DO0FBTlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBWaWV3Q29udGFpbmVyUmVmLCBUZW1wbGF0ZVJlZiwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEZXZpY2UsIHBsYXRmb3JtTmFtZXMgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xuaW1wb3J0IHsgREVWSUNFIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtLXByb3ZpZGVyc1wiO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6IFwiW3RrSWZBbmRyb2lkXVwiIH0pXG5leHBvcnQgY2xhc3MgVEtJZkFuZHJvaWREaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCBASW5qZWN0KERFVklDRSkgZGV2aWNlOiBEZXZpY2UsIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZiwgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPE9iamVjdD4pIHtcbiAgICAgICAgaWYgKGRldmljZS5vcyA9PT0gcGxhdGZvcm1OYW1lcy5hbmRyb2lkKSB7XG4gICAgICAgICAgICBjb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHRlbXBsYXRlUmVmKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiBcIlt0a0lmSU9TXVwiIH0pXG5leHBvcnQgY2xhc3MgVEtJZklPU0RpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoIEBJbmplY3QoREVWSUNFKSBkZXZpY2U6IERldmljZSwgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLCB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8T2JqZWN0Pikge1xuICAgICAgICBpZiAoZGV2aWNlLm9zID09PSBwbGF0Zm9ybU5hbWVzLmlvcykge1xuICAgICAgICAgICAgY29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyh0ZW1wbGF0ZVJlZik7XG4gICAgICAgIH1cbiAgICB9XG59Il19