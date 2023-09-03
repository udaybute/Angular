import { Component, ElementRef, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { NavigationItem } from '../models/models';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  @ViewChild('modalTitle') modalTitle !: ElementRef;
  @ViewChild('container', {read: ViewContainerRef, static:true})
  container !: ViewContainerRef;
 
  navigationList : NavigationItem[] = [
    {
      category: "Electronics",
      subcategories : ["mobiles","laptops"]
    },
    {
      category: "furniture",
      subcategories : ["chairs","tables"]
    }
  ];

  constructor(){}
 
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  openModal(name: string)
  {
    this.container.clear();

    let componentType !: Type<any>;
    if(name === 'login'){
      componentType = LoginComponent;
      this.modalTitle.nativeElement.textContent = "Enter Login Information";
    }
    if(name === 'register'){
       componentType = RegisterComponent;
       this.modalTitle.nativeElement.textContent = "Enter Register Information";
    }
    this.container.createComponent(componentType);
  }
   

}
