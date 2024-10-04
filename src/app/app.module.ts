import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderComponent } from './componentes/header/header.component';
import { SigninComponent } from './componentes/auth/signin/signin.component';
import { SignupComponent } from './componentes/auth/signup/signup.component';
import { TipoproductoPipe } from './tipoproducto.pipe';
import { DeslizadorComponent } from './componentes/home/deslizador/deslizador.component';
import { register } from 'swiper/element/bundle';
import { ProductListComponent } from './componentes/product-list/product-list.component';
import { ProductoItemComponent } from './componentes/producto-item/producto-item.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ListProductComponent } from './componentes/list-product/list-product.component';
import { AddEditProductComponent } from './componentes/add-edit-product/add-edit-product.component';
import { InventarioComponent } from './componentes/inventario/inventario.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';

register()

@NgModule({ declarations: [
        AppComponent,
        HomeComponent,
        FooterComponent,
        HeaderComponent,
        SigninComponent,
        SignupComponent,
        TipoproductoPipe,
        DeslizadorComponent,
        ProductListComponent,
        ProductoItemComponent,
        ProductoComponent,
        CarritoComponent,
        NavbarComponent,
        ListProductComponent,
        AddEditProductComponent,
        InventarioComponent,
        SpinnerComponent,
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA], 
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            timeOut: 4000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true
        })],
        providers: [
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule { }
