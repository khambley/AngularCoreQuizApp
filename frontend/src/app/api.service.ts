import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs'; //RxJS - Reactive Extensions for JS library

@Injectable()
export class ApiService {

  private selectedQuestion = new Subject<any>();
  questionSelected = this.selectedQuestion.asObservable();

  constructor(private http: HttpClient) { }

  getQuestions(){
    return this.http.get('http://localhost:10440/api/questions'); //just returning the observable without executing it
  }
  postQuestion(question){
    this.http.post('http://localhost:10440/api/questions', question).subscribe(res => {
      console.log(res); //subscribing to an observable, waiting for an event to happen
    })
  }

  putQuestion(question) {
    this.http.put(`http://localhost:10440/api/questions/${question.id}`, question).subscribe(res => {
      console.log(res); //subscribing to an observable, waiting for an event to happen
    })
  }
  
  postQuiz(quiz){
    this.http.post('http://localhost:10440/api/quizzes', quiz).subscribe(res => {
      console.log(res); //subscribing to an observable, waiting for an event to happen
    })
  }
  selectQuestion(question){
    this.selectedQuestion.next(question)
  }
}