export interface ExecutionStep {

    /**
     * Line number to highlight in the implementation panel.
     */
    line: number;

    /**
     * Small description shown in execution panel.
     */
    description?: string;

    /**
     * Override delay for this step.
     */
    duration?: number;

    /**
     * Execute UI update.
     */
    callback?: () => void | Promise<void>;

}