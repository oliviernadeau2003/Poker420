import { Component, EventEmitter, Output } from '@angular/core';
import { tr } from './../util';
import { Joueur } from './../modele/joueur';
import { Poker420Service } from '../poker420.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {

  connexionVisible = true;
  creerCompteVisible = false;

  joueurConnecte: Joueur = new Joueur();
  joueurCandidat: Joueur = new Joueur();
  confirmation = "";

  @Output() connexionReussie = new EventEmitter<Joueur>;

  constructor(private pk420Srv: Poker420Service) { }

  creationCompte() {
    this.connexionVisible = false;
    this.creerCompteVisible = true;
  }

  connexion() {
    if (this.joueurCandidat.nom.length > 0) {
      //this.pk420Srv.connexion();
      this.joueurConnecte = this.joueurCandidat;
      this.connexionReussie.emit(this.joueurConnecte);
    }
  }

  annulerCreationCompte() {
    this.connexionVisible = true;
    this.creerCompteVisible = false;

  }

  validerCreationCompte() {
    tr("Validation de " + this.joueurCandidat.nom)
    return true;
  }

  afficherTousLesJoueurs() {
    this.pk420Srv.getJoueurs().subscribe(
      tabJ => {
        tr(" il y a " + tabJ.length + " joeuurs ds la BD", true);
      }
    );

  }

}
