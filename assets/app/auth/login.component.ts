import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
	selector: 'app-auth-login',
	templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
	myForm: FormGroup;

	constructor() {}

	ngOnInit() {
		this.myForm = new FormGroup({
			email: new FormControl(null, [
				Validators.required,
				Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')
			]),
			password: new FormControl(null, Validators.required),
		})		
	}

	onSubmit(){
		console.log(this.myForm);
		this.myForm.reset();
	}
}