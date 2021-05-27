import { Component, OnInit } from '@angular/core';
import { HomePage } from '../home/home.page';
import{Router} from  '@angular/router'

import { ProductdetailsService } from '../service/productdetails.service';

@Component({
  selector: 'app-add-cart-details',
  templateUrl: './add-cart-details.page.html',
  styleUrls: ['./add-cart-details.page.scss'],
})
export class AddCartDetailsPage implements OnInit {
 
 
  cartcount:any[]
 
  abc:any=[]
  constructor(public home: HomePage,public laptopdetails:ProductdetailsService,public router:Router) { 
    
 
  }

  ngOnInit() {
    this.getcartItem()
  }

  ionViewWillEnter(){
   
  }
 
  getcartItem(){
  //  let cartvalue = localStorage.getItem("cartvalue")
    this.cartcount = JSON.parse(localStorage.getItem("cartvalue"))
    console.log(this.cartcount)
if(this.cartcount != null && this.cartcount != undefined){
  for(var i=0;i<this.cartcount.length;i++){
    var id= this.cartcount[i].id
    var productname = this.cartcount[i].productname
    var image = this.cartcount[i].image
    var video = this.cartcount[i].video
    var decription = this.cartcount[i].decription
    var cpu=this.cartcount[i].cpu
 var ram=this.cartcount[i].ram
 var screen=this.cartcount[i].screen
 var price=this.cartcount[i].price

    this.abc.push({id,productname,image,video,decription,cpu,ram,screen,price})
}
    
      
      
    }
   
  }
  remove(index){

    this.abc.splice(index,1)
    localStorage.setItem("cartvalue",JSON.stringify(this.abc))
    this.laptopdetails.displaymsg('Item removed successfully ')

  }
  details(a){
    this.laptopdetails.sethoteldetails(a);
    this.router.navigate(['product-details'])
  

  }
}
