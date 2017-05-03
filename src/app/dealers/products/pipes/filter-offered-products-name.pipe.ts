import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterOfferedProductsName'
})
export class FilterOfferedProductsNamePipe implements PipeTransform {

  transform(dataItems: any, filtername: any): any {
    if (filtername === "") {
      return dataItems;
    } else {
      return dataItems.filter(function(item){
        return item.product.name.toLowerCase().includes(filtername.toLowerCase());
      });
    }
  }

}
