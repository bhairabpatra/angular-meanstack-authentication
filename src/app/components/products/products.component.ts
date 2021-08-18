import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../shared/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  product:any = [];

  constructor(private authService:AuthService , private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.product = this.activatedRoute.snapshot.data['products']
    console.log("++++++++" + this.product);

    // this.authService.getProduct().subscribe(res =>{
    //   this.products = res;
    //   console.log("++++++++" + this.products);
    // })
  }

}
