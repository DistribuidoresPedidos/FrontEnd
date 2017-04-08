import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterOfferedProductsPrice'
})
export class FilterOfferedProductsPricePipe implements PipeTransform {

  transform(dataItems: any, filterprice: any): any {
    if( filterprice===undefined) return dataItems;
    else{
      return dataItems.filter(function(item){
        //console.log(item.price);
        return item.price-filterprice <5; //hard bound needs to be improved 
      });
    }
    
  }

}
