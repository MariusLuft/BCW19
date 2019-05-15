"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var router_1 = require("nativescript-angular/router");
var angular_1 = require("nativescript-ui-gauge/angular");
var gauges_animations_component_1 = require("./animations/gauges-animations.component");
var gauges_customization_component_1 = require("./customization/gauges-customization.component");
var gauges_style_bindings_component_1 = require("./style-bindings/gauges-style-bindings.component");
var gauges_getting_started_component_1 = require("./getting-started/gauges-getting-started.component");
var gauges_scales_component_1 = require("./scales/gauges-scales.component");
var gauges_examples_routing_1 = require("./gauges-examples.routing");
var common_directives_module_1 = require("../navigation/directives/common-directives.module");
var GaugesExamplesModule = (function () {
    function GaugesExamplesModule() {
    }
    GaugesExamplesModule = __decorate([
        core_1.NgModule({
            schemas: [core_1.NO_ERRORS_SCHEMA],
            imports: [
                common_directives_module_1.CommonDirectivesModule,
                common_1.NativeScriptCommonModule,
                angular_1.NativeScriptUIGaugeModule,
                router_1.NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forChild(gauges_examples_routing_1.routes)
            ],
            declarations: [
                gauges_animations_component_1.GaugesAnimationsComponent,
                gauges_customization_component_1.GaugesCustomizationComponent,
                gauges_style_bindings_component_1.GaugesStyleBindingsComponent,
                gauges_getting_started_component_1.GaugesGettingStartedComponent,
                gauges_scales_component_1.GaugesScalesComponent
            ]
        })
    ], GaugesExamplesModule);
    return GaugesExamplesModule;
}());
exports.GaugesExamplesModule = GaugesExamplesModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F1Z2VzLWV4YW1wbGVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdhdWdlcy1leGFtcGxlcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBRXZFLHNEQUF1RTtBQUN2RSx5REFBMEU7QUFFMUUsd0ZBQXFGO0FBQ3JGLGlHQUE4RjtBQUM5RixvR0FBZ0c7QUFDaEcsdUdBQW1HO0FBQ25HLDRFQUF5RTtBQUV6RSxxRUFBbUQ7QUFDbkQsOEZBQTJGO0FBbUIzRjtJQUFBO0lBQW9DLENBQUM7SUFBeEIsb0JBQW9CO1FBakJoQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztZQUMzQixPQUFPLEVBQUU7Z0JBQ0wsaURBQXNCO2dCQUN0QixpQ0FBd0I7Z0JBQ3hCLG1DQUF5QjtnQkFDekIsaUNBQXdCO2dCQUN4QixpQ0FBd0IsQ0FBQyxRQUFRLENBQUMsZ0NBQU0sQ0FBQzthQUM1QztZQUNELFlBQVksRUFBRTtnQkFDVix1REFBeUI7Z0JBQ3pCLDZEQUE0QjtnQkFDNUIsOERBQTRCO2dCQUM1QixnRUFBNkI7Z0JBQzdCLCtDQUFxQjthQUN4QjtTQUNKLENBQUM7T0FDVyxvQkFBb0IsQ0FBSTtJQUFELDJCQUFDO0NBQUEsQUFBckMsSUFBcUM7QUFBeEIsb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcblxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlHYXVnZU1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktZ2F1Z2UvYW5ndWxhclwiO1xuXG5pbXBvcnQgeyBHYXVnZXNBbmltYXRpb25zQ29tcG9uZW50IH0gZnJvbSAnLi9hbmltYXRpb25zL2dhdWdlcy1hbmltYXRpb25zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHYXVnZXNDdXN0b21pemF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jdXN0b21pemF0aW9uL2dhdWdlcy1jdXN0b21pemF0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHYXVnZXNTdHlsZUJpbmRpbmdzQ29tcG9uZW50IH0gZnJvbSAnLi9zdHlsZS1iaW5kaW5ncy9nYXVnZXMtc3R5bGUtYmluZGluZ3MuY29tcG9uZW50JztcbmltcG9ydCB7IEdhdWdlc0dldHRpbmdTdGFydGVkQ29tcG9uZW50IH0gZnJvbSAnLi9nZXR0aW5nLXN0YXJ0ZWQvZ2F1Z2VzLWdldHRpbmctc3RhcnRlZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgR2F1Z2VzU2NhbGVzQ29tcG9uZW50IH0gZnJvbSAnLi9zY2FsZXMvZ2F1Z2VzLXNjYWxlcy5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyByb3V0ZXMgfSBmcm9tICcuL2dhdWdlcy1leGFtcGxlcy5yb3V0aW5nJztcbmltcG9ydCB7IENvbW1vbkRpcmVjdGl2ZXNNb2R1bGUgfSBmcm9tICcuLi9uYXZpZ2F0aW9uL2RpcmVjdGl2ZXMvY29tbW9uLWRpcmVjdGl2ZXMubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25EaXJlY3RpdmVzTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJR2F1Z2VNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcylcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBHYXVnZXNBbmltYXRpb25zQ29tcG9uZW50LFxuICAgICAgICBHYXVnZXNDdXN0b21pemF0aW9uQ29tcG9uZW50LFxuICAgICAgICBHYXVnZXNTdHlsZUJpbmRpbmdzQ29tcG9uZW50LFxuICAgICAgICBHYXVnZXNHZXR0aW5nU3RhcnRlZENvbXBvbmVudCxcbiAgICAgICAgR2F1Z2VzU2NhbGVzQ29tcG9uZW50XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBHYXVnZXNFeGFtcGxlc01vZHVsZSB7IH0iXX0=