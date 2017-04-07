import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Distributor } from '../classes/distributor';

@Injectable()
export class DistributorService {
  private distributorListUrl = 'http://localhost:3000/distributors';
  private distributorById = 'http://localhost:3000/distributors';

  private distributorsMock = [
    {
      id: 1,
      name: 'mock1',
      email: 'mock1@mail.com',
      phoneNumber: '1234567',
      photo: 'https://static.pexels.com/photos/201688/pexels-photo-201688.jpeg',
      latitude: 61,
      longitude: 22
    },
    {
      id: 2,
      name: 'mock2',
      email: 'mock2@mail.com',
      phoneNumber: '1234567',
      photo: 'https://static.pexels.com/photos/106144/rubber-duck-bath-duck-toys-costume-106144.jpeg',
      latitude: 61,
      longitude: 22
    },
    {
      id: 3,
      name: 'mock3',
      email: 'mock3@mail.com',
      phoneNumber: '1234567',
      photo: 'https://static.pexels.com/photos/160992/bath-splashing-ducks-joy-160992.jpeg',
      latitude: 61,
      longitude: 22
    },
    {
      id: 4,
      name: 'mock4',
      email: 'mock4@mail.com',
      phoneNumber: '1234567',
      photo: 'https://static.pexels.com/photos/3348/dirty-horror-duck.jpg',
      latitude: 61,
      longitude: 22
    },
    {
      id: 5,
      name: 'mock5',
      email: 'mock5@mail.com',
      phoneNumber: '1234567',
      photo: 'https://static.pexels.com/photos/132464/pexels-photo-132464.jpeg',
      latitude: 61,
      longitude: 22
    },
    {
      id: 6,
      name: 'mock6',
      email: 'mock6@mail.com',
      phoneNumber: '1234567',
      photo: 'https://static.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg',
      latitude: 61,
      longitude: 22
    }
  ];

  constructor(private http: Http) { }


  getDistributors() {
    //return this.http.get(this.distributorListUrl).map((response: Response) => response.json());
    return this.distributorsMock;
  }

  getDistributorById(id: number) {
   //return this.http.get(this.distributorById).map((response: Response) => response.json());
   return this.distributorsMock.find(distributor => distributor.id === id);
  }

}
