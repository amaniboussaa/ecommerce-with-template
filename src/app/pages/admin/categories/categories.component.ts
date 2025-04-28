import { Component } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { CommonModule } from '@angular/common';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-categories',
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  products$ : Observable<any>;

  constructor(private productSrv: ProductService) {
    this.products$ = this.productSrv.getAllCategories().pipe(
      map((res: any) => {
        return res.data;
      })
    );
   }
  getAllCategories() {

  }
}
