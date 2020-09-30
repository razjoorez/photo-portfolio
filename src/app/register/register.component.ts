import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  RegisterForm: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.RegisterForm = this.fb.group({
      email: '',
      password: {value: '', disabled: true}

    });
  }

  ngOnInit() {

  }

}
