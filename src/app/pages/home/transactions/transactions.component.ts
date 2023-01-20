import { Component, OnInit, Input} from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { StorageHandlerService } from 'src/app/core/services/storage-handler.service';
import { Transazione } from 'src/app/shared/models/transation.type';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  constructor(public storageService:StorageHandlerService, public api:ApiService) { }

  ngOnInit(): void {
    // this.storageService.storageSubject.subscribe(val => {
    //   if(val)
    //   this.transationsList = this.storageService.storageSubject.value
    // })
    // this.api.getAllTransazioni().subscribe(res => this.transationsList = res.reverse())
    this.api.transactionsSubject.subscribe((val)=> this.transationsList = val.reverse())
  }

  transationsList!:Transazione[]

}
