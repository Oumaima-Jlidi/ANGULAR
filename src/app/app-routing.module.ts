import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
import { AppComponent } from './app.component';
const routes: Routes = [
  {path: "user", component : ListUserComponent},
  {path: "home", component : AppComponent},

  { path: "", redirectTo: "home", pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
