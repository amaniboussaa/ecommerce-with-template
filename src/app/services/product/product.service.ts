import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getAllProducts(){
    console.log(Constant.API_END_POINT+Constant.METHODS.GET_ALL_PRODUCTS);
    return this.http.get(Constant.API_END_POINT+Constant.METHODS.GET_ALL_PRODUCTS);
  }
  getAllCategories(){
    return this.http.get(Constant.API_END_POINT+Constant.METHODS.GET_ALL_CATEGORIES);
  }
  createProduct(productObj:any){
    return this.http.post(Constant.API_END_POINT+Constant.METHODS.CREATE_PRODUCT,productObj);
  }
  updateProduct(productObj:any){
    return this.http.put(Constant.API_END_POINT+Constant.METHODS.UPDATE_PRODUCT,productObj);
  }
  deleteProduct(productId:any){
    return this.http.delete(Constant.API_END_POINT+Constant.METHODS.DELETE_PRODUCT + '/' + productId);
  }


}
