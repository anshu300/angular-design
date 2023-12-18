import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EduHomeComponent } from './edu-home/edu-home.component';
import { EduLoginComponent } from './edu-login/edu-login.component';
import { EduRegisterComponent } from './edu-register/edu-register.component';
import { ScoreCardComponent } from './score-card/score-card.component';
import { ObjectiveComponent } from './objective/objective.component';
const routes: Routes = [
  {
    path: 'edu-home', component: EduHomeComponent
  },
  {
    path: 'edu-login', component: EduLoginComponent
  },
  {
    path: 'edu-register', component: EduRegisterComponent
  },
  {
    path: 'score-card', component: ScoreCardComponent
  },
  {
    path: 'objective', component: ObjectiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EducationRoutingModule { }
