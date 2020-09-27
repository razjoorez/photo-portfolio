import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  AddressForm: FormGroup;
  constructor() { }

  ngOnInit() {

    this.AddressForm  = new FormGroup({
      firstLine: new FormControl(''),
      secondLine: new FormControl(''),
      town: new FormControl(''),
      postCode: new FormControl(['', Validators.required]),
      country: new FormControl(['', Validators.required]),
      saveProg: new FormControl(true)
    });
  }

}
