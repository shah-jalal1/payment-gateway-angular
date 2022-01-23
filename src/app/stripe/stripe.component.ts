import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';
import { StripeService } from 'ngx-stripe';

import {PaymentService} from "../services/payment.service";
// import {loadStripe} from "@stripe/stripe-js";

@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.scss']
})
export class StripeComponent implements OnInit {


  stripe;
  donationAmount = 5.00;
  isGettingCheckout = false;

  constructor(
    private stripeService: StripeService,
    private http: HttpClient,
    private paymentService: PaymentService
  ) { }

  ngOnInit(): void {
  }

  checkout() {
    // Check the server.js tab to see an example implementation
    this.paymentService.addPaymentSession( )
      .pipe(
        switchMap((session: any) => {
          return this.stripeService.redirectToCheckout({ sessionId: session.id })
        })
      )
      .subscribe(result => {
        // If `redirectToCheckout` fails due to a browser or network
        // error, you should display the localized error message to your
        // customer using `error.message`.
        if (result.error) {
          alert(result.error.message);
        }
      });
  }


  async donate() {
    this.isGettingCheckout = true;
    // this.stripe = await loadStripe('pk_test_51IeCaSIuW9m5uNpESvNhVviCzvJtAb6fiF8TKxiJQL8GBjusqbROxYGdPMyq6tXJlwyAv5tIOzsxYjOwP7JzwMEP00eSrvx0sN');


    this.paymentService.addPaymentSession( )
      .pipe(
        switchMap((session: any) => {
          return this.stripeService.redirectToCheckout({ sessionId: session.id })
        })
      )
      .subscribe(result => {
        console.log('success')
        // If `redirectToCheckout` fails due to a browser or network
        // error, you should display the localized error message to your
        // customer using `error.message`.
        if (result.error) {
          alert(result.error.message);
        }
      });


    // this.isGettingCheckout = true;
    // this.stripe = await loadStripe('pk_test_YOUR_STRIPE_PUBLIC_KEY');
    // const createCheckoutSession =  this.paymentService.addPaymentSession('createCheckoutSession')
    // createCheckoutSession({
    //   product_name: 'Glass of Whiskey',
    //   quantity: 1,
    //   unit_amount: this.donationAmount
    // })
    //   .toPromise()
    //   // Make the id field from the Checkout Session creation API response available to this file, so you can provide it as argument here
    //   // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
    //   // If `redirectToCheckout` fails due to a browser or network error, display the localized error message to your customer using `error.message`.
    //   .then((sessionId: string) => this.stripe.redirectToCheckout({sessionId}))
    //   .catch((e) => console.log('Error Buying a glass of whiskey', e))
    //   .finally(() => this.isGettingCheckout = false);
  // }


  }

}
