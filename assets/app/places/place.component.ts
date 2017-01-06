import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Place } from './place.model';
import { PlaceService } from './place.service';

@Component({
    selector: 'app-place',
    templateUrl: './place.component.html',
    providers: [PlaceService]
})

export class PlaceComponent implements OnInit {

	place: Place;

	constructor(
		private placeService: PlaceService,
		private route: ActivatedRoute
		) {

	}

	ngOnInit(){
		const placeId = this.route.snapshot.params['id'];
		
		this.placeService.getPlace(placeId)
			.subscribe(
				(place: Place) => {
					console.log(place)
					this.place = place;
				},
				err => console.log('error', err)
			);
	}

}