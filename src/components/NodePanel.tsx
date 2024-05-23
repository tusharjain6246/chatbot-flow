import { DragEvent } from "react";

import { NODE_TYPES } from "@/models/Bot";

import MessageIcon from "./icons/MessageIcon";
import { EVENT_TYPE } from "@/constants/common";

const NodePanel = () => {
  const handleDragStart = (event: DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData(EVENT_TYPE.ReactFlow, NODE_TYPES.Message);
    event.dataTransfer.effectAllowed = "move";
  };
  return (
    <aside className="border-2 rounded border-gray-100 border-solid p-4 min-w-[250px] md:min-w-[300px] text-center">
      <h5>Add your Message Node from Here</h5>
      <div
        draggable
        onDragStart={handleDragStart}
        className="flex flex-col items-center justify-center p-4 border-2 border-[#3674B2] border-solid rounded-md text-[#3674B2] cursor-pointer mt-2"
      >
        <MessageIcon className="w-6 h-6" />
        <p>Message</p>
      </div>
    </aside>
  );
};

export default NodePanel;
