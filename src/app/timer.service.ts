import { Injectable } from '@angular/core';

@Injectable()
export class TimerService {
  private timer: any;
  private counter = 0;

  constructor() { }

  start(ms: number){
    if(!this.timer){
      this.counter = 0;
      this.timer = setInterval(() => {
        this.counter++;
      }, ms);
      }
    }

  stop(){
    if(this.timer){
      clearInterval(this.timer);
      this.timer = null;
    }

  }

  getCount(){
    return this.counter;
  }

}