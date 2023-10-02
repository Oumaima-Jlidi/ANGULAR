import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { AddUserComponent } from './add-user/add-user.component';
const routes: Routes = [
  {path: "users", component : ListUserComponent},
  {path:"home",component:ContentComponent},
  
  {path:"add-user",component:AddUserComponent},

  { path: "", redirectTo: "home", pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
