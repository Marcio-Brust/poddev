import { ComponentProps } from "react";

type IPropsButton = ComponentProps<"button">;

export const Button = ({ ...props }: IPropsButton) => {
  return <button {...props}>Enviar</button>;
};
