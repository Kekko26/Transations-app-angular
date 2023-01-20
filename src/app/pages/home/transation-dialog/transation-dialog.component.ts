import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Transazione } from 'src/app/shared/models/transation.type';

@Component({
  selector: 'app-transation-dialog',
  templateUrl: './transation-dialog.component.html',
  styleUrls: ['./transation-dialog.component.scss']
})
export class TransationDialogComponent implements OnInit {

  constructor(public dialog:MatDialogRef<TransationDialogComponent>, public fb:FormBuilder) { }

  ngOnInit(): void {
  }

  onAnnulla(){
    this.dialog.close()
  }

  formRef = this.fb.group({
    causale: ['', Validators.required],
    data: ['', Validators.required],
    entrataUscita: ['', Validators.required],
    importo: ['', [Validators.required,Validators.min(1)]]
  })

  onAggiungi(){ 
    const addingImport:Transazione = {
      causale: this.formRef.get('causale')?.value!,
      data: new Date(this.formRef.get('data')?.value!).getTime(),
      positivo: !!(this.formRef.get('entrataUscita')?.value!),
      importo: Number(this.formRef.get('importo')?.value!),
    }    

    // localStorage.setItem('movimenti', JSON.stringify([(addingImport), ...(JSON.parse(localStorage.getItem('movimenti')!))]))
    this.dialog.close(addingImport)
    
  }

  amountValidator():ValidatorFn{
    return(control:AbstractControl):ValidationErrors|null=>{
      return control.value > 0 ? null : {'amountValidator': true}
    }
  }
}
