import { NavigatedData, Page } from "tns-core-modules/ui/page";
import { BrowseViewModel } from "./browse-view-model";
import { EventData } from "tns-core-modules/data/observable";
import { getViewById } from "tns-core-modules/ui/core/view";
import { Label } from "tns-core-modules/ui/label";
import { View } from "tns-core-modules/ui/core/view";

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new BrowseViewModel();
}


export function getScan(args: EventData){
    fetch("http://100.100.149.140/iolink/v1/devices/1/processdata/value?format=raw&direction=both")
    .then((response) => response.json())
    .then((capacitorResponse) => {
        //console.log("Capacitor Response ******** "+ JSON.stringify(capacitorResponse));
        var capacitorValue = capacitorResponse.in.value.deviceRawTypeValue;
        console.log("Capacitor Value: " + capacitorValue);

        let button = <View>args.object;
        let parent = button.parent;
        let capacitorlbl = <Label>getViewById(parent, "capacitorLabel");
        capacitorlbl.text = capacitorValue;

        fetch("http://100.100.149.140/iolink/v1/devices/3/processdata/value?format=raw&direction=both")
        .then((rfidresponse) => rfidresponse.json())
        .then((rfidJson) => {
            //console.log("RFID Response ******** "+ JSON.stringify(rfidJson));
            console.log("RFID Value: " + rfidJson.in.value.deviceRawTypeValue);
            var rfidValue = rfidJson.in.value.deviceRawTypeValue;
            let rfidlbl = <Label>getViewById(parent, "rfidLabel");
            rfidlbl.text = rfidValue;
        }).catch((e) => {
            console.error("Error reading RFID");
            console.error(e);
        });
    }).catch((e) => {
        console.error("Error reading Capacitor")
        console.error(e);
    });
}