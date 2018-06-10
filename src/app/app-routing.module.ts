import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { PoemComponent } from './poem/poem.component'; 
import { SignInComponent } from './login/sign-in/sign-in.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';



 
const appRoutes: Routes = [
  { path: '', component: PoemComponent },    
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}