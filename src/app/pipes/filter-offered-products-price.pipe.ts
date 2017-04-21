import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterOfferedProductsPrice'
})
export class FilterOfferedProductsPricePipe implements PipeTransform {

  transform(dataItems: any, filterprice: any): any {
    return dataItems.filter(function(item){
      return item.price>filterprice[0] && item.price<filterprice[1];
    });
  }

}
