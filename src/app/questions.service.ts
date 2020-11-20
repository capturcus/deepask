import { Injectable } from '@angular/core';
import { Questions } from '../questions';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor() { }
  usedNumbers = {};

  HARD_OFFSET = 100;

  getQsNum(num: number) {
    let qs;
    if (num >= this.HARD_OFFSET) {
      num -= this.HARD_OFFSET;
      qs = Questions.QUESTIONS_HARD;
    } else {
      qs = Questions.QUESTIONS_EASY
    }
    console.log(qs, num);
    return [qs, num];
  }

  public numValid(num: number) {
    if (num === 0)
      return false;
    let qsnum = this.getQsNum(+num);
    return qsnum[1] >= 0 && qsnum[1] < qsnum[0].length;
  }

  public getQuestion(num: number) {
    let qsnum = this.getQsNum(num);
    return qsnum[0][qsnum[1]];
  }

  public setUsed(num: number) {
    this.usedNumbers[num] = true;
  }

  public isUsed(num: number) {
    return this.usedNumbers[num];
  }

  public getLengths() {
    return [Questions.QUESTIONS_EASY.length - 1,
      Questions.QUESTIONS_HARD.length - 1];
  }
}
