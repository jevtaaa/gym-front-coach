import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Client } from 'src/app/models/client.model';
import { SessionService } from 'src/app/session.service';
import { ClientService } from '../client.service';
import { Training } from 'src/app/models/training.model';
import { TrainingService } from 'src/app/training/training.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {

  client: Client;
  training_id: number;

  constructor
  (
    @Inject(MAT_DIALOG_DATA) public data: any,
    public session: SessionService,
    public dialogRef: MatDialogRef<ClientDetailComponent>,
    public clientService: ClientService,
    public trainingService: TrainingService
  ) {
    this.client = data.client;
    this.session.clientDetailsDialogRef = this.dialogRef;
   }

  ngOnInit(): void {
  }

  removeTraining() {
    this.session.clientsSpinnerFlag = true;
    this.clientService.removeTraining(this.client.getId(), null)
    .subscribe((data: any) => {
      this.session.clientsSpinnerFlag = false;
      if(data.training_id == null) {
        this.client.setTraining(null);
        this.session.clientDetailsDialogRef.close();
      }
    })
  }

  addTraining() {
    this.session.clientsSpinnerFlag = true;
    this.clientService.addTraining(this.client.getId(), this.training_id)
    .subscribe((data: any) => {
      this.session.clientsSpinnerFlag = false;
      if(data.training_id != null) {
        this.client.setTraining(this.trainingService.getTrainingById(data.training_id));
        this.session.clientDetailsDialogRef.close();
      }
    })
  }

  close() {
    this.session.clientDetailsDialogRef.close();
  }

}
