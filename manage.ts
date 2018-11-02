import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';

import * as Enums from '../../assets/apiconfig';

/**
 * Generated class for the ChefPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-manage',
  templateUrl: 'manage.html',
})
export class Manage {

 
    cust_name: any;
    date: any;
    time: any;
    table_no: any;
  
    constructor(  public loadingCtrl: LoadingController,public navCtrl: NavController,public http: Http ) {
  
    }

    ionViewCanEnter()
    {
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
      loading.present();
  
      let postParams = {customer_name:"cust_name",date:"date",time:"time",table_number:"table_no"};
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
  
          let url = Enums.APIURL.URL1;
          let path = url.concat( "/api/list");
  
          this.http.post(path, JSON.stringify(postParams), {headers: headers})
            .subscribe(res => {
   
              var data = res.json();
              this.cust_name=[];
              this.date=[];
              this.time=[];
              this.table_no=[];
              for (let i in data)
              {
                this.cust_name.push(data[i].customer_name);
                this.date.push(data[i+1].date);
                this.time.push(data[i+2].time);
                this.table_no.push(data[i+3].table_number);
              
              }
             loading.dismiss();
            }, (err) => {
              console.log(err);
            });
    }
    public get_details($event,cust_name,date,time,table_no)
    {
      console.log(cust_name);
      console.log(date)
      console.log(time)
      console.log(table_no)
    }
  }
  