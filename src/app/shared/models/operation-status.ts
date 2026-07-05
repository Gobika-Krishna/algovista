export interface OperationStatus {
    operation: string;
    status: string;
    timeComplexity: string;
    spaceComplexity: string;
    isRunning?: boolean;
    isError?: boolean;
}