import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filteredOfferedProductsCategory'
})
export class FilteredOfferedProductsCategoryPipe implements PipeTransform {

  transform(dataItems: any, filtercategory: any): any {
    if( filtercategory===undefined) return dataItems;
    else{
      return dataItems.filter(function(item){
        //console.log(item);
        return item.product.category.toLowerCase().includes(filtercategory.toLowerCase());
      });
    }
    
  }

}
