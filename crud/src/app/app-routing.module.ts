import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './features/layouts/base-layout/base-layout.component';
import { NewQuotePageComponent } from './features/pages/dashboard/new-quote-page/new-quote-page.component';
import { QuoteBoardPageComponent } from './features/pages/dashboard/quote-board-page/quote-board-page.component';

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      { path: 'dashboard/new-quote', component: NewQuotePageComponent },
      { path: 'dashboard/quote-board', component: QuoteBoardPageComponent },
      { path: '**', redirectTo: 'dashboard/quote-board', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
