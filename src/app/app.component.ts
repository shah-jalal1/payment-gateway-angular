import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {StripeService} from "ngx-stripe";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  constructor(

  ) { }
  handler:any = null;
  ngOnInit() {

    this.loadStripe();
  }

  pay(amount: any) {

    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51IeCaSIuW9m5uNpEd0c2E5hvnn18ad1CCSqlS5olW9lIyhFee3744sjy8GKnQXqIoezmbDKHT1cuyEqnTQP6WVYH00xcqP3fNj',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        token.amount = amount;
        console.log('token amount', token.amount)
        console.log(token)
        alert('Token Created!!');


      }
    });

    handler.open({
      name: 'Spot',
      description: 'Stripe Payment Gateway',
      amount: amount * 100
    });

  }

  loadStripe() {

    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51HxRkiCumzEESdU2Z1FzfCVAJyiVHyHifo0GeCMAyzHPFme6v6ahYeYbQPpD9BvXbAacO2yFQ8ETlKjo4pkHSHSh00qKzqUVK9',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token)
            alert('Payment Success!!');

          }

        });

      }

      window.document.body.appendChild(s);

    }
  }
}

