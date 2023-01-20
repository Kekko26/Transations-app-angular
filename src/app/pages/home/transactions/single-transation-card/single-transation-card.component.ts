import { Component, OnInit, Input } from '@angular/core';
import { Transazione } from 'src/app/shared/models/transation.type';

@Component({
  selector: 'app-single-transation-card',
  templateUrl: './single-transation-card.component.html',
  styleUrls: ['./single-transation-card.component.scss']
})
export class SingleTransationCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() transation!:Transazione;

}
