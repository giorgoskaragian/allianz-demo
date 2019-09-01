import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { FormGroup, Validators, AbstractControl, ValidationErrors, FormBuilder, NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlValueAccessor, Validator } from '@angular/forms';

@Component({
  selector: 'app-user-address-info',
  templateUrl: './user-address-info.component.html',
  styleUrls: ['./user-address-info.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UserAddressInfoComponent),
      multi: true
    },
     {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => UserAddressInfoComponent),
      multi: true
    }
  ]
})
export class UserAddressInfoComponent implements OnInit, ControlValueAccessor, Validator {
  @Input() submitted: boolean;
  addressForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addressForm = this.formBuilder.group({
      street: ["",[Validators.required]],
      houseNo: ["",[Validators.required]],
      zipCode: ['', [Validators.required, Validators.maxLength(5)]],
      city: ["",[Validators.required]],
      country: ["",[Validators.required]]
    });
  }

  get f() { return this.addressForm.controls; }

  writeValue(val: any): void {
    val && this.addressForm.setValue(val, { emitEvent: false });
  }

  registerOnChange(fn: any): void {
    this.addressForm.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.addressForm.disable() : this.addressForm.enable();
  }

  validate(c: AbstractControl): ValidationErrors | null {
    return this.addressForm.valid ? null : { invalidForm: {valid: false, message: "Address fields are invalid"}};
  }

  onTouched: () => void = () => {};

}
