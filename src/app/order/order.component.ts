import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  selectPaymentMethodName = '';
   
  selectPaymentMethod = new FormControl('0');

  constructor() { }

  ngOnInit(): void { 

    this.selectPaymentMethod.valueChanges.subscribe((res:any)=>{
        if(res === '0') this.selectPaymentMethodName = '';
        else this.selectPaymentMethodName = res.toString();
    });
  }

}
