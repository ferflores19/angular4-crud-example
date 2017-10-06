import { Component, OnInit } from '@angular/core';
import { CustomerDataServerService } from '../customer-data-server.service';


@Component({
  selector: 'customer-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private customerService:CustomerDataServerService) { }

  ngOnInit() {    
    console.log("hi list");
    this.customerService.loadCustomers();
  }

  getGenderOptions() {
    return [
      "Female",
      "Male"
    ]
  };


}
