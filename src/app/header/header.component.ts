import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() darkModeToggle = new EventEmitter<boolean>();
  @Input() isDarkMode = false;
  constructor() { }

  ngOnInit(): void {
  }


  onToggle(e) {
    this.darkModeToggle.emit(e);
  }
}
