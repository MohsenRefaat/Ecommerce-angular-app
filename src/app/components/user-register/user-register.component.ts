import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-register',
  imports: [CommonModule, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.scss'
})
export class UserRegisterComponent {
  userRegFrm: FormGroup;
  passwordMatchValidator: ValidatorFn | ValidatorFn[] | null | undefined;

  constructor(private fb: FormBuilder) {
    this.userRegFrm = new FormGroup({
      fullName: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z]{3,}')]),
      email: new FormControl('', [Validators.required, this.existEmailValidator()]),
      phoneNo: new FormControl(''),
      address: new FormGroup({
        city: new FormControl(''),
        postalCode: new FormControl(''),
        street: new FormControl(''),
      }
      ),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required]),
    }, { validators: this.passwordMatch });
  }
  passwordMatch: ValidatorFn = (form: AbstractControl): ValidationErrors | null => {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  };

  get fullName() {
    return this.userRegFrm.get('fullName');
  }
  submit() {
    let userModel: User = this.userRegFrm.value as User;
  }
  existEmailValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let emailVal: string = control.value;

      if (emailVal.length === 0 && control.pristine) {
        return null;
      }

      let ValidationError = { EmailNotValid: { value: emailVal } };

      return emailVal.includes('@') ? null : ValidationError;
    };
  }

}
