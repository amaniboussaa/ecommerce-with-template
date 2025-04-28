import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-products',
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  productObj: any = {
    productId: 0,
    productSku: '',
    productName: '',
    productPrice: 0,
    productShortName: '',
    productDescription: '',
    createdDate: new Date(),
    deliveryTimeSpan: '',
    categoryId: 0,
    productImageUrl: '',
  };

  categoryList: any[] = [];
  productsList: any[] = [];

  constructor(private productSrv: ProductService) {}

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategories();
  }

  getAllProducts() {
    this.productSrv.getAllProducts().subscribe((res: any) => {
      this.productsList = res.data;
    });
  }
  getAllCategories() {
    this.productSrv.getAllCategories().subscribe((res: any) => {
      this.categoryList = res.data;
    });
  }
  onSaveProduct() {
    this.productSrv.createProduct(this.productObj).subscribe((res: any) => {
      if (res.statusCode == 200) {
        alert('Product created successfully');
        this.getAllProducts();
      } else {
        alert(res.message);
      }
    });
  }
  onEditProduct(product: any) {
    this.productObj = product;
    this.openSidePanel();
  }
  onDeleteProduct(product: any) {
    const isDelete = confirm('Are you sure you want to delete this product?');
    if (isDelete) {
      this.productSrv.deleteProduct(product.productId).subscribe((res: any) => {
        if (res.statusCode == 200) {
          alert('Product deleted successfully');
          this.getAllProducts();
        } else {
          alert(res.message);
        }
      });
    }
  }
  onUpdateProduct() {
    this.productSrv.updateProduct(this.productObj).subscribe((res: any) => {
      if (res.statusCode == 200) {
        alert('Product updated successfully');
        this.getAllProducts();
      } else {
        alert(res.message);
      }
    });
  }

  isSidePanelVisible = false;
  openSidePanel() {
    this.isSidePanelVisible = true;
  }
  closeSidePanel() {
    this.isSidePanelVisible = false;
  }
}
