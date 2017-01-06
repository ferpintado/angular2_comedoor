import { Component } from '@angular/core';


@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    name = 'Name from Component'; 

    eventClicked($event){
    	alert($event);
    }

}