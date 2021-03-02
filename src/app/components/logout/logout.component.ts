import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public authService: AuthenticationService,
            private _itemService:ProductService,
            private msg:MessengerService,
            private router:Router) { }

  ngOnInit(): void {
    this.authService.removeRole();
    this.authService.removeToken();
    this._itemService.removeAllProductFromCart();
    this.msg.isLoggedIn$.next(false);
    this.msg.isWelComeName$.next('');
    this.msg.updateCartCount(0);
    window.location.href="http://www.mirajfoods.ca/home";


  }

}
