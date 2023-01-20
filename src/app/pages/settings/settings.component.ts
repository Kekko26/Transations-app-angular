import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { StorageHandlerService } from 'src/app/core/services/storage-handler.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(public storageService:StorageHandlerService) { }

  ngOnInit(): void {
  }

  insertedValue:number = Number(localStorage.getItem('amount')) | 0

  setVal(event:InputEvent){
    localStorage.setItem('amount', JSON.stringify(event))
  }  

}
