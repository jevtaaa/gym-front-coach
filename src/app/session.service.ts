import { Injectable } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { CoachEditComponent } from './coach/coach-edit/coach-edit.component';
import { TrainingExerciseComponent } from './training/training-exercise/training-exercise.component';
import { TrainingDeleteComponent } from './training/training-delete/training-delete.component';
import { MatDialogRef } from '@angular/material/dialog';
import { ClientDetailComponent } from './client/client-detail/client-detail.component';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ClientHistoryComponent } from './client/client-history/client-history.component';
import { ExerciseNewComponent } from './exercise/exercise-new/exercise-new.component';
import { ExerciseDeleteComponent } from './exercise/exercise-delete/exercise-delete.component';
import { TrainingNewComponent } from './training/training-new/training-new.component';

@Injectable({
    providedIn: 'root',
})
export class SessionService {
    loginSpinnerFlag: boolean;
    bottomSheetSpinnerFlag: boolean;
    trainingsSpinnerFlag: boolean;
    clientsSpinnerFlag: boolean;
    exercisesSpinnerFlag: boolean;
    homeSpinnerFlag: boolean;
    dialogSpinnerFlag: boolean;
    historySpinnerFlag: boolean;

    editBottomSheetRef: MatBottomSheetRef<CoachEditComponent>;
    exercisesDialogRef: MatDialogRef<TrainingExerciseComponent>;
    deleteDialogRef: MatDialogRef<TrainingDeleteComponent>;
    clientDetailsDialogRef: MatDialogRef<ClientDetailComponent>;
    clientHistoryDialogRef: MatDialogRef<ClientHistoryComponent>;
    newDialogRef: MatDialogRef<ExerciseNewComponent>;
    deleteExerciseRef: MatDialogRef<ExerciseDeleteComponent>;
    newTrainingDialogRef: MatDialogRef<TrainingNewComponent>;

    ngrok: string = 'https://601cbba787ce.ngrok.io';

    constructor(public snackBar: MatSnackBar) {}

    config: MatSnackBarConfig = {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
    }

    successSnackBar(msg: string) {
        this.snackBar.open(msg, '', this.config);
    }
}