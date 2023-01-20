import { Component, Input, OnInit } from '@angular/core';
import { StorageHandlerService } from 'src/app/core/services/storage-handler.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { TransationDialogComponent } from '../transation-dialog/transation-dialog.component';
import { Transazione } from 'src/app/shared/models/transation.type';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-amount',
  templateUrl: './amount.component.html',
  styleUrls: ['./amount.component.scss']
})
export class AmountComponent implements OnInit {

  constructor(public storageService:StorageHandlerService, public dialogRef:MatDialog, public api:ApiService) { }
  

  updateAmount(){ 
    this.amount = JSON.parse(localStorage.getItem('amount')!)
      this.transArr.forEach(el =>{
        if(el.positivo) 
        this.amount+=el.importo
        else
        this.amount-=el.importo
      })
  }

  ngOnInit(): void {    
    this.api.transactionsSubject.subscribe(val => {
      this.transArr = val
      this.updateAmount()
    })
  }

  transArr!:Transazione[]
  amount!:number

  openDialog(){
    const dialog = this.dialogRef.open(TransationDialogComponent, {
      height: '400px',
      width: '400px'
    })

    dialog.afterClosed().subscribe(val=>{
      if(val){
        // localStorage.setItem('movimenti', JSON.stringify([(val), ...(JSON.parse(localStorage.getItem('movimenti')!))]))
        // this.storageService.storageSubject.next([val, ...this.storageService.transations])
        this.api.addTransazione(val).subscribe(()=>{
          this.api.getAllTransazioni().subscribe(res => this.api.transactionsSubject.next(res))
        })
      }      
    })
  }
}
