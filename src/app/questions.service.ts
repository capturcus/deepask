import { Injectable } from '@angular/core';
import { Questions } from '../questions';

const HARD_OFFSET = 69;

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor() { }
  usedNumbers = {};

  getQsNum(num: number) {
    let qs;
    if (num >= HARD_OFFSET) {
      num -= HARD_OFFSET;
      qs = Questions.QUESTIONS_HARD;
    } else {
      qs = Questions.QUESTIONS_EASY
    }
    return [qs, num];
  }

  public numValid(num: string) {
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
}
