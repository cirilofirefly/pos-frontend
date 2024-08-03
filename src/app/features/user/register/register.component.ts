import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {

  registerForm = new FormGroup({
    name: new FormControl('', [
		Validators.required,
		Validators.minLength(10),
		Validators.maxLength(100),
    ]),
	email: new FormControl('', [
		Validators.required,
		Validators.email
	]),
	password: new FormControl('', [
		Validators.required,
		Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
	]),
	confirm_password: new FormControl('', [
		Validators.required,
		Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
	]),
	contact_number: new FormControl('', [
		Validators.required,
		Validators.minLength(13),
		Validators.maxLength(13),
	]),
	birth_date: new FormControl('', [
		Validators.required,
	]),
  }, { validators: this.passworMatch.bind(this) });

  register() {
	console.log(this.registerForm.value)
  }

  passworMatch(control: AbstractControl) : ValidationErrors | null {
	const password = control.get('password')?.value;
    const confirmPassword = control.get('confirm_password')?.value;
	return password === confirmPassword ? null : { passwordMismatch: true };
  }
}
