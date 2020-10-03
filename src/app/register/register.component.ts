import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  RegisterForm: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.RegisterForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: ['', Validators.required],
      password: {value: '', disabled: true}

    });
  }

  ngOnInit() {
    const emailVal = this.RegisterForm.get('email');
   // emailVal.clearValidators();

  }

  notifyBy(method: string) {
    let emailVal = this.RegisterForm.get('email');
    emailVal.clearValidators();
    
    if(method=='email'){
     
      //emailVal.setValidators(Validators.required);
      emailVal.clearValidators();
     
      alert(method);
    }else {
     // emailVal.clearValidators();
      alert('cleard')
    }
    
  }

}
