import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { AmountComponent } from './amount/amount.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { SingleTransationCardComponent } from './transactions/single-transation-card/single-transation-card.component';
import { HomeComponent } from './home.component';
import { MaterialsModule } from 'src/app/shared/materials/materials.module';
import { TransationDialogComponent } from './transation-dialog/transation-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AmountComponent,
    TransactionsComponent,
    SingleTransationCardComponent,
    HomeComponent,
    TransationDialogComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialsModule,
    MatDialogModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
