import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {window} from "rxjs/operators";

@Component({
  selector: 'app-paypal-two',
  templateUrl: './paypal-two.component.html',
  styleUrls: ['./paypal-two.component.scss']
})
export class PaypalTwoComponent implements OnInit {

  @ViewChild('paypalRef', {static: true}) private paypalRef: ElementRef;

  constructor() { }

  ngOnInit(): void {
    //
    // console.log('paypal', paypal)
    // window.paypal.Buttons(
    //   {
    //     style: {
    //       layout: 'horizontal'
    //     }
    //   }
    // ).render(this.paypalRef.nativeElement);

    // this.payPalInt();

  }

  payPalInt() {
    // window.paypal.Buttons(
    //   {
    //     style: {
    //       layout: 'horizontal'
    //     }
    //   }
    // ).render(this.paypalRef.nativeElement);

  }

}
