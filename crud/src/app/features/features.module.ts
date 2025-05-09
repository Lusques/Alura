import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { BaseLayoutHeaderComponent } from './layouts/base-layout/components/base-layout-header/base-layout-header.component';
import { BaseLayoutFooterComponent } from './layouts/base-layout/components/base-layout-footer/base-layout-footer.component';
import { RouterModule } from '@angular/router';
import { NewQuotePageComponent } from './pages/dashboard/new-quote-page/new-quote-page.component';
import { FormInputComponent } from '../shared/components/forms/form-input/form-input.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    BaseLayoutComponent,
    BaseLayoutHeaderComponent,
    BaseLayoutFooterComponent,
    NewQuotePageComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [BaseLayoutComponent],
})
export class FeaturesModule {}
