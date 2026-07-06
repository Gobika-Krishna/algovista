import { ExecutionStep } from './execution-step';

export function step(
    line: number,
    description?: string,
    callback?: () => void | Promise<void>,
    duration?: number
): ExecutionStep {
    return {
        line,
        description,
        callback,
        duration
    };
}