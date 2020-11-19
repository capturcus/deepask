import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

const ALLOWED_CHARS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "Enter", "Backspace"];

@Component({
  selector: 'app-number-getter',
  templateUrl: './number-getter.component.html',
  styleUrls: ['./number-getter.component.css']
})
export class NumberGetterComponent implements OnInit {

  questionNumber: string = "";

  showingText: boolean = false;
  showedText: string = "";

  public questionChosenSubject : Subject < any > = new Subject < any > ();

  constructor() { }

  ngOnInit(): void {
  }

  handleEnter() {
    if (this.questionNumber === "")
      return;
    this.questionChosenSubject.next(this.questionNumber);
    this.questionNumber = "";
  }

  handleKeypressText(event) {
    this.showedText = "";
    this.questionNumber = "";
    this.showingText = false;
  }

  handleKeypressQuestion(event) {
    if (!ALLOWED_CHARS.includes(event.key))
      return;
    if (event.key === "Backspace") {
      console.log("backspacing");
      this.questionNumber = this.questionNumber.slice(0, -1);
      return;
    }
    if (event.key === "Enter") {
      this.handleEnter();
      return;
    }
    this.questionNumber += event.key;
    console.log(event);
  }

  handleKeypress(event) {
    if (this.showingText) {
      this.handleKeypressText(event);
    } else {
      this.handleKeypressQuestion(event);
    }
  }

  public showText(text) {
    this.showingText = true;
    this.showedText = text;
  }
}
