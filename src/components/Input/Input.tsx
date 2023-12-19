import { ComponentProps, forwardRef } from "react";
import { Button } from "../Button/Button";

type IPropsInput = ComponentProps<"input"> & {
  text: string;
  id: string;
  textError: string | undefined;
};

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, IPropsInput>(
  ({ id, text, textError, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-4">
        <label htmlFor={id} className="max-sm:text-[12px]  text-[#fff]">
          {text}
        </label>
        <div
          className={`${
            textError ? "border-red-500 border" : "border-none"
          } p-1 rounded-2xl  bg-[#2c344b] flex justify-between items-center`}
        >
          <input
            className="outline-none text-[#fff]  bg-[#2c344b] ml-4 w-full"
            type="text"
            id={id}
            ref={ref}
            {...props}
          />
          <Button className="bg-[#1ed760] hover:bg-[#32ff5f] rounded-2xl w-24 h-8 font-bold max-lg:hidden" />
        </div>
        <span className={`${textError ? "block" : "hidden"} text-red-500`}>
          {textError}
        </span>
        <Button className="bg-[#1ed760] hover:bg-[#32ff5f] rounded-2xl p-1 font-bold lg:hidden" />
      </div>
    );
  }
);
