import { ViewChild, Component } from '@angular/core';
import { NumberGetterComponent } from './number-getter/number-getter.component';
import { QuestionShowerComponent } from './question-shower/question-shower.component';

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

  currentState: number = 0;

  title = 'deepask';

  ngAfterViewInit() {
    this.numberGetter.questionChosenSubject.subscribe((number) => {
      console.log(number);
      this.currentState = this.ASKING_QUESTION;
    });
  }
}
