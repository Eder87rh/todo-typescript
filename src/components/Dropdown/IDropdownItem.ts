import { FunctionDeclaration } from "typescript";

export interface IDropdownItem {
  title: string,
  action: () => void,
}