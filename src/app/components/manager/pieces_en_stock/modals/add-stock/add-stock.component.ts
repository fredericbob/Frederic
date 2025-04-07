import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PieceService } from '../../../../../services/manager/piece_en_stock/piece.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-stock-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-stock.component.html',
  styleUrl: './add-stock.component.css'
})
export class AddStockModal {
  @Input() pieceId!: string;
  @Input() vehiculeId!: string;
  @Output() close = new EventEmitter<boolean>();

  quantiteToAdd: number = 1;

  constructor(private pieceService: PieceService) {}

  addStock() {
    this.pieceService.addStock({
      pieceId: this.pieceId,
      vehiculeId: this.vehiculeId,
      quantite: this.quantiteToAdd,
    }).subscribe(() => {
      this.close.emit(true);
    });
  }

  closeModal() {
    this.close.emit(false);
  }
}
