import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../place.service';
import { Place } from '../place.model';

@Component({
	selector: 'app-places-list',
	templateUrl: './places-list.html',
	providers: [PlaceService]
})
export class PlacesListComponent implements OnInit {

	placesList: Place[];

	constructor(private placeService: PlaceService) {}

	ngOnInit() {
		this.placeService.getPlaces()
			.subscribe(
				(places: Place[]) => {
					this.placesList = places
				}
			);
	}
}