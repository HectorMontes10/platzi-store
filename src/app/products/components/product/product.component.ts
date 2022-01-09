import { 
    Component,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    SimpleChanges,
    SimpleChange,
    OnInit,
    DoCheck,
    OnDestroy} from '@angular/core';

import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnChanges, OnInit, DoCheck, OnDestroy {

  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();
  
  today = new Date();

  constructor() {
      console.log("1. Este es constructor")
  }
  
  ngOnChanges(changes: SimpleChanges) {
      console.log('2. Este es ngOnChanges')
      console.log(changes)
  }
  
  ngOnInit() {
      console.log('3. Este es OnInit')
  }

  ngDoCheck(){
      console.log("4. Este es DoCheck")
  }

  ngOnDestroy() {
      console.log("5. Este es OnDestroy")
  }

  addCart() {
      console.log('Añadir al carrito');
      this.productClicked.emit(this.product.id) 
  }

}