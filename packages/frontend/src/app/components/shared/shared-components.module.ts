import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnderworkComponent } from './underwork/underwork.component';

/**
 * Shared Components Module
 * Exports commonly used components to make them globally available
 */
@NgModule({
  imports: [
    CommonModule,
    UnderworkComponent
  ],
  exports: [
    UnderworkComponent
  ]
})
export class SharedComponentsModule { }