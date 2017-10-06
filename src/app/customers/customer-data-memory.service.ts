import { Injectable } from '@angular/core';
import { Customer } from './customer';

@Injectable()
export class CustomerDataMemoryService {

  customersList: Array<Customer>;

  constructor() {
  }

  loadCustomers() {
    this.initializeCustomerList();
  }

  private initializeCustomerList() {
    this.customersList = [
      {
        name: "Jose",
        address: "Vereda La Estampilla",
        gender: 1,
        stratum: 1
      },
      {
        name: "María",
        address: "Fátima",
        gender: 0,
        stratum: 4
      },
      {
        name: "Pepito",
        address: "Vereda La Estampilla",
        gender: 1,
        stratum: 1
      },
      {
        name: "Carlos",
        address: "Villamaría",
        gender: 1,
        stratum: 5
      },
    ];
  }

  public saveCustomer(customer: Customer) {

    if(!this.customersList){
      this.initializeCustomerList();
    }
    
    this.customersList.push(customer);
  }

}
