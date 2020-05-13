import { Component, OnInit } from '@angular/core';
import { QuestionComponent } from './question.component';



@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>' //compose an inline template with the question component
})
export class AppComponent implements OnInit {

  ngOnInit(){
   
  }
}
