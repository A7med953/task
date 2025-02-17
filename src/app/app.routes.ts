import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetComponent } from './forget/forget.component';
import { LayoutComponent } from './layout/layout.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'register',
        component:RegisterComponent
    },
    {
        path:'forget',
        component:ForgetComponent
    },
    {
        path:'admin',
        component:AdminComponent
    }

];
