import { Component, OnInit, HostListener } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-number-getter',
  templateUrl: './number-getter.component.html',
  styleUrls: ['./number-getter.component.css']
})
export class NumberGetterComponent implements OnInit {

  questionNumber: string = "";

  public questionChosenSubject : Subject < any > = new Subject < any > ();

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener("document:keydown", ["$event"])
  handleKeypress(event) {
    event.preventDefault();
    // todo: validate for numbers
    if (event.key === "Backspace") {
      console.log("backspacing");
      this.questionNumber = this.questionNumber.slice(0, -1);
      return;
    }
    if (event.key === "Enter") {
      this.questionChosenSubject.next(this.questionNumber);
      this.questionNumber = "";
      return;
    }
    this.questionNumber += event.key;
    console.log(event);
  }
}
