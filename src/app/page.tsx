"use client";

import { SvgLogo } from "@/components/SvgLogo/SvgLogo";
import { Input } from "@/components/Input/Input";
import Image from "next/image";
import spotify from "../../public/assets/img/spotify.png";
import apple from "../../public/assets/img/apple.png";
import deezer from "../../public/assets/img/deezer.png";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const registerEmailSchema = z.object({
  email: z
    .string()
    .min(1, "Campo vazio.")
    .email("E-email informado não é válido.")
    .toLowerCase(),
});

type IregisterEmail = z.infer<typeof registerEmailSchema>;

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IregisterEmail>({
    resolver: zodResolver(registerEmailSchema),
  });

  const registerEmail = (email: IregisterEmail) => {
    console.log(email);
    reset();
  };

  return (
    <main className="flex min-h-screen  flex-2 justify-start p-16 bg-[#121a2a] max-lg:bg-center">
      <section className="w-[600px]">
        <SvgLogo />
        <div className="mt-32 grid gap-10">
          <h1 className="text-[#fff] text-5xl font-bold max-lg:text-2xl">
            Toda semana um bate papo sobre tecnologia.
          </h1>
          <p className="text-[#fff] max-sm:text-[12px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit omnis nisi magni architecto. Modi commodi nulla autem
            in delectus doloremque ab? Aliquam quae ea illo nulla quos soluta.
            Nam, laborum.
          </p>
          <form onSubmit={handleSubmit(registerEmail)}>
            <Input
              text="Seja notificado quando sair um episódio"
              id="label"
              placeholder="Digite seu email"
              type="email"
              {...register("email")}
              textError={errors.email && errors.email.message}
            />
          </form>
        </div>
        <div className="mt-20 flex  justify-start items-center gap-4 ">
          <Image
            className="max-sm:w-16"
            width={100}
            height={0}
            src={spotify}
            alt="img"
            priority
          />
          <Image
            className="max-sm:w-16"
            width={100}
            height={0}
            src={apple}
            alt="img"
            priority
          />
          <Image
            className="max-sm:w-16"
            width={100}
            height={0}
            src={deezer}
            alt="img"
            priority
          />
        </div>
      </section>
    </main>
  );
}
