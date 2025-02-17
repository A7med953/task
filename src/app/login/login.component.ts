import { CommonModule } from '@angular/common';
import { Component, inject} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AuthService } from '../Services/auth.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule,RouterModule,TranslateModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
showPassword: boolean = false;
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  apiLoginObj:any={
    "EmailId": "",
    "Password": ""
  }
  router=inject(Router);
  http=inject(HttpClient)
  onLogin(){
    


  this.http.post("/api/UserApp/login",this.apiLoginObj).subscribe((res:any)=>{
   
    localStorage.setItem("angular18User",res.data.userId)
    this.router.navigateByUrl("admin")


  },
  error=>{
   
    alert("Wrong Credentials")
  })
   }

}