import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  
  userRegistrationForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userRegistrationForm = this.formBuilder.group({
      mainFormInfo: new FormControl(''),
      addressFormInfo: new FormControl('')
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.userRegistrationForm.invalid) {
        return;
    }
    alert('SUCCESS!!!\n' + JSON.stringify(this.userRegistrationForm.value, null, 2));
  }

  onReset() {
    this.submitted = false;
    this.userRegistrationForm.reset();
  }
}
