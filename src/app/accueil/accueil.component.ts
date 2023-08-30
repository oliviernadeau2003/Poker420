import { Component, EventEmitter, Output } from '@angular/core';
import { Joueur } from '../modele/joueur';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})

export class AccueilComponent {

  @Output() quitter = new EventEmitter<Joueur>();

  visible = false;
  joueurConnecte: Joueur = new Joueur();

  quitterAccueil() {
    this.visible = false;
    this.quitter.emit(this.joueurConnecte);
  }

  onConnexionReussie(j: Joueur) {
    this.joueurConnecte = j;
    this.visible = true;
  }

  onCreerPartie() {

  }
}
