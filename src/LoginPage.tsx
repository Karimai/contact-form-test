"use client";

import * as React from "react";
import { LoginHero } from "./LoginInfo";
import { LoginForm } from "./LoginForm";
import { SignupForm } from "./SignupForm"
export const LoginPage: React.FC = () => {
  const [isLogin, setIsLogin] = React.useState(true);

  return (
    <main className="flex overflow-hidden flex-col justify-center items-center px-20 py-32 bg-indigo-500 max-md:px-5 max-md:py-24">
      <div className="overflow-hidden w-full bg-white border border-solid border-zinc-300 max-w-[1920px] max-md:max-w-full">
        <div className="pl-20 bg-indigo-500 bg-opacity-50 max-md:pl-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <LoginHero />
            {
              isLogin ? (
                <LoginForm toggleForm={() => setIsLogin(false)} />
              ) : (<SignupForm toggleForm={() => setIsLogin(true)} />)
            }
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
