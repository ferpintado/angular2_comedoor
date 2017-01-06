import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

import { Place } from './place.model';

@Injectable()
export class PlaceService {

	private places: Place[] = []
	
	constructor( private http: Http) {}

	addPlace(place:Place){
		const body = JSON.stringify(place);
		const headers = new Headers({ 'Content-Type' : 'application/json'});
		return this.http.post('http://localhost:3000/place', body, { headers: headers})
			.map((response: Response) => response.json())
			.catch((error:Response) => Observable.throw(error.json()))
	}

	getPlaces(){
		return this.http.get('http://localhost:3000/place')
			.map((response:Response) => {
				const places = response.json();
				let placesArray: Place[] = [];
				for(let place of places){
					placesArray.push(new Place(place._id, place.name, place.address, place.schedule, null, null, null))
				}
				return placesArray;
			})
			.catch((error: Response) => Observable.throw(error.json()));
	}

	getPlace(id: number){
		return this.http.get('http://localhost:3000/place/' + id)
			.map((response:Response) => {
				const place = response.json();
				return new Place(place._id, place.name, place.address, place.schedule, null, null, null);				
			})
			.catch((error: Response) => Observable.throw(error.json()));

	}
}