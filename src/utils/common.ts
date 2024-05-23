import { Edge, Node, Connection } from "reactflow";
import { MessageProps } from "@/models/Bot";

export const createUUID = () => {
  return `${1e7}-${1e3}-${4e3}-y${8e3}-${1e12}`.replace(/[018]/g, (c) =>
    (
      Number(c) ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (Number(c) / 4)))
    ).toString(16)
  );
};

export const isNodeAlreadyConnected = (
  edges: Edge<MessageProps>[],
  params: Connection | Edge
) => {
  const edgeIds = edges.map((edge) => edge.source);
  return params.source && edgeIds.includes(params.source);
};

export const isAllSourceNodeConnected = (
  nodes: Node<MessageProps>[],
  edges: Edge<MessageProps>[]
) => {
  if (nodes.length === 1) {
    return true;
  }
  if (edges.length === 0) {
    return false;
  }
  const nodeIds = nodes.map((node) => node.id);
  const edgeIds = edges.map((edge) => edge.source);

  let cnt = 0;

  nodeIds.forEach((nodeId) => {
    if (!edgeIds.some((edge) => edge === nodeId)) {
      cnt++;
    }
  });

  if (cnt > 1) {
    return false;
  }
  return true;
};
