import "reactflow/dist/style.css";

import { DragEvent, useRef, useState } from "react";
import ReactFlow, {
  addEdge,
  Connection,
  Edge,
  Node,
  ReactFlowInstance,
  ReactFlowProvider,
  useEdgesState,
  useNodesState,
} from "reactflow";

import EditPanel from "@/components/EditPanel";
import NodePanel from "@/components/NodePanel";
import { Result } from "@/models/Bot";
import { MessageProps } from "@/models/Bot";
import {
  createUUID,
  isAllSourceNodeConnected,
  isNodeAlreadyConnected,
} from "@/utils/common";
import { EVENT_TYPE, connectionLineStyle, nodeTypes } from "@/constants/common";

const Home = () => {
  const reactFlowRef = useRef<HTMLDivElement>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [selectedNode, setSelectedNode] = useState<Node<MessageProps>>();
  const [result, setResult] = useState<Result>();
  const [reactFlowInstance, setReactFlowInstance] =
    useState<ReactFlowInstance | null>(null);

  const handleConnect = (params: Connection | Edge) => {
    resetSaveResult();
    if (!isNodeAlreadyConnected(edges, params)) {
      setEdges((prev) => addEdge(params, prev));
    } else {
      setResult({ text: "Source node already Connected", type: "error" });
    }
  };

  const resetSaveResult = () => {
    setResult(undefined);
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const type = event.dataTransfer.getData(EVENT_TYPE.ReactFlow);
    if (reactFlowInstance && type && reactFlowRef && reactFlowRef.current) {
      const reactFlowBounds = reactFlowRef.current.getBoundingClientRect();
      const x = event.clientX - reactFlowBounds.left;
      const y = event.clientY - reactFlowBounds.top;
      const position = reactFlowInstance.screenToFlowPosition({
        x,
        y,
      });
      const id = createUUID();
      const newNode: Node = {
        id,
        type,
        position,
        data: { text: "Type Your message here" },
      };
      setNodes((prev) => prev.concat(newNode));
      resetSaveResult();
    }
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
    resetSaveResult();
  };

  const handleNodeClick = (node: Node<MessageProps>) => {
    setSelectedNode(node);
    resetSaveResult();
  };

  const handleSubmitEditText = (text: string) => {
    setNodes((prev) =>
      prev.map((node) => {
        if (node.id !== selectedNode?.id) {
          return node;
        }
        return {
          ...node,
          data: { text },
        };
      })
    );
    resetSaveResult();
  };

  const handleResetSelectedNode = () => {
    setSelectedNode(undefined);
    resetSaveResult();
  };

  const handleDeleteNode = () => {
    setNodes((prev) => prev.filter((node) => node.id !== selectedNode?.id));
    resetSaveResult();
  };

  const handleSave = () => {
    if (isAllSourceNodeConnected(nodes, edges)) {
      setResult({ text: "Successfully saved Flow", type: "success" });
    } else {
      setResult({ text: "Cannot Save Flow", type: "error" });
    }
  };

  return (
    <>
      <div className="w-full p-4 bg-[#E3E3E3] flex items-center justify-center pr-20 relative min-h-[75px] relative">
        {result ? (
          <p
            className={`border border-solid p-2 rounded-md ${
              result.type === "success"
                ? "bg-[#CEF2AA] border-[#80D12E]"
                : "bg-[#FFE5E8] border-[#D91625]"
            }`}
          >
            {result.text}
          </p>
        ) : null}
        <button
          className="bg-white border border-solid border-[#3674B2] rounded-xl p-2 min-w-[150px] ml-8 absolute right-20"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
      <div className="flex h-screen grow flex-col md:flex-row">
        <ReactFlowProvider>
          <div ref={reactFlowRef} className="h-screen w-full">
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={handleConnect}
              onInit={setReactFlowInstance}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              fitView
              nodeTypes={nodeTypes}
              onNodeClick={(_, node) => handleNodeClick(node)}
              onPaneClick={handleResetSelectedNode}
              connectionLineStyle={connectionLineStyle}
              attributionPosition="bottom-left"
            />
          </div>
          {selectedNode ? (
            <EditPanel
              key={selectedNode.data.text}
              currentValue={selectedNode.data.text}
              onSubmit={handleSubmitEditText}
              onBackClick={handleResetSelectedNode}
              onDeleteClick={handleDeleteNode}
            />
          ) : (
            <NodePanel />
          )}
        </ReactFlowProvider>
      </div>
    </>
  );
};

export default Home;
