import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL = `${environment.apiURL}/ManufacturerAPI`

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  

  getAllData() {
    return this.http.post<any>(`${URL}/GetAll`,'');
  }

  addnewData(data: any) {
    return this.http.post(`${URL}/Post`, data);
  }
}
