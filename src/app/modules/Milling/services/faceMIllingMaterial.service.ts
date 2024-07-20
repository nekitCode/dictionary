import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MaterialDetails } from '../models/material';

@Injectable({
  providedIn: 'root',
})
export class FaceMillingMaterialService {
  constructor(private http: HttpClient) {}

  getMaterialData(): Observable<MaterialDetails[]> {
    return this.http.get<MaterialDetails[]>('assetsData/materialsData.json');
  }
}
