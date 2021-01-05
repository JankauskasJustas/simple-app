import { NgModule } from '@angular/core';
import { UiTestComponent } from './ui-test.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { JujaCheckboxModule, JujaRadioGroupModule, JujaSwitchModule, JujaBtnModule, JujaSpinnerModule, JujaInputModule } from 'juja-library';



@NgModule({
  declarations: [UiTestComponent],
  imports: [
    BrowserModule,
    FormsModule,
    JujaBtnModule,
    JujaCheckboxModule,
    JujaRadioGroupModule,
    JujaSwitchModule,
    JujaSpinnerModule,
    JujaInputModule
  ],
  exports: [UiTestComponent]
})
export class UiTestModule { }
