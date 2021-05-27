import { Component, OnInit } from '@angular/core';
 import { ProductdetailsService } from '../service/productdetails.service';
 import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
laptopdetails:any=[]
productname:any
decri:any
cpu:any
ram:any
screen:any
price:any
image:any
video:any

  constructor(public hoteldeatils:ProductdetailsService,  private domSanitizer: DomSanitizer) {
 this.laptopdetails = this.hoteldeatils.gethoteldetails()
 this.productname=this.laptopdetails.productname
 this.decri=this.laptopdetails.decription
 this.cpu=this.laptopdetails.cpu
 this.ram=this.laptopdetails.ram
 this.screen=this.laptopdetails.screen
 this.price=this.laptopdetails.price
 this.image=this.laptopdetails.image
 this.video=this.laptopdetails.video
 this.video = this.domSanitizer.bypassSecurityTrustResourceUrl(this.video);

   }

  ngOnInit() {
   // console.log(this.abcd)
    
  }

}
