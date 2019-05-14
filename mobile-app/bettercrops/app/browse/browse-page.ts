import { NavigatedData, Page } from "tns-core-modules/ui/page";
import { BrowseViewModel } from "./browse-view-model";
import { Label } from "tns-core-modules/ui/label";


export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new BrowseViewModel();
    const capacitorLabel = page.getViewById("capacitorLabel");
}


export function getScan(){
    fetch("http://100.100.149.140/iolink/v1/devices/1/processdata/value?format=raw&direction=both")
    .then((response) => response.json())
    .then((capacitorResponse) => {
        //console.log("Capacitor Response ******** "+ JSON.stringify(capacitorResponse));
        console.log("Capacitor Value: " + capacitorResponse.in.value.deviceRawTypeValue);
        this.capacitorValue = capacitorResponse.in.value.deviceRawTypeValue;
        fetch("http://100.100.149.140/iolink/v1/devices/3/processdata/value?format=raw&direction=both")
        .then((rfidresponse) => rfidresponse.json())
        .then((rfidJson) => {
            //console.log("RFID Response ******** "+ JSON.stringify(rfidJson));
            console.log("RFID Value: " + rfidJson.in.value.deviceRawTypeValue);
        }).catch((e) => {
            console.error("Error reading RFID");
            console.error(e);
        });
    }).catch((e) => {
        console.error("Error reading Capacitor")
        console.error(e);
    });
}