import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  AddressForm: FormGroup;
  postCode = new FormControl();
  constructor() { }

  ngOnInit() {

    this.AddressForm  = new FormGroup({
      firstLine: new FormControl(''),
      secondLine: new FormControl(''),
      town: new FormControl(''),
      postCode: this.postCode ,
      country: new FormControl(''),
      saveProg: new FormControl(true)
    });
  }

  save() {
    alert(JSON.stringify(this.AddressForm.value) );
  }

}
