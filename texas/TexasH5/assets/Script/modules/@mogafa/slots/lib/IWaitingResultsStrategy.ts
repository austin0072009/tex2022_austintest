import SymbolBoard from "./SymbolBoard/SymbolBoard";

export default interface IWaitingResultsStrategy {
    isPause: boolean;
    isPauseBuffer: boolean;
    chessboard: SymbolBoard;
    startWaiting(excludeCodes: number[]): void;
    stopWaiting(isManual?: boolean): void;
    reset(): void;
}
