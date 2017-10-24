import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  CovalentDataTableModule, CovalentMediaModule, CovalentLoadingModule,
  CovalentNotificationsModule, CovalentLayoutModule, CovalentMenuModule,
  CovalentPagingModule, CovalentSearchModule, CovalentStepsModule,
  CovalentCommonModule, CovalentDialogsModule,
} from '@covalent/core';
import {
  MatButtonModule, MatToolbarModule, MatCardModule,
  CompatibilityModule, MatIconModule,
} from '@angular/material';
import { MainHeaderComponent } from './main-header';
import { SwitchPagesDirective } from './switch-pages';

const FLEX_LAYOUT_MODULES: any[] = [
  FlexLayoutModule,
];

const ANGULAR_MODULES: any[] = [
  FormsModule, ReactiveFormsModule,
];

const COVALENT_MODULES: any[] = [
  CovalentDataTableModule, CovalentMediaModule, CovalentLoadingModule,
  CovalentNotificationsModule, CovalentLayoutModule, CovalentMenuModule,
  CovalentPagingModule, CovalentSearchModule, CovalentStepsModule,
  CovalentCommonModule, CovalentDialogsModule,
];

const MATERIAL_MODULES: any[] = [
  MatButtonModule, CompatibilityModule, MatToolbarModule, MatIconModule,
  MatCardModule
];

@NgModule({
  imports: [
    CommonModule,
    ANGULAR_MODULES,
    FLEX_LAYOUT_MODULES,
    COVALENT_MODULES,
    MATERIAL_MODULES,
  ],
  declarations: [
    MainHeaderComponent,
    SwitchPagesDirective
  ],
  exports: [
    CommonModule,
    ANGULAR_MODULES,
    FLEX_LAYOUT_MODULES,
    COVALENT_MODULES,
    MATERIAL_MODULES,
    MainHeaderComponent,
    SwitchPagesDirective
  ]
})
export class SharedModule {
}
