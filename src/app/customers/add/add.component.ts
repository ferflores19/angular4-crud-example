import { Component, OnInit } from '@angular/core';

import { Customer } from '../customer';

@Component({
  selector: 'customer-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  customer: Customer;

  stratumList = [
    { value: '1', label: 'One' },
    { value: '2', label: 'Two' },
    { value: '3', label: 'Three' },
    { value: '4', label: 'Four' },
    { value: '5', label: 'Five' },
    { value: '6', label: 'Six' }    
  ];

  genderOptionsList = [
    'Male',
    'Female',
  ];  

  constructor() {
    this.customer = new Customer("", "", "", "");
  }

  ngOnInit() {
  }

  onSaveCustomer(){        
    console.log(JSON.stringify(this.customer));
  }

}
