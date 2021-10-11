import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { AuthService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css']
})
export class AddflightComponent implements OnInit {

  public hideFlightTable = false;
  public hideManageTable = false;
  isSuccessful = false;
  private check = false;
  //flightList= any[];
  airlineList : any;
  cityList : any;
  mealList : any;
  headers=["Flight Number","Flight Name","Source","Destination","Departure Time","Arrival Time","Total No of Seats","Price","Meal Type","Flight Date","Status"];
  flightid: any;
  flightName : any;
  source : any;
  destination : any;
  departuretime: any;
  arrivaltime:any;
  seat:any;
  available:any;
  price:any;
  mealtype:any;
  flightdate:any;
  status:any;
  statusList:any;
  responseFlightString = '';
  constructor(private adminService : AdminService,private authser : AuthService) { 
    this.airlineList= ["Jet Airways", "Indigo", "Air India","King Fisher", "Spice Jet", "Air Asia"];
    this.cityList=["Coimbatore", "Chennai","Bangalore","Cochin","Hyderabad","Mumbai","Delhi"]; 
    this.mealList=['VEG', 'Non-VEG', 'NONE'];
    this.statusList=["Available","Blocked"];
    this.authser.loginCheck = false;
  }

  ngOnInit(): void {
    
  }

  addFlight(){
    this.hideFlightTable = true;
    this.hideManageTable=false;
  }

  saveFlight(flightForm : any){

    
    console.log(flightForm.value);
    if(this.check=true){
      flightForm.value.flightid=this.flightid;
    }   
    //var saveData = this.adminService.saveFlight(flightForm.value);
    this.adminService.saveFlight(flightForm.value).subscribe(
      res =>{
        debugger;
    /*alert(12345);
    forkJoin(saveData).subscribe(res=>{*/
      this.isSuccessful = true;
      console.log(res);      
     },err => {
      this.responseFlightString = err.error.text;
      this.isSuccessful = true;
      debugger;
      console.log(err.error.text);
     }); 
    this.hideFlightTable = false;
    this.check=false;
    flightForm.reset();
  }
}
