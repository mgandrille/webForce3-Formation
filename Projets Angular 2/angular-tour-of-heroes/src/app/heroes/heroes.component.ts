import { Component, OnInit } from '@angular/core';
import { HeroDef } from '../Hero';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../mock-heroes'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  isActivated:boolean = false;

  heroes: HeroDef[] = HEROES;

  constructor() { }

  ngOnInit(): void {
  }

  onNameClick (clikedHero: HeroDef) {
    console.log(`Le héros ${clikedHero.name} a été sélectionné`);
  }

  onHire () {
    console.log('On Embauche !');
    this.isActivated = !this.isActivated;
  }

}
