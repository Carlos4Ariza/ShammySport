import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './componentes/auth/signin/signin.component';
import { SignupComponent } from './componentes/auth/signup/signup.component';
import { HomeComponent } from './componentes/home/home.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { InventarioComponent } from './componentes/inventario/inventario.component';
import { AddEditProductComponent } from './componentes/add-edit-product/add-edit-product.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'carrito', component: CarritoComponent},
  {path: 'producto/:id', component: ProductoComponent},
  {path: 'inventario', component: InventarioComponent},
  {path: 'add', component: AddEditProductComponent},
  {path: 'edit/:id', component: AddEditProductComponent},
  {path: '**', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
