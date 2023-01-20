import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { StorageHandlerService } from 'src/app/core/services/storage-handler.service';
import { Transazione } from 'src/app/shared/models/transation.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( public api:ApiService) { }

  ngOnInit(): void {
    this.api.getAllTransazioni().subscribe(res =>   this.api.transactionsSubject.next(res))
  
  } 

}
