import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { DistributorService } from '../services/distributor.service';
import * as NodeGeocoder from 'node-geocoder';

@Injectable()
export class DistributorAddressResolver implements Resolve<any> {

  options = {
    provider: 'google',
    httpAdapter: 'https',
    apiKey: 'AIzaSyCzikUZvUagG1tusaTczWY7AR8qtPyISFs',
    formatter: null
  };
  geocoder = NodeGeocoder(this.options);

  constructor(
    private distributorService: DistributorService
  ) { }

  resolve(route: ActivatedRouteSnapshot): String {
    const address = 'AQUI SE CALCULA LA DIRECCION HUEHUE';
    return address;
  }
}




/*getAddress() {
  this.geocoder.reverse({ lat: this.distributor.latitude, lon: this.distributor.longitude }, function (err, res) {
    this.distributorAddres = res[0].formattedAddress;
  });
}*/
