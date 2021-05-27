import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Injectable({
   providedIn: 'root'
})
export class ProductdetailsService {
   //currentHotel = new Subject();

   hotelsName: any
   hotelnamedetails
   item
   constructor(public http: HttpClient,public toastController: ToastController) {
   }


   sethoteldetails(a) {
      this.hotelnamedetails = a
   }
   gethoteldetails() {
      return this.hotelnamedetails
   }

   setcartdetails(a) {
      this.item = a
   }
   getcartdetails() {
      return this.item
   }
  async displaymsg(msg){
      const toast = await this.toastController.create({
         message: msg,
         duration: 2000
       });
       toast.present();
   }
}
