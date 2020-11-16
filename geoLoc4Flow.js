import { LightningElement, track, api } from 'lwc';
import { FlowAttributeChangeEvent, FlowNavigationNextEvent } from 'lightning/flowSupport';

export default class GeoLoc4Flow extends LightningElement {
    @api latitude = 0;
    @api longitude = 0;
    @api noGeo = false;

    handleInit(event) {
        this.latitude = 0;//position.coords.latitude;
        this.longitude = 0;//position.coords.longitude;
        
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position) => {
                this.latitude = position.coords.latitude;
                this.longitude = position.coords.longitude;
            });
        } else {
            noGeo = True;
        }

        const dispatchLat = new FlowAttributeChangeEvent('latitude', this.latitude);
        const dispatchLong = new FlowAttributeChangeEvent('longitude', this.longitude);
        const dispatchSupp = new FlowAttributeChangeEvent('noGeo', this.noGeo);

        this.dispatchEvent(dispatchLat);   
        this.dispatchEvent(dispatchLong); 
        this.dispatchEvent(dispatchSupp); 
    }

}
