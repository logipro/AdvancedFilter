import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NG2_ADVANCED_FILTER_DIRECTIVES } from './ng2-advanced-filter.directives';
import { CellComponent } from './ng2-advanced-filter/components/cell/cell.component';
import { FilterComponent } from './ng2-advanced-filter/components/filter/filter.component';
import { PagerComponent } from './ng2-advanced-filter/components/pager/pager.component';
import { TitleComponent } from './ng2-advanced-filter/components/title/title.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CellComponent,
    FilterComponent,
    PagerComponent,
    TitleComponent,
    ...NG2_ADVANCED_FILTER_DIRECTIVES
  ],
  exports: [
    ...NG2_ADVANCED_FILTER_DIRECTIVES
  ]
})
export class Ng2AdvancedFilterModule {
}