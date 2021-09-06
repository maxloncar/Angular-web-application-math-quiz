import { QuizService } from './../shared/quiz.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-easyquiz',
  templateUrl: './easyquiz.component.html',
  styleUrls: ['./easyquiz.component.css']
})
export class EasyquizComponent implements OnInit {

  constructor(private route: Router, public quizService: QuizService) { }

  ngOnInit(){
    if (parseInt(localStorage.getItem('seconds')) > 0){
      this.quizService.seconds = parseInt(localStorage.getItem('seconds'));
      this.quizService.qnProgress = parseInt(localStorage.getItem('qnProgress'));
      this.quizService.qns = JSON.parse(localStorage.getItem('qns'));
      if (this.quizService.qnProgress == 10){
        this.route.navigate(['/easyresult']);
      }
      else{
        this.startTimer();
      }
    }
    else{
      this.quizService.seconds = 0;       //inicijalizacija na nulu(0)
      this.quizService.qnProgress = 0;
      this.quizService.getEasyQuestions().subscribe(
        (data: any) =>{
          this.quizService.qns = data;    //unutar "data" se nalazi 10 nasumičnih pitanja
          this.startTimer();
       }
      );
    }
  }

  startTimer(){
    this.quizService.timer = setInterval(() => {  //inicijalizacija timera
      this.quizService.seconds++;                 //inkrementacija sekundi
      localStorage.setItem('seconds', this.quizService.seconds.toString());
    }, 1000);                                     //u intervalu od 1 sekunde (1000ms)
  }

  Answer(qID, choice){
    this.quizService.qns[this.quizService.qnProgress].answer = choice;
    localStorage.setItem('qns', JSON.stringify(this.quizService.qns));
    this.quizService.qnProgress++;
    localStorage.setItem('qnProgress', this.quizService.qnProgress.toString());
    if (this.quizService.qnProgress == 10){
      clearInterval(this.quizService.timer);
      this.route.navigate(['/easyresult']);
    }
  }

}
