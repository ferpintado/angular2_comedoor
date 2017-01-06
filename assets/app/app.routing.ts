import { Routes, RouterModule } from '@angular/router';
import { newPlaceFormComponent } from './places/place-form/new-place.component';
import { PlacesRouterComponent } from './places/places_router.component';
import { AuthProfileComponent } from './auth/profile.component';
import { AUTH_ROUTES } from './auth/auth.router';
import { PLACES_ROUTES } from './places/places.router';

const APP_ROUTES: Routes = [
	{ path: '', redirectTo: 'places', pathMatch: 'full' },
	{ path: 'add-new-place', component: newPlaceFormComponent },
	{ path: 'places', component: PlacesRouterComponent, children: PLACES_ROUTES },
	{ path: 'auth', component: AuthProfileComponent, children: AUTH_ROUTES}
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
