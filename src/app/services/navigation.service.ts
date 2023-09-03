import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Category } from '../models/models';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  baseUrl = "https://localhost:7125/api/Shopping/";

  constructor(private http : HttpClient)  {}


  getCategoryList()
  {
    let url =this.baseUrl + 'GetCategoryList';
    return this.http.get<any[]>(url).pipe(
      map((categories: any[])=>{
        categories.map((category)=>{
          let mappedCategory : Category =  {
            id: category.id,
            category: category.category,
            subCategory: category.subCategory,
            subcategory: ''
          };
          return mappedCategory;
        });
       
      })
    )

  }

 

}
