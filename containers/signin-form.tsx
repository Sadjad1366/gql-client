"use client";

import { Button } from "@/components/btn";
import { Input } from "@/components/input";
import { signinMutation } from "@/gql/mutations/signin";
import { classNames } from "@/utils/classname";
import { setToken } from "@/utils/token";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import React from "react";

export const SigninForm: React.FC = () => {
  const [values, setValues] = React.useState<IAuthInput>({
    email: "",
    password: "",
  });
  const {push} = useRouter();
  const [signin, { loading }] = useMutation<ISigninResDto>(signinMutation);

  const onChange: (
    _: keyof IAuthInput
  ) => React.ChangeEventHandler<HTMLInputElement> = (field) => {
    return (event) => {
      const value = event.target.value;
      const newValues: IAuthInput = { ...values };
      newValues[field] = value;
      setValues(newValues);
    };
  }
  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      console.log(values);
      const response = await signin({ variables: { input: values } });
     if(!response.data?.signin.token) return;
     setToken(response.data.signin.token);
     push("/");

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className={classNames(
        "bg-white border border-slate-300 rounded-lg shadow-lg px-5 py-4",
        " w-full max-w-[500px]",
        "space-y-4"
      )}
    >
      <p className="text-lg font-semibold">Signin</p>
      <Input label="Email" type="email" onChange={onChange("email")} />
      <Input label="Password" type="password" onChange={onChange("password")} />
      <Button type="submit" disabled={loading}>
        Signin
      </Button>
    </form>
  );
};
