import { Customer } from './customer';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CustomerDataServerService {

  customersList: Array<Customer>;

  constructor(private http: HttpClient) {

  }

  loadCustomers() {
    this.http.get('http://localhost:1814/customer/GetAllCustomers').subscribe(data => {
      // Read the result field from the JSON response.
      this.customersList = data as Array<Customer>
    });
  }

  saveCustomer(customer:Customer){    
    let queryString:string =  `?name=${customer.name}&gender=${customer.gender}&address=${customer.address}&stratum=${customer.stratum}`;
    this.http.get('http://localhost:1814/Customer/SaveCustomer'+queryString).subscribe(data => {
      this.loadCustomers();
    });
  }
}

