import { ComponentProps } from "react";
import { Button } from "../Button/Button";

type IPropsInput = ComponentProps<"input"> & {
  text: string;
  id: string;
};

export const Input = ({ id, text, ...props }: IPropsInput) => {
  return (
    <div className="flex flex-col gap-4">
      <label htmlFor={id} className="max-sm:text-[12px]  text-[#fff]">
        {text}
      </label>
      <div className="p-1 rounded-2xl border-none bg-[#2c344b] flex justify-between items-center">
        <input
          className="outline-none text-[#fff]  bg-[#2c344b] ml-4"
          type="text"
          id={id}
          {...props}
        />
        <Button className="bg-[#1ed760] hover:bg-[#32ff5f] rounded-2xl w-24 h-8 font-bold max-lg:hidden" />
      </div>
      <Button className="bg-[#1ed760] hover:bg-[#32ff5f] rounded-2xl p-1 font-bold lg:hidden" />
    </div>
  );
};
