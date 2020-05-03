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
  item;
  items;
  products = products;
  product;
  totalamount : Number = 0;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }




  clearCart() {
    window.alert('Your order has been placed!');
    this.items = [];
    return this.items;
    
  }

  removeitem(item) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  getTotal(){
    let total = 0;
    for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].price) {
            total += this.items[i].price * 1
            this.totalamount = total;
        }
    }
    return total;
}




  // addToCart(product) {
  //   this.cartService.addToCart(product);
}
