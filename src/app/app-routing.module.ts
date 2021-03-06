import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { CoachComponent } from './coach/coach.component';
import { ExerciseDefaultComponent } from './exercise/exercise-default/exercise-default.component';
import { TrainingDefaultComponent } from './training/training-default/training-default.component';
import { ClientDefaultComponent } from './client/client-default/client-default.component';

const routes: Routes = [
  {
    path: 'login',
    component: AuthComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    component: CoachComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'clients',
    component: ClientDefaultComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'exercises',
    component: ExerciseDefaultComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'trainings',
    component: TrainingDefaultComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
