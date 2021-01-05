import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-test',
  templateUrl: './ui-test.component.html',
  styleUrls: ['./ui-test.component.scss']
})
export class UiTestComponent {
  title = 'juja-app';
  type = '';
  selectedValue: any;
  spinnerType: 'multi-bubble' | 'dots' | 'circle' = 'circle';
  darkMode: boolean = true;
  constructor() { }

  changeType(type: string) {
    this.type = type;
  }
  onChanges(e) {
    this.spinnerType = e;
  }

  onDarkModeChange(e: boolean) {
    console.log(e);
    this.darkMode = e;
  }

  onInputChange(e) {
    console.log(e)
  }

}
