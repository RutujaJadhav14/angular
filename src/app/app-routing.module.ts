import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { StockcomponentComponent } from './stockcomponent/stockcomponent.component';
import { DetailcomponentComponent } from './detailcomponent/detailcomponent.component';
const routes: Routes = [
  {path:'',component:HomecomponentComponent},
  {path:'stock',component:StockcomponentComponent},
  {path:'detail/:id',component:DetailcomponentComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

