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
  selectedHero: HeroDef;
  isHire: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onNameClick (clikedHero: HeroDef) {
    console.log(`Le héros ${clikedHero.name} a été sélectionné`);
    this.selectedHero = clikedHero;
  }

  onActif () {
    console.log('Activer les héros...');
    this.isActivated = !this.isActivated;
  }

  onHire () {
    this.isHire = !this.isHire;
    if (this.isHire === true) {
      console.log('On Embauche !');
    } else {
      console.log('On Vire !');
    }
  }

}
