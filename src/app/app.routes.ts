import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/Order/product-list/product-list.component';
import { OrderMasterComponent } from './components/Order/order-master/order-master.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponentComponent } from './components/not-found-component/not-found-component.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { ProductDetailsComponent } from './components/Order/product-details/product-details.component';
import { authGuard } from './Guards/auth.guard';
import { AddProductComponent } from './components/add-product/add-product.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { OverviewComponent } from './components/over-view/over-view.component';
import { EventsComponent } from './components/events/events.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './contact/contact.component';


export const routes: Routes = [
    { path: '', redirectTo: '/Order', pathMatch: 'full' },
    { path: 'Home', component: HomeComponent },
    { path: 'Home', component: SidebarComponent },
    { path: 'overview', component: OverviewComponent },
    { path: 'events', component: EventsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'Header', component: HeaderComponent },
    { path: 'Products', component: ProductListComponent },
    { path: 'products/:pid', component: ProductDetailsComponent },
    { path: 'Products/product/add', component: AddProductComponent },
    { path: 'Order', component: OrderMasterComponent, canActivate: [authGuard] },
    { path: 'cart', component: CartComponent },
    { path: 'cart', component: SidebarComponent },

    {
        path: 'User',
        loadChildren: () =>
            import('./components/user-module/user-module.module').then(m => m.UserModuleModule)
    },

    { path: 'Login', component: UserLoginComponent },
    { path: 'Register', component: UserRegisterComponent },
    { path: 'Logout', component: UserLoginComponent },
    { path: '**', component: NotFoundComponentComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],


})

export class AppRoutingModule {

}
