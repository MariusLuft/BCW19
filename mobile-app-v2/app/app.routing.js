"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("nativescript-angular/router");
var examples_list_component_1 = require("./navigation/examples-list/examples-list.component");
var options_component_1 = require("./navigation/options/options.component");
var APP_ROUTES = [
    { path: "", redirectTo: "examples-depth-1/root/root", pathMatch: 'full' },
    { path: "examples-depth-1/:parentTitle/:tappedTitle", component: examples_list_component_1.ExamplesListDepth1Component },
    { path: "examples-depth-2/:parentTitle/:tappedTitle", component: examples_list_component_1.ExamplesListDepth2Component },
    { path: "examples-depth-3/:parentTitle/:tappedTitle", component: examples_list_component_1.ExamplesListDepth3Component },
    { path: "options", component: options_component_1.OptionsComponent },
    {
        path: "GaugesGettingStartedComponent",
        loadChildren: './examples/gauges-examples.module#GaugesExamplesModule',
        data: {
            "title": "Getting Started"
        }
    },
    {
        path: "GaugesAnimationsComponent",
        loadChildren: './examples/gauges-examples.module#GaugesExamplesModule',
        data: {
            "title": "Animations"
        }
    },
    {
        path: "GaugesCustomizationComponent",
        loadChildren: './examples/gauges-examples.module#GaugesExamplesModule',
        data: {
            "title": "Better Crops"
        }
    },
    {
        path: "GaugesStyleBindingsComponent",
        loadChildren: './examples/gauges-examples.module#GaugesExamplesModule',
        data: {
            "title": "Style bindings"
        }
    },
    {
        path: "GaugesScalesComponent",
        loadChildren: './examples/gauges-examples.module#GaugesExamplesModule',
        data: {
            "title": "Scales"
        }
    },
];
exports.routing = router_1.NativeScriptRouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNEQUF1RTtBQUd2RSw4RkFBMko7QUFDM0osNEVBQTBFO0FBRzFFLElBQU0sVUFBVSxHQUFXO0lBQ3ZCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsNEJBQTRCLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtJQUN6RSxFQUFFLElBQUksRUFBRSw0Q0FBNEMsRUFBRSxTQUFTLEVBQUUscURBQTJCLEVBQUU7SUFDOUYsRUFBRSxJQUFJLEVBQUUsNENBQTRDLEVBQUUsU0FBUyxFQUFFLHFEQUEyQixFQUFFO0lBQzlGLEVBQUUsSUFBSSxFQUFFLDRDQUE0QyxFQUFFLFNBQVMsRUFBRSxxREFBMkIsRUFBRTtJQUM5RixFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLG9DQUFnQixFQUFFO0lBQ2hEO1FBQ0ksSUFBSSxFQUFFLCtCQUErQjtRQUNyQyxZQUFZLEVBQUUsd0RBQXdEO1FBQ3RFLElBQUksRUFBRTtZQUNGLE9BQU8sRUFBRSxpQkFBaUI7U0FDN0I7S0FDSjtJQUNEO1FBQ0ksSUFBSSxFQUFFLDJCQUEyQjtRQUNqQyxZQUFZLEVBQUUsd0RBQXdEO1FBQ3RFLElBQUksRUFBRTtZQUNGLE9BQU8sRUFBRSxZQUFZO1NBQ3hCO0tBQ0o7SUFDRDtRQUNJLElBQUksRUFBRSw4QkFBOEI7UUFDcEMsWUFBWSxFQUFFLHdEQUF3RDtRQUN0RSxJQUFJLEVBQUU7WUFDRixPQUFPLEVBQUUsY0FBYztTQUMxQjtLQUNKO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsOEJBQThCO1FBQ3BDLFlBQVksRUFBRSx3REFBd0Q7UUFDdEUsSUFBSSxFQUFFO1lBQ0YsT0FBTyxFQUFFLGdCQUFnQjtTQUM1QjtLQUNKO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsdUJBQXVCO1FBQzdCLFlBQVksRUFBRSx3REFBd0Q7UUFDdEUsSUFBSSxFQUFFO1lBQ0YsT0FBTyxFQUFFLFFBQVE7U0FDcEI7S0FDSjtDQUNKLENBQUM7QUFFVyxRQUFBLE9BQU8sR0FBRyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IEV4YW1wbGVzTGlzdERlcHRoMUNvbXBvbmVudCwgRXhhbXBsZXNMaXN0RGVwdGgyQ29tcG9uZW50LCBFeGFtcGxlc0xpc3REZXB0aDNDb21wb25lbnQgfSBmcm9tIFwiLi9uYXZpZ2F0aW9uL2V4YW1wbGVzLWxpc3QvZXhhbXBsZXMtbGlzdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IE9wdGlvbnNDb21wb25lbnQgfSBmcm9tIFwiLi9uYXZpZ2F0aW9uL29wdGlvbnMvb3B0aW9ucy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEdhdWdlc0N1c3RvbWl6YXRpb25Db21wb25lbnQgfSBmcm9tICcuL2V4YW1wbGVzL2N1c3RvbWl6YXRpb24vZ2F1Z2VzLWN1c3RvbWl6YXRpb24uY29tcG9uZW50JztcblxuY29uc3QgQVBQX1JPVVRFUzogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCJleGFtcGxlcy1kZXB0aC0xL3Jvb3Qvcm9vdFwiLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxuICAgIHsgcGF0aDogXCJleGFtcGxlcy1kZXB0aC0xLzpwYXJlbnRUaXRsZS86dGFwcGVkVGl0bGVcIiwgY29tcG9uZW50OiBFeGFtcGxlc0xpc3REZXB0aDFDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwiZXhhbXBsZXMtZGVwdGgtMi86cGFyZW50VGl0bGUvOnRhcHBlZFRpdGxlXCIsIGNvbXBvbmVudDogRXhhbXBsZXNMaXN0RGVwdGgyQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcImV4YW1wbGVzLWRlcHRoLTMvOnBhcmVudFRpdGxlLzp0YXBwZWRUaXRsZVwiLCBjb21wb25lbnQ6IEV4YW1wbGVzTGlzdERlcHRoM0NvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJvcHRpb25zXCIsIGNvbXBvbmVudDogT3B0aW9uc0NvbXBvbmVudCB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogXCJHYXVnZXNHZXR0aW5nU3RhcnRlZENvbXBvbmVudFwiLFxuICAgICAgICBsb2FkQ2hpbGRyZW46ICcuL2V4YW1wbGVzL2dhdWdlcy1leGFtcGxlcy5tb2R1bGUjR2F1Z2VzRXhhbXBsZXNNb2R1bGUnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiR2V0dGluZyBTdGFydGVkXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiBcIkdhdWdlc0FuaW1hdGlvbnNDb21wb25lbnRcIixcbiAgICAgICAgbG9hZENoaWxkcmVuOiAnLi9leGFtcGxlcy9nYXVnZXMtZXhhbXBsZXMubW9kdWxlI0dhdWdlc0V4YW1wbGVzTW9kdWxlJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkFuaW1hdGlvbnNcIlxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6IFwiR2F1Z2VzQ3VzdG9taXphdGlvbkNvbXBvbmVudFwiLFxuICAgICAgICBsb2FkQ2hpbGRyZW46ICcuL2V4YW1wbGVzL2dhdWdlcy1leGFtcGxlcy5tb2R1bGUjR2F1Z2VzRXhhbXBsZXNNb2R1bGUnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiQmV0dGVyIENyb3BzXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiBcIkdhdWdlc1N0eWxlQmluZGluZ3NDb21wb25lbnRcIixcbiAgICAgICAgbG9hZENoaWxkcmVuOiAnLi9leGFtcGxlcy9nYXVnZXMtZXhhbXBsZXMubW9kdWxlI0dhdWdlc0V4YW1wbGVzTW9kdWxlJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlN0eWxlIGJpbmRpbmdzXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiBcIkdhdWdlc1NjYWxlc0NvbXBvbmVudFwiLFxuICAgICAgICBsb2FkQ2hpbGRyZW46ICcuL2V4YW1wbGVzL2dhdWdlcy1leGFtcGxlcy5tb2R1bGUjR2F1Z2VzRXhhbXBsZXNNb2R1bGUnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiU2NhbGVzXCJcbiAgICAgICAgfVxuICAgIH0sXG5dO1xuXG5leHBvcnQgY29uc3Qgcm91dGluZyA9IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KEFQUF9ST1VURVMpOyJdfQ==