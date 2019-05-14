import { NavigatedData, Page } from "tns-core-modules/ui/page";
import { BrowseViewModel } from "./browse-view-model";

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new BrowseViewModel();
}


export function getScan(){
    fetch("http://100.100.149.140/iolink/v1/devices/1/processdata/value?format=raw&direction=both")
    .then((response) => response.text())
    .then((r) => {
        console.log("TEST capacitor ******** "+ r);
    }).catch((e) => {
    });

    fetch("http://100.100.149.140/iolink/v3/devices/1/processdata/value?format=raw&direction=both")
    .then((response) => response.text())
    .then((r) => {
        console.log("TEST RFID ******** "+ r);
    }).catch((e) => {
    });

}