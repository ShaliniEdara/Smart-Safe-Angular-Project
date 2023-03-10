import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Application } from 'app/model/api';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Status } from 'app/model/status';
import { NgxSpinnerService } from 'ngx-spinner';
import { StoreInfoRequest } from 'app/model/storeInfoRequest';
import { NGXToastrService } from 'app/service/toastr.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [NGXToastrService]

})
export class DashboardComponent implements OnInit {

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*' ,
      'Access-Control-Allow-Methods':'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
      'Authorization': 'Basic ' + btoa('dashboard:$dashboardPWD$')
    })
  } 

  store = new StoreInfoRequest();
  stores: StoreInfoRequest[];
  selectedStore = new StoreInfoRequest();

  api=new Application();
  status=new Status();
  apis: Application[];
  constructor(private http: HttpClient,private router:Router,private spinner:NgxSpinnerService,private changeDetectorRefs: ChangeDetectorRef) {

   }
 
   getAssignedStoreList() {
    return this.http.get<StoreInfoRequest[]>(environment.smartSafeAPIUrl + '/storeinfo/all/assigned');
  }
  getAllAssignedStoresList() {
    return this.getAssignedStoreList().
      subscribe((data) => {
        console.log(data);
        this.stores = data;
        this.changeDetectorRefs.markForCheck();
      });
  }
          

  ngOnInit() {
    this.getAllAssignedStoresList();

   // this.spinner.show();
   // this.getAllEndPointsList();
  }

}
