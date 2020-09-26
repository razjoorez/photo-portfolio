import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  AddressForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.AddressForm = this.fb.group({
      firstLine: ['', Validators.required],
      secondLine: [''],
      postCode: ['', Validators.required],


    })
  }

}
