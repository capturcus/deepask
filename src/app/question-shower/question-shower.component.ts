import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { Subject } from 'rxjs';

const LETTER_INTERVAL = 30;

@Component({
  selector: 'app-question-shower',
  templateUrl: './question-shower.component.html',
  styleUrls: ['./question-shower.component.css']
})
export class QuestionShowerComponent implements OnInit {

  currentText = "";
  targetText = "";
  i = 0;
  interval;
  displaying: boolean = false;

  public questionFinishedSubjcet : Subject < any > = new Subject < any > ();

  constructor(
    private questions: QuestionsService
  ) { }

  tick() {
    if (this.i === this.targetText.length) {
      // text finished
      clearInterval(this.interval);
      this.displaying = false;
      return;
    }
    this.currentText += this.targetText[this.i];
    this.i++;
    clearInterval(this.interval);
    this.interval = setInterval(this.tick.bind(this), LETTER_INTERVAL);
  }

  public setupQuestion(num) {
    let q = this.questions.getQuestion(num);
    console.log(q);
    this.targetText = q;
    this.displaying = true;
    this.interval = setInterval(this.tick.bind(this), LETTER_INTERVAL);
  }

  public handleKeypress(event) {
    if (this.displaying)
      return;
    this.targetText = "";
    this.currentText = "";
    this.i = 0;
    this.questionFinishedSubjcet.next(1);
  }

  ngOnInit(): void {
  }
}
