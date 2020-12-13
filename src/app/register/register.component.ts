import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ToastrService } from '../common/toastr.service';


function rateRange(c:AbstractControl): {[key: string]: boolean} | null {

  return null;

}



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  RegisterForm: FormGroup;
  constructor(private fb: FormBuilder,
              private toaster: ToastrService) { 
    this.RegisterForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: [ '', Validators.required],
      notification: 'email'

    });
  }

  ngOnInit() {
    const emailVal = this.RegisterForm.get('email');
   // emailVal.clearValidators();

  }

  save() {
    this.toaster.success("Registration Successfull");
  }


  notifyBy(method: string) {
    let emailVal = this.RegisterForm.get('email');
    emailVal.clearValidators();

    if(method=='email'){
      emailVal.setValidators(Validators.required);
      emailVal.updateValueAndValidity();
    }else {
      emailVal.clearValidators();
      emailVal.updateValueAndValidity();
    
    }
    
  }

}
