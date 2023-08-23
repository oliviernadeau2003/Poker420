import { Component } from '@angular/core';
import { tr } from '../utils';
import { Joueur } from '../model/joueur';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})

export class ConnexionComponent {

  connexionVisible: boolean = true;
  joueurConnecte: Joueur = new Joueur();

  creationCompte() {
    tr("Création d'un compte");
  }

  connexion() {
    tr("Connexion");
  }

}
