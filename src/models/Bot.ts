export interface MessageProps {
  text: string;
}

export interface Result {
  text: string;
  type: "success" | "error";
}

export enum NODE_TYPES {
  Message = "messageNode",
}
