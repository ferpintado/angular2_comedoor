import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-auth-profile',
	template: `
		<nav class="col-md-8 col-md-offset-2">
			<ul class="nav nav-tabs">
				<li routerLinkActive="active"><a [routerLink]="['signup']">Signup</a></li>
				<li routerLinkActive="active"><a [routerLink]="['login']">Login</a></li>
				<li routerLinkActive="active"><a [routerLink]="['logout']">Logout</a></li>
			</ul>
		</nav>
		<div class="row spacing">
			<router-outlet></router-outlet>
		</div>
		
	`
})
export class AuthProfileComponent implements OnInit {
	constructor() {}

	ngOnInit() {
		
	}
}