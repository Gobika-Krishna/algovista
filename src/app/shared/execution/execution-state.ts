export interface ExecutionState {

    /**
     * Indicates whether an algorithm is currently executing.
     */
    playing: boolean;

    /**
     * Current highlighted line in the implementation panel.
     */
    activeLine: number;

    /**
     * Short description of the current execution step.
     */
    description: string;

    /**
     * Current execution speed in milliseconds.
     */
    speed: number;

}