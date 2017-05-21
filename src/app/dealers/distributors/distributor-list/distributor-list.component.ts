import { Component, OnInit } from '@angular/core';
import { Distributor } from '../../../classes/distributor';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Angular2TokenService } from 'angular2-token';
import { DistributorsService } from '../../../services/distributors.service';

@Component({
  selector: 'app-distributor-list',
  templateUrl: './distributor-list.component.html',
  styleUrls: ['./distributor-list.component.scss']
})
export class DistributorListComponent implements OnInit {
  page :number = 1;
  distributors: Distributor[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authToken: Angular2TokenService,
    private distributorsService: DistributorsService,
  ) { }

  ngOnInit() {
    this.distributors = this.route.snapshot.data['distributors'].data;

  }

  getUrl(photoUrl: string) {
    return `url(${photoUrl})`;
  }

  addFavorite(distributor){
    this.distributorsService.addFavorite(distributor.id).subscribe(
          msg => {
            if(msg.msg === 'Favorite removed'){
              var index = this.findIndex(distributor);
              this.distributors[index].favorite = false;
              console.log('¡Removido de tus favoritos!');
            }
            else if(msg.data){
              var index = this.findIndex(distributor);
              this.distributors[index].favorite = true;
              console.log("Se ha añadido a favoritos");
            }
          }
      );
  }

  findIndex(distributor){
    for(var i=0; i<this.distributors.length; i++)
      if(this.distributors[i].id === distributor.id)
        return i;
  }

  

}
