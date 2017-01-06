import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

import { PlaceService } from '../place.service';
import { Place } from '../place.model';

@Component({
	selector: 'app-new-place-form',
	templateUrl: './new-place.component.html',
	providers: [PlaceService]
})

export class newPlaceFormComponent implements OnInit {

	newPlaceForm: FormGroup;

	constructor(private placeService: PlaceService) {}

	onSubmit(){
		const values = this.newPlaceForm.value;
		const newPlace = new Place(
			values.name, 
			values.address, 
			values.schedule, 
			values.geo_location, 
			undefined, 
			undefined
		);
		
		this.placeService.addPlace(newPlace)
			.subscribe(
				data => console.log(data),
				error => console.error(error)
			);

		this.newPlaceForm.reset();
	}	

	ngOnInit() {
		this.newPlaceForm = new FormGroup({
			name: new FormControl('', Validators.required),
			address: new FormControl('', Validators.required),
			schedule: new FormControl(''),
			geo_location: new FormControl('')
		});
	}
}

