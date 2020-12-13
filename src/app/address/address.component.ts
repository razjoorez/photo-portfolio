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
      firstLine: new FormControl('',[Validators.required, Validators.minLength(3)]),
      secondLine: new FormControl(''),
      town: new FormControl(''),
      postCode: this.postCode ,
      country: new FormControl(''),
      saveProg: new FormControl(true)
    });
  }

  save() {
   // alert(JSON.stringify(this.AddressForm.value) );
    console.log(JSON.stringify(this.AddressForm.value));
  }

  populateData(): void {
    this.AddressForm.setValue({
      firstLine: '15 Elemes Avenue',
      secondLine: 'Edith Road',
      postCode: 'sw19',
      country: 'uk',
      town: 'London',
      saveProg: 'true'
    });
  };

  semiPopulateData(): void {

    this.AddressForm.setValue({
      firstLine: '',
      secondLine: '',
      postCode: '',
      country: '',
      town: '',
      saveProg: 'false'
    });

    this.AddressForm.patchValue({
      firstLine: '19 Elemes Road',
      postCode: 'sw19',
      country: 'uk',
      town: 'London',
      saveProg: 'true'
    });
  };


}
