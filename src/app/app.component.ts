import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tabs = [
    {
      url: '/dashboard',
      label: 'Dashboard'
    },
    {
      url: '/heroes',
      label: 'Heroes'
    },
  ];


}
