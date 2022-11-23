import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddOpsComponent } from './add-ops/add-ops.component';
import { SubOpsComponent } from './sub-ops/sub-ops.component';
import { MulOpsComponent } from './mul-ops/mul-ops.component';
import { DiviOpsComponent } from './divi-ops/divi-ops.component';

const routes: Routes = [
  { path : 'add-ops', component : AddOpsComponent },
  { path : 'sub-ops', component : SubOpsComponent },
  { path : 'mul-ops', component : MulOpsComponent },
  { path : 'divi-ops', component : DiviOpsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ AddOpsComponent, SubOpsComponent, MulOpsComponent, DiviOpsComponent ]