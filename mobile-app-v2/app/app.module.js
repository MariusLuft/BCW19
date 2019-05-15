"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_component_1 = require("./navigation/app.component");
var app_routing_1 = require("./app.routing");
var options_service_1 = require("./navigation/options/options.service");
var exampleItemService_service_1 = require("./navigation/exampleItemService.service");
var examples_list_component_1 = require("./navigation/examples-list/examples-list.component");
var options_component_1 = require("./navigation/options/options.component");
var common_directives_module_1 = require("./navigation/directives/common-directives.module");
var router_1 = require("nativescript-angular/router");
var forms_1 = require("nativescript-angular/forms");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                common_directives_module_1.CommonDirectivesModule,
                forms_1.NativeScriptFormsModule,
                router_1.NativeScriptRouterModule,
                app_routing_1.routing
            ],
            exports: [
                nativescript_module_1.NativeScriptModule,
                router_1.NativeScriptRouterModule
            ],
            declarations: [
                app_component_1.AppComponent,
                examples_list_component_1.ExamplesListDepthComponents,
                options_component_1.OptionsComponent,
            ],
            providers: [
                options_service_1.OptionsService,
                exampleItemService_service_1.ExampleItemService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDREQUEwRDtBQUMxRCw2Q0FBd0M7QUFDeEMsd0VBQXNFO0FBQ3RFLHNGQUE2RTtBQUM3RSw4RkFBaUc7QUFDakcsNEVBQTBFO0FBQzFFLDZGQUEwRjtBQUMxRixzREFBdUU7QUFDdkUsb0RBQXFFO0FBOEJyRTtJQUFBO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBNUJyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLGlEQUFzQjtnQkFDdEIsK0JBQXVCO2dCQUN2QixpQ0FBd0I7Z0JBQ3hCLHFCQUFPO2FBQ1Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQixpQ0FBd0I7YUFDM0I7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7Z0JBQ1oscURBQTJCO2dCQUMzQixvQ0FBZ0I7YUFDbkI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsZ0NBQWM7Z0JBQ2QsK0NBQWtCO2FBQ3JCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQTFCLElBQTBCO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vbmF2aWdhdGlvbi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyByb3V0aW5nIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcbmltcG9ydCB7IE9wdGlvbnNTZXJ2aWNlIH0gZnJvbSBcIi4vbmF2aWdhdGlvbi9vcHRpb25zL29wdGlvbnMuc2VydmljZVwiO1xuaW1wb3J0IHsgRXhhbXBsZUl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4vbmF2aWdhdGlvbi9leGFtcGxlSXRlbVNlcnZpY2Uuc2VydmljZVwiO1xuaW1wb3J0IHsgRXhhbXBsZXNMaXN0RGVwdGhDb21wb25lbnRzIH0gZnJvbSBcIi4vbmF2aWdhdGlvbi9leGFtcGxlcy1saXN0L2V4YW1wbGVzLWxpc3QuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBPcHRpb25zQ29tcG9uZW50IH0gZnJvbSBcIi4vbmF2aWdhdGlvbi9vcHRpb25zL29wdGlvbnMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDb21tb25EaXJlY3RpdmVzTW9kdWxlIH0gZnJvbSAnLi9uYXZpZ2F0aW9uL2RpcmVjdGl2ZXMvY29tbW9uLWRpcmVjdGl2ZXMubW9kdWxlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIENvbW1vbkRpcmVjdGl2ZXNNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXG4gICAgICAgIHJvdXRpbmdcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIEV4YW1wbGVzTGlzdERlcHRoQ29tcG9uZW50cyxcbiAgICAgICAgT3B0aW9uc0NvbXBvbmVudCxcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBPcHRpb25zU2VydmljZSxcbiAgICAgICAgRXhhbXBsZUl0ZW1TZXJ2aWNlXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==