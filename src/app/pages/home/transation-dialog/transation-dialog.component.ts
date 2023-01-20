import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Transazione, TransazioneNOID } from 'src/app/shared/models/transation.type';

@Component({
  selector: 'app-transation-dialog',
  templateUrl: './transation-dialog.component.html',
  styleUrls: ['./transation-dialog.component.scss']
})
export class TransationDialogComponent implements OnInit {

  constructor(public dialog:MatDialogRef<TransationDialogComponent>, public fb:FormBuilder,  @Inject(MAT_DIALOG_DATA) public data: Transazione) { }

  ngOnInit(): void {
    console.log(this.data);
    
  }


  onAnnulla(){
    this.dialog.close()
  }

  formRef = this.fb.group({
    causale: [this.data ? this.data.causale : '', Validators.required],
    data: [this.data ? new Date(this.data.data) : '', Validators.required],
    positivo: [this.data ? this.data.positivo ? 'true' : '' : null, Validators.required],
    importo: [this.data ? this.data.importo : '', [Validators.required,Validators.min(1)]]
  })

  onAggiungi(){ 
    const addingImport:TransazioneNOID = {
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

  onSaveEdit(){
    const editingImport:TransazioneNOID = {
      causale: this.formRef.get('causale')?.value!,
      data: new Date(this.formRef.get('data')?.value!).getTime(),
      positivo: !!(this.formRef.get('entrataUscita')?.value!),
      importo: Number(this.formRef.get('importo')?.value!),
    } 
    
    this.dialog.close(editingImport)
  }
}
