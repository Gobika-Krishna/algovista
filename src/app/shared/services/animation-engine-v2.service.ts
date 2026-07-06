import { Injectable, signal } from '@angular/core';

export interface ExecutionStep {

    line: number;

    title?: string;

    duration?: number;

    callback?: () => void | Promise<void>;

}

@Injectable({
    providedIn: 'root'
})
export class AnimationEngineV2 {

    readonly playing = signal(false);

    readonly activeLine = signal(-1);

    readonly title = signal('');

    readonly speed = signal(700);

    private cancelled = false;

    async play(steps: ExecutionStep[]): Promise<void> {

        if (this.playing()) {
            return;
        }

        this.cancelled = false;

        this.playing.set(true);

        for (const step of steps) {

            if (this.cancelled) {
                break;
            }

            await this.execute(step);

        }

        this.finish();

    }

    async execute(step: ExecutionStep): Promise<void> {

        this.activeLine.set(step.line);

        this.title.set(step.title ?? '');

        if (step.callback) {

            await step.callback();

        }

        await this.wait(step.duration);

    }

    async wait(duration?: number): Promise<void> {

        return new Promise(resolve => {

            setTimeout(resolve, duration ?? this.speed());

        });

    }

    cancel(): void {

        this.cancelled = true;

    }

    finish(): void {

        this.activeLine.set(-1);

        this.title.set('');

        this.playing.set(false);

    }

    reset(): void {

        this.cancelled = false;

        this.finish();

    }

}