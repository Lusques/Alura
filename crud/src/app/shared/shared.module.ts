import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInputComponent } from './components/forms/form-input/form-input.component';
import { FormsModule } from '@angular/forms';
import { FormTextareaComponent } from './components/forms/form-textarea/form-textarea.component';
import { BaseButtonComponent } from './components/buttons/base-button/base-button.component';

@NgModule({
  declarations: [
    FormInputComponent,
    FormTextareaComponent,
    BaseButtonComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [FormInputComponent, FormTextareaComponent, BaseButtonComponent],
})
export class SharedModule {}
