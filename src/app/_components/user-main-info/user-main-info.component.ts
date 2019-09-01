import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlValueAccessor, Validator, FormGroup, Validators, AbstractControl, ValidationErrors, FormBuilder } from '@angular/forms';
import { PasswordMatch } from './helpers/password-match.validator';

@Component({
  selector: 'app-user-main-info',
  templateUrl: './user-main-info.component.html',
  styleUrls: ['./user-main-info.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UserMainInfoComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => UserMainInfoComponent),
      multi: true
    }
  ]
})
export class UserMainInfoComponent implements OnInit, ControlValueAccessor, Validator {
  @Input() submitted: boolean;
  mainForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit() {
    this.mainForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      password: ['', [Validators.required,  Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
    }, {
      validator: PasswordMatch('password', 'confirmPassword')
    });
  }
  
  
  // convenience getter for easy access to form fields
  get f() { return this.mainForm.controls; }

  registerOnChange(fn: any): void {
    this.mainForm.valueChanges.subscribe(fn);
  }
  
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(val: any): void {
    val && this.mainForm.setValue(val, { emitEvent: false });
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.mainForm.disable() : this.mainForm.enable();
  }

  validate(c: AbstractControl): ValidationErrors | null{
    return this.mainForm.valid ? null : { invalidForm: {valid: false, message: 'main info fields are invalid'}};
  }

  onTouched: () => void = () => {};

}
