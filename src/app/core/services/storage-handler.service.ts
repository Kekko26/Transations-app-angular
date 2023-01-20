import { Injectable } from '@angular/core';
import { Subject,  BehaviorSubject } from "rxjs";
import { Transazione } from 'src/app/shared/models/transation.type';

@Injectable({
  providedIn: 'root'
})
export class StorageHandlerService {

  constructor() {

  }

  storageSubject = new BehaviorSubject<Transazione[]>([...JSON.parse(localStorage.getItem('movimenti')!)])

  transations:Transazione[] = this.storageSubject.value
  
}
