import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonSideNavComponent } from './common-side-nav';

@NgModule({
  imports: [CommonModule, CommonSideNavComponent],
  exports: [CommonSideNavComponent]
})
export class CommonSideNavModule {}