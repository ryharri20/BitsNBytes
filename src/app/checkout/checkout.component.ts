import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { products } from '../products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  items;
  products = products;
  product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  
  clearCart() {
    this.items = this.cartService.clearCart();
  }
  
    // addToCart(product) {
    //   this.cartService.addToCart(product);
}
