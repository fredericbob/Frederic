import { Component, OnInit } from '@angular/core';
import { PieceService } from '../../../../services/manager/piece_en_stock/piece.service';
import { ActivatedRoute } from '@angular/router';
import { AddCompatibiliteModal } from '../modals/add-compatibilite/add-compatibilite.component';
import { AddStockModal } from '../modals/add-stock/add-stock.component';
import { EditCompatibiliteModal } from '../modals/edit-compatibilite/edit-compatibilite.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-piece-details',
  standalone: true,
  imports: [ CommonModule,EditCompatibiliteModal,AddStockModal,AddCompatibiliteModal],
  templateUrl: './piece-details.component.html',
  styleUrl: './piece-details.component.css'
})
export class PieceDetailsComponent implements OnInit {
  compatibilites: any[] = [];
  showEditModal = false;
  showAddStockModal = false;
  showAddCompatModal = false;
  selectedCompatibilite: any = null;
  pieceId: string = '';

  constructor(private route: ActivatedRoute, private pieceService: PieceService) {}

  ngOnInit(): void {
    const pieceId = this.route.snapshot.paramMap.get('id');
    if (pieceId) {
      this.pieceId = pieceId;
      this.loadPiece(pieceId);
    }
  }

  loadPiece(id: string) {
    this.pieceService.getPieceById(id).subscribe(data => {
      this.compatibilites = data;
    });
  }

  openEditModal(compat: any) {
    this.selectedCompatibilite = compat;
    this.showEditModal = true;
  }

  openAddStockModal(compat: any) {
    this.selectedCompatibilite = compat;
    this.showAddStockModal = true;
  }

  openAddCompatibiliteModal() {
    this.showAddCompatModal = true;
  }

  deleteCompat(vehiculeId: string) {
    this.pieceService.deleteCompatibilite(this.pieceId, vehiculeId).subscribe(() => {
      this.loadPiece(this.pieceId);
    });
  }

  refreshAfterModal(refresh: boolean) {
    if (refresh) {
      this.loadPiece(this.pieceId);
    }
    this.showEditModal = false;
    this.showAddStockModal = false;
    this.showAddCompatModal = false;
  }
}

