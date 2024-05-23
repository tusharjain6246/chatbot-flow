import { FormEvent, useState } from "react";

import BackArrow from "./icons/BackArrow";
import Delete from "./icons/Delete";

interface Props {
  currentValue: string;
  onSubmit: (text: string) => void;
  onBackClick?: () => void;
  onDeleteClick?: () => void;
}

const EditPanel = ({
  currentValue,
  onSubmit,
  onBackClick,
  onDeleteClick,
}: Props) => {
  const [value, setValue] = useState(currentValue || "");

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(value);
  };

  return (
    <aside className="border-2 rounded border-gray-100 border-solid min-w-[250px] md:min-w-[300px] text-center">
      <div className="p-2 text-center flex items-center justify-between">
        <button className="px-2" onClick={onBackClick}>
          <BackArrow className="fill-transparent stroke-[#4D4D4D] w-6 h-6 " />
        </button>
        <p>Message</p>
        <button className="px-2" onClick={onDeleteClick}>
          <Delete className="fill-transparent stroke-[#4D4D4D] w-6 h-6 " />
        </button>
      </div>
      <form
        onSubmit={handleFormSubmit}
        className="p-2 border-y border-solid border-[#CCCCCC] flex flex-col"
      >
        <p>Text</p>
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="outline-none border border-solid border-[#CCCCCC] mt-3"
        />
        <button
          type="submit"
          className="w-full mt-2 p-2 bg-[#3674B2] rounded-md text-white"
        >
          Submit
        </button>
      </form>
    </aside>
  );
};

export default EditPanel;
