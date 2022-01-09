import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
    ) { 
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params)=>{  
      const id = params['id'];
      this.fetchProduct(id);
    })
  }
  fetchProduct(id: string){
    this.productsService.getProduct(id).subscribe(product => {
      this.product = product})
  }

  createProduct () {
    const newProduct: Product = {
      id: '7772',
      title: 'Producto ruta mod 4',
      image: 'assets/images/mug.png',
      price: 467370,
      description: 'drjjrj hshshs'
    };

    this.productsService.createProduct(newProduct).subscribe(product=>{
      console.log(product);
    });
  }

  updateProduct () {
    const updateProduct: Partial<Product> = {
      title: 'La taza de platzi hhm',
      image: 'assets/images/mug.png',
      price: 555555};

      this.productsService.updateProduct('7772',updateProduct).subscribe(product=>{
        console.log(product);
      })
    };
  
  deleteProduct () {
    const id='7772'
    this.productsService.deleteProduct(id).subscribe(rta=>{
      console.log(rta)
    })
  }
}
