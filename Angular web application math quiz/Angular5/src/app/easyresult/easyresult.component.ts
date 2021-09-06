import { QuizService } from './../shared/quiz.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-easyresult',
  templateUrl: './easyresult.component.html',
  styleUrls: ['./easyresult.component.css']
})
export class EasyresultComponent implements OnInit {

  constructor(public quizService: QuizService, private route: Router) { }

  ngOnInit(){
    if (parseInt(localStorage.getItem('qnProgress')) == 10){
      this.quizService.seconds = parseInt(localStorage.getItem('seconds'));
      this.quizService.qnProgress = parseInt(localStorage.getItem('qnProgress'));
      this.quizService.qns = JSON.parse(localStorage.getItem('qns'));
      this.quizService.getEasyAnswers().subscribe(
        (data: any) => {
          this.quizService.correctAnswerCount = 0;
          this.quizService.qns.forEach((e, i) => {
            if(e.answer == data[i]){
              this.quizService.correctAnswerCount++;    
            }
            e.correct = data[i];
          });
        }
      );
    }
    else{
      this.route.navigate(['/easyquiz']);
    }
  }

  OnEasySubmit(){
    this.quizService.submitEasyScoreTimeDifficulty().subscribe(() => {
      this.Restart();
    });
  }

  Restart(){
    localStorage.setItem('qnProgress', "0");
    localStorage.setItem('qns', "");
    localStorage.setItem('seconds', "0");
    this.route.navigate(['/difficulty']);
  }

}
