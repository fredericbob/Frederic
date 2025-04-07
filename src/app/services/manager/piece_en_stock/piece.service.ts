import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PieceService {
  private apiUrl = 'http://localhost:5000/pieces';

  constructor(private http: HttpClient) {}

  getAllPieces() {
    return this.http.get<any[]>(this.apiUrl);
  }

  getPieceById(id: string) {
    return this.http.get<any>(`${this.apiUrl}/${id}/compatibilites`);
  }

  updateCompatibilite(data: any) {
    return this.http.put(`${this.apiUrl}/compatibilites/update`, data);
  }

  addStock(data: any) {
    return this.http.patch(`${this.apiUrl}/compatibilites/add-stock`, data);
  }

  deleteCompatibilite(pieceId: string, vehiculeId: string) {
    return this.http.delete(`${this.apiUrl}/${pieceId}/compatibilites/${vehiculeId}`);
  }

  addCompatibilite(pieceId: string, data: any) {
    return this.http.post(`${this.apiUrl}/compatibilites/add`, data);
  }

  getVehicules() {
    return this.http.get<any[]>(`${this.apiUrl}/compatibilites/add/vehicules`);
  }

}
