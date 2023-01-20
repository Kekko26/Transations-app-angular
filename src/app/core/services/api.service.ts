import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Transazione, TransazioneNOID } from 'src/app/shared/models/transation.type';
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  transactionsSubject = new BehaviorSubject<Transazione[]>([])


  getAllTransazioni(){

    return this.http.get<Transazione[]>(`${environment.URL}/api/transazioni`)
  }

  addTransazione(body:Transazione){

    return this.http.post<Transazione>(`${environment.URL}/api/transazioni`, body)
  }

  deleteTransazione(id:number){

    return this.http.delete<void>(`${environment.URL}/api/transazioni/${id}`)
  }

  editTransazione(id:number, body:TransazioneNOID){

    return this.http.put<Transazione>(`${environment.URL}/api/transazioni/${id}`, body)
  }
  
}
