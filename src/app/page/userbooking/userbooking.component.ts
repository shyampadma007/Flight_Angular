import { Component, OnInit } from '@angular/core';
import { UserbookingserviceService } from 'src/app/service/userbookingservice.service';

@Component({
  selector: 'app-userbooking',
  templateUrl: './userbooking.component.html',
  styleUrls: ['./userbooking.component.css']
})
export class UserbookingComponent implements OnInit {

  user : any;
  source : any;
  destination : any;
  sourcedate : any;
  noofseats : any;
  listRecords = false;
  bookingRecords = false;
  headers = ["Flight Number", "Flight Name", "Source", "Destination", "Departure Time", "Arrival Time","Price","Status"];
  cityValue = ["Coimbatore", "Chennai","Bangalore","Cochin","Hyderabad","Mumbai","Delhi"];

  constructor(private bookingService: UserbookingserviceService) { }

  ngOnInit(): void {
    this.user = this.bookingService.loginCheck;
  }

  onSubmit(searchFlight : any) {    
    console.log(searchFlight.value);
  }

}
