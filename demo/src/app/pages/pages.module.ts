import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing }       from './pages.routing';

import { DemoComponent } from './demo';
import { DocumentationComponent } from './documentation';
import { HomeComponent } from './home';
import { Ng2SmartTableModule } from '../../../../src/ng2-advanced-filter.module';
import { ScrollPositionDirective } from '../theme/directives/scrollPosition.directive';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    routing
  ],
  declarations: [
    DemoComponent, 
    DocumentationComponent, 
    HomeComponent,
    ScrollPositionDirective
  ]
})
export class PagesModule {
}