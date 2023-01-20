import { Component, OnInit, Input} from '@angular/core';
import { StorageHandlerService } from 'src/app/core/services/storage-handler.service';
import { Transazione } from 'src/app/shared/models/transation.type';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  constructor(public storageService:StorageHandlerService) { }

  ngOnInit(): void {
    this.storageService.storageSubject.subscribe(val => {
      if(val)
      this.transationsList = this.storageService.storageSubject.value
    })
  }

  transationsList!:Transazione[]

}
