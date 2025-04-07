import { Component, OnInit } from '@angular/core';
import { PieceService } from '../../../../services/manager/piece_en_stock/piece.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-piece-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './piece-list.component.html',
  styleUrl: './piece-list.component.css'
})
export class PieceListComponent implements OnInit {
  pieces: any[] = [];

  constructor(private pieceService: PieceService, private router: Router) {}

  ngOnInit(): void {
    this.pieceService.getAllPieces().subscribe(data => {
      this.pieces = data.map(piece => ({
        ...piece
        // totalStock: piece.compatibilites.reduce((acc: number, c: any) => acc + c.quantite_stock, 0)
      }));
    });
  }

  goToDetails(pieceId: string) {
    this.router.navigate(['manager/liste-pieces/pieces', pieceId]);
  }
}
