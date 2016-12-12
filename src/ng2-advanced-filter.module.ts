import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NG2_ADVANCED_FILTER_DIRECTIVES } from './ng2-advanced-filter.directives';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ...NG2_ADVANCED_FILTER_DIRECTIVES
  ],
  exports: [
    ...NG2_ADVANCED_FILTER_DIRECTIVES
  ]
})
export class Ng2AdvancedFilterModule {
}