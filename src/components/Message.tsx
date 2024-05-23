import { Handle, HandleType, NodeProps, Position } from "reactflow";

import { MessageProps } from "@/models/Bot";

import MessageIcon from "./icons/MessageIcon";
import WhatsappIcon1 from "./icons/WhatsappIcon";

interface HandlerProps {
  type: HandleType;
  position: Position;
  isConnectable: boolean;
  id: string;
  className?: string;
}

const CommonHandler = ({ type, position, isConnectable }: HandlerProps) => {
  return (
    <Handle type={type} position={position} isConnectable={isConnectable} />
  );
};

const Message = ({
  data,
  isConnectable,
  selected,
}: NodeProps<MessageProps>) => {
  return (
    <article
      className={`rounded-xl shadow-lg min-w-[256px] relative flex flex-col ${
        selected ? "border border-solid border-[#1F5C99]" : ""
      }`}
    >
      <CommonHandler
        type="target"
        id="a"
        position={Position.Left}
        isConnectable={isConnectable}
      />

      <div className="flex items-center justify-between bg-[#CCEFDB] p-2 rounded-xl">
        <div className="flex items-center ">
          <MessageIcon />
          <p className="ml-3">Send Message</p>
        </div>
        <WhatsappIcon1 className="w-4 h-4" />
      </div>
      <div className="p-2">
        <p>{data.text}</p>
      </div>
      <CommonHandler
        type="source"
        id="b "
        position={Position.Right}
        isConnectable={isConnectable}
      />
    </article>
  );
};

export default Message;
