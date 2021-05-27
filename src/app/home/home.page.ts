import { Component,OnInit} from '@angular/core';

import{Router} from  '@angular/router'
 import{ProductdetailsService} from '../service/productdetails.service'
import {HttpClient,HttpClientModule} from '@angular/common/http';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public laptopName:any=[]
  public additem:any=[];
  public cartitem:any=[];
  public laptoplist:any=[];
  countflag:boolean

  constructor(public router:Router,public http: HttpClient,public productArry:ProductdetailsService) {
    this.cartitem = []
    this.http.get("./../../assets/product.json").subscribe(async (value:any) => {

      this.laptopName = value
      console.log(this.laptopName)
      this.getJsonValue()
    })
      

    
  }
  ngOnInit(){

  }
  ionViewWillEnter(){
    
    this.additem = JSON.parse(localStorage.getItem("cartvalue"))
    if(this.additem == null || this.additem == undefined ||this.additem.length ==0 ){
      this.additem = [];
      this.countflag=false
    }
    else{
     this.countflag=true
    }
  }
getJsonValue(){

  this.laptopName= this.laptopName
  for(var i=0;i<this.laptopName.length;i++){
var id= this.laptopName[i].id
var productname = this.laptopName[i].productName
var image = this.laptopName[i].image
var video = this.laptopName[i].video
var decription = this.laptopName[i].description
var cpu = this.laptopName[i].cpu
var ram = this.laptopName[i].ram
var screen = this.laptopName[i].screen
var price = this.laptopName[i].price


this.laptoplist.push({id,productname,image,video,decription,cpu,ram,screen,price})
  }
  
}
  Details(a){
    this.productArry.sethoteldetails(a);
  
 this.router.navigateByUrl('/product-details')
  }

  Addtocart(item){
    let flag = 0
   for(let i=0;i<this.additem.length;i++){
      if(this.additem[i]['id'] == item['id']){
flag =1
break;
      }
      else{
        flag = 0
      }
    }
   // this.cartitem = []
   if(flag ==0){
    this.countflag=true
    this.additem.push(item)
    this.productArry.displaymsg('Item added successfully ')
   }else{
    this.productArry.displaymsg('Item is already added')
   }

//  this.cartitem = this.additem
 console.log(JSON.stringify(this.additem))
 localStorage.setItem("cartvalue",JSON.stringify(this.additem))
   this.productArry.setcartdetails(this.additem)
  //  this.router.navigateByUrl('/product-details')

     }
    cart(){
    //  alert("in")
      // localStorage.setItem('cartdata',a)
      this.router.navigateByUrl('/add-cart-details')
     }
}
