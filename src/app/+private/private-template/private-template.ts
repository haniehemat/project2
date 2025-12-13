import { Component, Inject } from '@angular/core';
import { inject } from '@angular/core/testing';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-private-template',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './private-template.html',
  styleUrl: './private-template.scss',
})
export class PrivateTemplate {
  
 router=Inject(Router);
logoff() {
sessionStorage.clear();
localStorage.removeItem('token');
this.router.navigateByUrl('/login');
}
}
