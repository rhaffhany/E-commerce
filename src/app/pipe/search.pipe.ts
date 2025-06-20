import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products: any[], term:string): any[] {
    return products.filter( (product) => product.title.toLowerCase().includes(term) );
  }

}
