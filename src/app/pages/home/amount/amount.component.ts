import { Component, OnInit } from '@angular/core';
import { StorageHandlerService } from 'src/app/core/services/storage-handler.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { TransationDialogComponent } from '../transation-dialog/transation-dialog.component';
import { Transazione } from 'src/app/shared/models/transation.type';

@Component({
  selector: 'app-amount',
  templateUrl: './amount.component.html',
  styleUrls: ['./amount.component.scss']
})
export class AmountComponent implements OnInit {

  constructor(public storageService:StorageHandlerService, public dialogRef:MatDialog) { }
  
  updateAmount(){ 
    this.amount = JSON.parse(localStorage.getItem('amount')!)
    this.transArr = this.storageService.storageSubject.value
    this.transArr.forEach(el =>{
      if(el.positivo) 
      this.amount+=el.importo
      else
      this.amount-=el.importo
    })
  }

  ngOnInit(): void {    
    this.updateAmount()
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
        localStorage.setItem('movimenti', JSON.stringify([(val), ...(JSON.parse(localStorage.getItem('movimenti')!))]))
        this.storageService.storageSubject.next([val, ...this.storageService.transations])
        this.updateAmount()
      }      
    })
  }
}
