import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class QuizService {
//----------------Svojstva (Properties)------------------
readonly rootUrl = 'https://localhost:44375/';
qns: any[];                       //pohrana 10 nasumičnih pitanja
seconds: number;                  //ukupno vrijeme provedeno na kvizu
timer;                            //pomoću ovog svojstva brojimo ukupno vrijeme
qnProgress: number;               //broj pitanja
correctAnswerCount: number = 0;   //broj točnih odgovora

//----------------Pomoćne metode (Helper Methods)--------
  constructor(private http: HttpClient) { }
  displayTimeElapsed(){
    return Math.floor(this.seconds / 3600) + ':' + Math.floor(this.seconds / 60) + ':' + Math.floor(this.seconds % 60);
  }

  getParticipantName(){
    var participant = JSON.parse(localStorage.getItem('participant'));
    return participant.Name;
  }


  //----------------Http metode (HTTP Methods)-------------
  insertParticipant(name: string, email: string){
    var body = {
      Name: name,
      Email: email
    }
    return this.http.post(this.rootUrl + '/api/InsertParticipant', body);
  }

          //------------------Easy-------------------------

  getEasyQuestions(){
    return this.http.get(this.rootUrl + '/api/EasyQuestions');
  }

  getEasyAnswers(){
    var body = this.qns.map(x => x.eQnID);                            //u "body" stavljamo ID-eve od 10 nasumičnih pitanja
    return this.http.post(this.rootUrl + '/api/EasyAnswers', body);   //zahtjev ispisuje polje pitanja (eAnswer)
  }

  submitEasyScoreTimeDifficulty(){
    var body = JSON.parse(localStorage.getItem('participant'));
    body.Score = this.correctAnswerCount;
    body.TimeSpent = this.seconds;
    body.Difficulty = 'Lagana težina';
    return this.http.post(this.rootUrl + "/api/UpdateScoreTime", body);
  }

          //--------------Regular---------------

  getRegularQuestions(){
    return this.http.get(this.rootUrl + '/api/RegularQuestions');
  }

  getRegularAnswers(){
    var body = this.qns.map(x => x.rQnID);                            //u "body" stavljamo ID-eve od 10 nasumičnih pitanja
    return this.http.post(this.rootUrl + '/api/RegularAnswers', body);   //zahtjev ispisuje polje pitanja (rAnswer)
  }

  submitRegularScoreTimeDifficulty(){
    var body = JSON.parse(localStorage.getItem('participant'));
    body.Score = this.correctAnswerCount;
    body.TimeSpent = this.seconds;
    body.Difficulty = 'Normalna težina';
    return this.http.post(this.rootUrl + "/api/UpdateScoreTime", body);
  }

          //--------------Hard---------------

  getHardQuestions(){
    return this.http.get(this.rootUrl + '/api/HardQuestions');
  }

  getHardAnswers(){
    var body = this.qns.map(x => x.hQnID);                            //u "body" stavljamo ID-eve od 10 nasumičnih pitanja
    return this.http.post(this.rootUrl + '/api/HardAnswers', body);   //zahtjev ispisuje polje pitanja (hAnswer)
  }

  submitHardScoreTimeDifficulty(){
    var body = JSON.parse(localStorage.getItem('participant'));
    body.Score = this.correctAnswerCount;
    body.TimeSpent = this.seconds;
    body.Difficulty = 'Teška težina';
    return this.http.post(this.rootUrl + "/api/UpdateScoreTime", body);
  }

}
