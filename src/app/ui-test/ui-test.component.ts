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
  darkMode: boolean = false;
  constructor() { }

  changeType(type: string) {
    this.type = type;
  }
  onChanges(e) {
    this.spinnerType = e;
  }

  onDarkModeChange(e) {
    this.darkMode = e;

    if (this.darkMode) {
      document.body.classList.toggle("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }

  onInputChange(e) {
    console.log(e)
  }

}
