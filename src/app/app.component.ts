import { Component, OnInit } from '@angular/core';
import { heroList } from './heroes/list';
import { Role, valueOf } from './heroes/heroes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  hero = '';
  heroList = heroList;
  dinamicHeroList = this.heroList;

  ngOnInit(): void {
    console.log(this.heroList);
  }

  showName(name: string) {
    console.log(name)
  }

  filterByRole(role: string) {
    if (role === '') {
      this.dinamicHeroList = this.heroList;
      return;
    }
    this.dinamicHeroList = this.heroList.filter((hero) => {
      return hero.roles.includes(valueOf(role) as Role)
    });
  }
}
