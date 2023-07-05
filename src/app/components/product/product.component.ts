import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { API_CONFIG } from 'src/app/config/api.config';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  products = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,]

  ELEMENT_DATA: Product[] = []
  constructor(
    private http: HttpClient
    ){}

    ngAfterViewInit() {
      this.getAll()
    }

    getAll(){
      this.http.get<Product[]>(`${API_CONFIG.baseUrl}products`).subscribe(response => {
        response
        this.ELEMENT_DATA = response
        
        console.log(response)
      })
    }
}
