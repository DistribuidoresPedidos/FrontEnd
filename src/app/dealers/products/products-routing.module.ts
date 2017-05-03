// Angular Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import {ProductsComponent } from './products.component';

{
    path: 'products',
    component : ProductListComponent,
    resolve: {
        dataItems: ProductListResolver
    },
},
{
    path:'products/:id' ,
    component : ProductDetailComponent,
    resolve :{
        product : ProductDetailResolver
    },
},
