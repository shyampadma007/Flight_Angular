import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-modifyflight',
  templateUrl: './modifyflight.component.html',
  styleUrls: ['./modifyflight.component.css']
})
export class ModifyflightComponent implements OnInit {

  headers=["Flight Number","Flight Name","Source","Destination","Departure Time","Arrival Time","Total No of Seats","Price","Meal Type","Flight Date","Status"];
  flightList: any[] = [];
  hideFlightTable = false;
  hideManageTable = false;
  constructor(private adminService : AdminService) { }

  ngOnInit(): void {
  }

  manageFlight(){
    this.hideFlightTable = false;
    var temp: any[]; 
    this.adminService.getFlightList().subscribe(listdata => {
      listdata.forEach((ele: any) => {         
            temp.push(ele);        
        });
        this.flightList=temp;
      });
    console.log("Display Add Flight Table = ",this.flightList);
    this.hideManageTable=true;
    console.log("manageFlight Method");
  }
}
