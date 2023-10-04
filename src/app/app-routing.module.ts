import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { EditComponent } from './edit/edit.component';
const routes: Routes = [
  {path: "users", component : ListUserComponent,children:[{path:"add-user",component:AddUserComponent}]},
  {path:"home",component:ContentComponent},
  {path:"edit/:id",component:EditComponent},

  


  { path: "", redirectTo: "home", pathMatch: "full" },
   {path:"**",component:ErrorPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
