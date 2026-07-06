import { Injectable, signal } from '@angular/core';
import { ExecutionState } from './execution-state';
import { ExecutionStep } from './execution-step';

@Injectable({
    providedIn: 'root'
})
export class ExecutionEngine {

    readonly state = signal<ExecutionState>({
        playing: false,
        activeLine: -1,
        description: '',
        speed: 700
    });

    private cancelled = false;

    async play(steps: ExecutionStep[]): Promise<void> {
        if (this.state().playing) {
            return;
        }

        this.cancelled = false;

        this.patch({
            playing: true
        });

        for (const step of steps) {
            if (this.cancelled) {
                break;
            }
            await this.execute(step);
        }

        this.finish();
    }

    async execute(step: ExecutionStep): Promise<void> {

        this.patch({
            activeLine: step.line,
            description: step.description ?? ''
        });

        if (step.callback) {
            await step.callback();
        }

        await this.wait(step.duration);

    }

    async wait(duration?: number): Promise<void> {

        return new Promise(resolve => {

            setTimeout(
                resolve,
                duration ?? this.state().speed
            );

        });

    }

    setSpeed(speed: number): void {

        this.patch({
            speed
        });

    }

    stop(): void {

        this.cancelled = true;

        this.finish();

    }

    reset(): void {

        this.cancelled = false;

        this.finish();

    }

    private finish(): void {

        this.patch({
            playing: false,
            activeLine: -1,
            description: ''
        });

    }

    private patch(
        state: Partial<ExecutionState>
    ): void {

        this.state.update(current => ({
            ...current,
            ...state
        }));

    }

    async step(step: ExecutionStep): Promise<void> {
        if (!this.state().playing) {
            this.patch({
                playing: true
            });
        }
        await this.execute(step);
    }

}