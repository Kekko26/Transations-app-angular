import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/core/services/api.service';
import { Transazione } from 'src/app/shared/models/transation.type';
import { TransationDialogComponent } from '../../transation-dialog/transation-dialog.component';

@Component({
  selector: 'app-single-transation-card',
  templateUrl: './single-transation-card.component.html',
  styleUrls: ['./single-transation-card.component.scss']
})
export class SingleTransationCardComponent implements OnInit {

  constructor(public api:ApiService,  public dialogRef:MatDialog) { }

  ngOnInit(): void {
  }

  @Input() transation!:Transazione;

  deleteCard(){
    this.api.deleteTransazione(this.transation.id).subscribe(res => {
      this.api.getAllTransazioni().subscribe(val => this.api.transactionsSubject.next(val))
    })
  }

  editCard(){
    const dialog = this.dialogRef.open(TransationDialogComponent, {
      data:{
        ...this.transation
      },
      height: '400px',
      width: '400px'
    })

    dialog.afterClosed().subscribe(val => {
      if(val){
      this.api.editTransazione(this.transation.id, val).subscribe(() => {
        this.api.getAllTransazioni().subscribe(res => this.api.transactionsSubject.next(res))
      })
    }
    })

  }

}
