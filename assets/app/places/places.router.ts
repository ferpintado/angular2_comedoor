import { Routes } from '@angular/router';

import { PlacesListComponent } from './places-list/places-list.component';
import { PlaceComponent } from './place.component';

export const PLACES_ROUTES: Routes = [
	{ path: '', redirectTo: 'list', pathMatch: 'full'},
	{ path: 'list', component: PlacesListComponent },
	{ path: ':id', component: PlaceComponent}
] 