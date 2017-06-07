import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.heroes = HEROES;
    this.topheroes = this.heroes.slice(1, 5);
  }

  heroes: Hero[] = [];
  topheroes: Hero[] = [];

}
