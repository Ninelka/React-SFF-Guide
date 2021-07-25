export default interface IButton {
    title?: string,
    text?: string,
    nextStep?: number,
    target?: number,
    nextStepEvent?: void,
    clickEvent?: () => void,
    onClick?: (e: React.MouseEvent<HTMLElement>) => void
}