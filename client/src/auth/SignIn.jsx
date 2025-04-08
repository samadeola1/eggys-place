import React, { useState } from "react";
import Input from "../components/Input";
import MyButton from "../components/MyButton";
import { Link } from "react-router-dom";
import visibilityOn from "../assets/visibility_on.svg";
import visibilityOff from "../assets/visibility_off.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "../utils/ValidationSchema";
import { toast } from "sonner";
import LoadingRing from "../utils/Loader";

const baseUrl = import.meta.env.VITE_API_URL;

const SignIn = ({ switchToHome, switchToSignUp }) => {
  const [isReveal, setIsReveal] = useState(false);
  function togglePwd() {
    setIsReveal((prev) => !prev);
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(signInSchema),
  });
  const onSubmit = async (data) => {
    try {
      const req = await fetch(`${baseUrl}/api/auth/sign-in`, {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const res = await req.json();
      console.log(res);
      if (!res.success) {
        toast.error(res.errMsg);
        // setIsClicked(true);
        reset();
      }
      if (res.success) {
        toast.success(res.message);
        localStorage.setItem("customerToken", res.user.token);
        reset();
        switchToHome();
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      // setIsClicked(false);
    }
  };
  const btnText = isSubmitting ? <LoadingRing /> : "sign in";
  return (
    <>
      <main>
        <div className="text-[#FBFBFB]">
          <h6 className="text-[#FBFBFB] font-[500] text-[26px] pt-8">
            Welcome Back
          </h6>
          <p className="text-[14px] font-[400] pb-6 ">
            Sign In To Your Account{" "}
          </p>
        </div>
        <form
          className="flex flex-col gap-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <Input
              type="email"
              placeholder="Email"
              name="email"
              {...register("email")}
            />
            <p className="text-red-600">{errors.email?.message}</p>
          </div>
          <div className="relative w-full">
            <Input
              type={isReveal ? "text" : "password"}
              placeholder="Password"
              name="password"
              {...register("password")}
            />
            <img
              className=" absolute top-2.5  left-[90%]"
              src={isReveal ? visibilityOff : visibilityOn}
              alt="toggle-password-img"
              onClick={togglePwd}
            />
            <p className="text-red-600">{errors.password?.message}</p>
          </div>

          <Link
            to="/forgot-password"
            className="text-[#FBFBFB] text-[10px] font[400] underline"
          >
            Forgot Password?
          </Link>

          <MyButton
            text={btnText}
            disabled={isSubmitting}
            className="w-full h-[40px] font-[500] text-[20px] "
          />
        </form>
        <p className="py-4">
          <span className="text-[15px] font-[400] text-[#FBFBFB] ">
            Don't have an account?
          </span>{" "}
          <span
            className="text-[#B67B0F] font-[700] text-[16px] cursor-pointer ps-0.5"
            onClick={switchToSignUp}
          >
            Sign up
          </span>
        </p>
      </main>
    </>
  );
};

export default SignIn;
