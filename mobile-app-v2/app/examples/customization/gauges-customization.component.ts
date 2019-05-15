// >> gauges-customization-angular
import { Component, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import { RadialScale, RadialBarIndicator } from "nativescript-ui-gauge";
import { EventData } from "tns-core-modules/data/observable";
import { Label } from "tns-core-modules/ui/label";
import { View } from "tns-core-modules/ui/core/view";
import { topmost } from "tns-core-modules/ui/frame";
import { getViewById } from "tns-core-modules/ui/core/view";
import { NavigatedData, Page } from "tns-core-modules/ui/page";

@Component({
    moduleId: module.id,
    selector: "tk-gauges-customization",
    templateUrl: "gauges-customization.component.html",
    styleUrls: ["gauges-customization.component.css"]
})
export class GaugesCustomizationComponent implements AfterViewInit {
    constructor() {
    }

    @ViewChild("myScale") scaleElement: ElementRef;

    ngAfterViewInit() {
        
    }

    public getScan(args: EventData){
        fetch("http://100.100.149.140/iolink/v1/devices/1/processdata/value?format=raw&direction=both")
        .then((response) => response.json())
        .then((capacitorResponse) => {
            //console.log("Capacitor Response ******** "+ JSON.stringify(capacitorResponse));
            var capacitorValue = capacitorResponse.in.value.deviceRawTypeValue;
            console.log("Capacitor Value: " + capacitorValue);

            let button = <View>args.object;
            let parent = button.parent;
            //let capacitorlbl = <Label>getViewById(parent, "capacitorLabel");
            //capacitorlbl.text = capacitorValue;

            fetch("http://100.100.149.140/iolink/v1/devices/3/processdata/value?format=raw&direction=both")
            .then((rfidresponse) => rfidresponse.json())
            .then((rfidJson) => {
                //console.log("RFID Response ******** "+ JSON.stringify(rfidJson));
                //console.log("RFID Value: " + rfidJson.in.value.deviceRawTypeValue);
                var rfidValue = rfidJson.in.value.deviceRawTypeValue;
                let rfidlbl = <Label>getViewById(parent, "rfidLabel");
                rfidValue = String(rfidValue).substring(4);
                rfidValue = String(rfidValue).substring(0, String(rfidValue).length-4);
                rfidValue = String(rfidValue).replace(/,/gi, "-");
                rfidlbl.text = "Bag ID: " + rfidValue;


                var timestampValue = (new Date).toLocaleDateString("%A, %B, %e, %Y, %HH:MM:ss");
                let timestamplbl = <Label>getViewById(parent, "timestampLabel");
                timestamplbl.text = timestampValue;


                let scale = this.scaleElement.nativeElement as RadialScale;
                for (let i = 0; i < scale.indicators.length; i++) {
                    let barIndicator = scale.indicators.getItem(i) as RadialBarIndicator;
                    barIndicator.maximum = parseInt(String(capacitorValue).substring(0, 3));
                }
                
            }).catch((e) => {
                console.error("Error reading RFID");
                console.error(e);
            });
        }).catch((e) => {
            console.error("Error reading Capacitor")
            console.error(e);
        });
    }
}

// << gauges-customization-angular
