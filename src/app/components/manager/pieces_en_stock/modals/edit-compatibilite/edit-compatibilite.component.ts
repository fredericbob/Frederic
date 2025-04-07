import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PieceService } from '../../../../../services/manager/piece_en_stock/piece.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-compatibilite-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-compatibilite.component.html',
  styleUrl: './edit-compatibilite.component.css'
})
export class EditCompatibiliteModal {
  @Input() compatibilite: any;
  @Output() close = new EventEmitter<boolean>();

  constructor(private pieceService: PieceService) {}

  save() {
    this.pieceService.updateCompatibilite(this.compatibilite).subscribe(() => {
      this.close.emit(true);
    });
  }

  closeModal() {
    this.close.emit(false);
  }
}
