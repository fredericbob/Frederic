import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VehiculeService } from '../../../services/vehicule/vehicule.service';
import { RendezvousService } from '../../../services/rendez_vous/rendezvous.service';

@Component({
  selector: 'app-vehicule',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './vehicule.component.html',
  styleUrl: './vehicule.component.css'
})
export class VehiculeComponent {

  vehicule = {
    marque: '',
    modele: '',
    annee: null,
    type_vehicule:'',
    type_moteur: '',
  };
  typevehicule :any[]=[];
  messageSuccess = '';
  messageError = '';

  constructor(private vehiculeService: VehiculeService ) {}

  ngOnInit() {
    this.loadTypesVehicule();
  }
  onSubmit() {
    this.vehiculeService.addvehicule(this.vehicule).subscribe(
      response => {
        this.messageSuccess = 'Véhicule ajouté avec succès ✅';
        this.messageError = '';
      },
      error => {
        console.error('Erreur lors de la création du vehicule', error);
        this.messageError = 'Erreur lors de l\'ajout du véhicule ❌';
        this.messageSuccess = '';
      }
    );
  }


  loadTypesVehicule() {
    console.log('Chargement des types de véhicules...');
    this.vehiculeService.getTypevehicule().subscribe(
      (data) => {
        console.log('Réponse API complète :', data);
        this.typevehicule = data?.typesVehicules || data;
      },
      (error) => {
        console.error('Erreur API', error);
      }
    );
  }

}
