import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-difficulty',
  templateUrl: './difficulty.component.html',
  styleUrls: ['./difficulty.component.css']
})
export class DifficultyComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  OnClickEasy(){
    this.route.navigate(['/easyquiz']);
  }

  OnClickRegular(){
    this.route.navigate(['/regularquiz']);
  }

  OnClickHard(){
    this.route.navigate(['/hardquiz']);
  }

}
