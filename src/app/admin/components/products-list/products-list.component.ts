import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];
  
  constructor(
    private productService: ProductsService ) {

     }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService.getAllProducts()
    .subscribe(products=>{
      this.products = products
      this.createProduct();
      console.log(products)
    })
  }

  deleteProduct (product: any) {
    this.productService.deleteProduct(product.id)
    .subscribe(rta =>{
      console.log(rta);
      this.deleteRow(product)
    })
  }

  deleteRow (product: any) {
    const index = this.products.indexOf(product);
    this.products.splice(index, 1)
    this.products = [...this.products]
  }

  createProduct () {
    const products = [
      // {
      //   id: '1',
      //   image: 'assets/images/camiseta.png',
      //   title: 'Camiseta',
      //   price: 80000,
      //   description: 'bla bla bla bla bla'
      // },
      // {
      //   id: '2',
      //   image: 'assets/images/hoodie.png',
      //   title: 'Hoodie',
      //   price: 80000,
      //   description: 'bla bla bla bla bla'
      // },
      // {
      //   id: '3',
      //   image: 'assets/images/mug.png',
      //   title: 'Mug',
      //   price: 80000,
      //   description: 'bla bla bla bla bla'
      // },
      // {
      //   id: '4',
      //   image: 'assets/images/pin.png',
      //   title: 'Pin',
      //   price: 80000,
      //   description: 'bla bla bla bla bla'
      // },
      // {
      //   id: '5',
      //   image: 'assets/images/stickers1.png',
      //   title: 'Stickers',
      //   price: 80000,
      //   description: 'bla bla bla bla bla'
      // },
      // {
      //   id: '6',
      //   image: 'assets/images/stickers2.png',
      //   title: 'Stickers',
      //   price: 80000,
      //   description: 'bla bla bla bla bla'
      // },
      {
        id: '75772',
        title: 'Producto ruta mod 4',
        image: 'assets/images/mug.png',
        price: 467370,
        description: 'drjjrj hshshs'
      }
    ];
    for (let i = 0; i < 1; i++) {
      const newProduct = products[i]
      this.productService.createProduct(newProduct).subscribe(product=>{
      console.log(product);
    });
    }
  }
}
