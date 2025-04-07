import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PieceService } from '../../../../../services/manager/piece_en_stock/piece.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-compatibilite-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-compatibilite.component.html',
  styleUrl: './add-compatibilite.component.css'
})
export class AddCompatibiliteModal implements OnInit {
  @Input() pieceId!: string;
  @Output() close = new EventEmitter<boolean>();

  vehicules: any[] = [];

  selectedVehicule: string = '';
  prix: number = 0;
  quantite_stock: number = 0;
  seuil_alerte: number = 0;

  constructor(private pieceService: PieceService) {}

  ngOnInit(): void {
    this.pieceService.getVehicules().subscribe({
      next: (vehicules) => {
        this.vehicules = vehicules;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des véhicules :', err);
      }
    });
  }

  addCompatibilite() {
    if (!this.selectedVehicule) return;

    const data = {
      vehiculeId: this.selectedVehicule,
      prix: this.prix,
      quantite_stock: this.quantite_stock,
      seuil_alerte: this.seuil_alerte
    };

    this.pieceService.addCompatibilite(this.pieceId, data).subscribe(() => {
      this.close.emit(true);
    });
  }

  closeModal() {
    this.close.emit(false);
  }
}
