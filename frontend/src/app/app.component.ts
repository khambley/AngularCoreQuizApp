import { Component, OnInit } from '@angular/core';
import { QuestionComponent } from './question.component';

function getDate() {
  var months = ['January','February','March','April','May','June','July',
'August','September','October','November','December'];       
var tomorrow = new Date();
tomorrow.setTime(tomorrow.getTime());   // + (1000*3600*24) to get tomorrow's date     
document.getElementById("spanDate").innerHTML = months[tomorrow.getMonth()] + " " + tomorrow.getDate()+ ", " + tomorrow.getFullYear();
}

@Component({
  selector: 'app-root',
  template: '<question></question>' //compose an inline template with the question component
})
export class AppComponent implements OnInit {
  title = 'Angular Quiz';

  ngOnInit(){
    getDate()
  }
}
