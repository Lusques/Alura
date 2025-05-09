import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { BaseLayoutHeaderComponent } from './layouts/base-layout/components/base-layout-header/base-layout-header.component';
import { BaseLayoutFooterComponent } from './layouts/base-layout/components/base-layout-footer/base-layout-footer.component';

@NgModule({
  declarations: [BaseLayoutComponent, BaseLayoutHeaderComponent, BaseLayoutFooterComponent],
  imports: [CommonModule],
  exports: [BaseLayoutComponent],
})
export class FeaturesModule {}
