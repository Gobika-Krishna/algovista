import { Injectable, signal } from '@angular/core';

export interface AnimationStep {
  line: number;
  message: string;
  callback?: () => void;
}

@Injectable({
  providedIn: 'root'
})
export class AnimationEngineService {
  activeLine = signal(-1);
  explanation = signal('');
  playing = signal(false);
  speed = signal(700);

  async play(steps: AnimationStep[]) {
    if (this.playing()) {
      return;
    }

    this.playing.set(true);

    for (const step of steps) {
      this.activeLine.set(step.line);
      this.explanation.set(step.message);

      if (step.callback) {
        step.callback();
      }

      await this.delay(this.speed());
    }

    this.activeLine.set(-1);
    this.playing.set(false);
  }

  setSpeed(ms: number) {
    this.speed.set(ms);
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}