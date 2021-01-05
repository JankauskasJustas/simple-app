import { JujaSwitchModule } from 'juja-library';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    JujaSwitchModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
