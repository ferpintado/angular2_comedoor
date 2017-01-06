import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	template: `
		<header class="row">
			<nav class="col-md-8 col-md-offset-2">
				<ul class="nav nav-pills">
					<li routerLinkActive="active"><a [routerLink]="['/places']">Places</a></li>
					<li routerLinkActive="active"><a [routerLink]="['/add-new-place']">Add new</a></li>
					<li routerLinkActive="active"><a [routerLink]="['/auth']">Profile</a></li>
				</ul>
			</nav>
		</header>
	`
})
export class HeaderComponent implements OnInit {
	constructor() {}

	ngOnInit() {
		
	}
}