import IButton from "./button.interface";

export default interface IQuestion {
    id?: number,
    title?: string,
    buttons?: IButton[]
}