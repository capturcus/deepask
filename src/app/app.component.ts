import { ViewChild, Component, HostListener } from '@angular/core';
import { NumberGetterComponent } from './number-getter/number-getter.component';
import { QuestionShowerComponent } from './question-shower/question-shower.component';
import { QuestionsService } from './questions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  USER_INPUT = 0;
  ASKING_QUESTION = 1;

  @ViewChild(NumberGetterComponent)
  private numberGetter: NumberGetterComponent;

  @ViewChild(QuestionShowerComponent)
  private questionShower: QuestionShowerComponent;

  currentState: number = this.USER_INPUT;

  title = 'deepask';

  constructor(
    private questions: QuestionsService
  ) {}

  ngAfterViewInit() {
    this.numberGetter.questionChosenSubject.subscribe((number) => {
      console.log(number);
      if (!this.questions.numValid(+number)) {
        let ls = this.questions.getLengths();
        let ranges = "(1-" + ls[0] + ", " + this.questions.HARD_OFFSET + "-" +
          (this.questions.HARD_OFFSET + ls[1]) + ")";
        this.numberGetter.showText("niepoprawny numer pytania " + ranges);
        return;
      }
      this.currentState = this.ASKING_QUESTION;
      this.questionShower.setupQuestion(number);
    });
    this.questionShower.questionFinishedSubject.subscribe((number) => {
      this.currentState = this.USER_INPUT;
    });
  }
  @HostListener("document:keydown", ["$event"])
  handleKeypress(event) {
    if (this.currentState === this.USER_INPUT)
      this.numberGetter.handleKeypress(event);
    else
      this.questionShower.handleKeypress(event);
  }
}
