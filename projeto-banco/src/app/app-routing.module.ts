import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaixaEletronicoComponent } from './caixa-eletronico/caixa-eletronico.component';

const routes: Routes = [
  { path: "", component: CaixaEletronicoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
