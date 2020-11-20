import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { Subject } from 'rxjs';

const LETTER_INTERVAL = 30;
const ALLOWED_CHARS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "Enter", "Backspace"];

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
  used: boolean = false;

  public questionFinishedSubject : Subject < any > = new Subject < any > ();

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
    if (this.questions.isUsed(num)) {
      this.used = true;
      this.currentText = q;
      return;
    }
    this.used = false;
    console.log(q);
    this.targetText = q;
    this.displaying = true;
    this.interval = setInterval(this.tick.bind(this), LETTER_INTERVAL);
    this.questions.setUsed(num);
  }

  public handleKeypress(event) {
    if (!ALLOWED_CHARS.includes(event.key))
      return;
    if (this.displaying)
      return;
    this.targetText = "";
    this.currentText = "";
    this.i = 0;
    this.questionFinishedSubject.next(1);
  }

  ngOnInit(): void {
  }
}
