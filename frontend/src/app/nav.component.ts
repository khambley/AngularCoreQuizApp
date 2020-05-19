import { Component } from '@angular/core';

@Component({
  selector: 'nav',
  template: `
    <mat-toolbar>
      <button mat-button routerLink="/">Home</button>
      <button mat-button routerLink="/quizzes">Quiz List</button>
      <button mat-button routerLink="/quiz">New Quiz</button>
      <button mat-button routerLink="/questions">Question List</button>
      <button mat-button routerLink="/question">New Question</button>
      
    </mat-toolbar>
  `
})
export class NavComponent{
}