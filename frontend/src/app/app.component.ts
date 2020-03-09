import { Component, OnInit } from '@angular/core';
import { QuestionComponent } from './question.component';



@Component({
  selector: 'app-root',
  template: '<question></question>' //compose an inline template with the question component
})
export class AppComponent implements OnInit {
  title = 'Angular Quiz';

  ngOnInit(){
   
  }
}
