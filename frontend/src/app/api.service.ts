import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs'; //RxJS - Reactive Extensions for JS library

@Injectable()
export class ApiService {

  private selectedQuestion = new Subject<any>();
  questionSelected = this.selectedQuestion.asObservable();

  private selectedQuiz = new Subject<any>();
  quizSelected = this.selectedQuiz.asObservable();

  constructor(private http: HttpClient) { }

  postQuiz(quiz){
    this.http.post('http://localhost:10440/api/quizzes', quiz).subscribe(res => {
      console.log(res); //subscribing to an observable, waiting for an event to happen
    })
  }
  getQuizzes(){
    return this.http.get('http://localhost:10440/api/quizzes');
  }
  selectQuiz(quiz){
    this.selectedQuiz.next(quiz)
  }
  putQuiz(quiz) {
    this.http.put(`http://localhost:10440/api/quizzes/${quiz.id}`, quiz).subscribe(res => {
      console.log(res); //subscribing to an observable, waiting for an event to happen
    })
  }

  postQuestion(question){
    this.http.post('http://localhost:10440/api/questions', question).subscribe(res => {
      console.log(res); //subscribing to an observable, waiting for an event to happen
    })
  }

  getQuestions(){
    return this.http.get('http://localhost:10440/api/questions'); //just returning the observable without executing it
  }
  putQuestion(question) {
    this.http.put(`http://localhost:10440/api/questions/${question.id}`, question).subscribe(res => {
      console.log(res); //subscribing to an observable, waiting for an event to happen
    })
  }

  selectQuestion(question){
    this.selectedQuestion.next(question)
  }
}