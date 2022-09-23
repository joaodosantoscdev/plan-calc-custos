import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaixaComponent } from './caixa/caixa.component';
import { DerComponent } from './der/der.component';

const routes: Routes = [
  {
    path: 'caixa',
    component: CaixaComponent
  },
  {
    path: 'der',
    component: DerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
