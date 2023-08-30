import { Injectable } from '@angular/core';
import { urlServeur } from './util';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Joueur } from './modele/joueur';



@Injectable({
  providedIn: 'root'
})
export class Poker420Service {

  constructor(private http: HttpClient) { }

  getJoueurs() {
    let url = urlServeur + "getJoueurs";

    return this.http.get<Joueur[]>(url);
  }

  creationJoueur(j: Joueur) {
    let url = urlServeur + "creationJoueur";

    const params = new HttpParams({
      fromObject: {
        couriel: j.courriel,
        nom: j.nom,
        mdp: j.motDePasse
      }
    });

    return this.http.post<Joueur>(url, params);
  }

}
