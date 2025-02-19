"use client";

import { Button } from "@/components/btn";
import { Input } from "@/components/input";
import { classNames } from "@/utils/classname";
import React from "react";

interface IFormValue {
  email: string;
  password: string;
}

export const SigninForm: React.FC = () => {
  const [values, setValues] = React.useState<IFormValue>({
    email: "",
    password: "",
  });
  const onChange: (_: keyof IFormValue) => React.ChangeEventHandler<HTMLInputElement> = (field) => {
      return (event) =>{
            const value = event.target.value;
            const newValues: IFormValue = {...values};
            newValues[field] = value;
            setValues(newValues);
      }
  }
  return (
    <section
      className={classNames(
        "bg-white border border-slate-300 rounded-lg shadow-lg px-5 py-4",
        " w-full max-w-[500px]",
        "space-y-4"
      )}
    >
      <p className="text-lg font-semibold">Signin</p>
      <Input label="Email" onChange={onChange("email")} />
      <Input label="Password" onChange = {onChange("password")} />
      <Button>Signin</Button>
    </section>
  );
};
