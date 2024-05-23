import Message from "@/components/Message";
import { NODE_TYPES } from "@/models/Bot";
import { NodeTypes } from "reactflow";

export const connectionLineStyle = { stroke: "#000" };

export const nodeTypes: NodeTypes = {
  [NODE_TYPES.Message]: Message,
};

export enum EVENT_TYPE {
  ReactFlow = "application/reactflow",
}
