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
    this.http.post('http://localhost:1814/Customer/SaveCustomer', customer).subscribe(data => {
      debugger
    });
  }
}

