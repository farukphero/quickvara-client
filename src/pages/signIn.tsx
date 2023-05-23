import { AuthContext } from "@/Context/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Card, Typography, Input, Checkbox } from "@material-tailwind/react";
import { createHash } from "crypto";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import lottiImage from "../image/66268-signinanimation (1).json";
import Lottie from "lottie-react";
import { StateContext } from "@/Context/StateContext/StateContext";
import Head from "next/head";
type FormValues = {
  email: string | number;
  password: string | number;
  confirmPassword: string | number;
};
const SignIn = () => {
  const { language }: any = useContext(StateContext);
  const [signInError, setSignInError] = useState("");
  const [signInErrorBan, setSignInErrorBan] = useState("");
  const [passHidden, setPassHidden] = useState(true);
  const {
    accountLogIn,
    providerGoogleLogIn,
    setUserInfo,
    signUpUserInfo,
  }: any = useContext(AuthContext);
  // const provider = new GoogleAuthProvider();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  // const handleLogin = (event: any) => {
  //   accountLogIn(event.target.email.value, event.target.password.value)
  //     .then((result: any) => {
  //       const user = result.user;
  //       // setLogInUserEmail(data.email);
  //       // toast.success('Login success')
  //       router.push("/");
  //     })
  //     .catch((error: any) => setSignInError(error.message && error.code));
  // };
  const handleSignIn = async (data: any) => {
    const info = {
      email: data.email,
      password: data.password,
    };
    const res = await fetch("http://localhost:5000/api/v1/users/signIn", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(info),
    });
    const result = await res.json();

    setSignInError(result?.error?.eng);
    setSignInErrorBan(result?.error?.ban);
    const token = result?.data?.token;
    if (token) {
      localStorage.setItem("token", token);
      localStorage.setItem("email", result?.data?.user.email);
      localStorage.setItem("firstName", result?.data?.user.firstName);
      localStorage.setItem("lastName", result?.data?.user.lastName);
      // setUserInfo(result?.data?.user);
      const { query }:any = router;
      const nextPage = query.next || "/";
      router.push(nextPage);
    }
  };

  // const handleGoogleLogin = () => {
  //   providerGoogleLogIn(provider)
  //     .then((result: any) => {
  //       const user = result.user;
  //       // setLogInUserEmail(user.email);
  //       router.push("/");
  //     })
  //     .catch((error: any) => setSignInError(error.message));
  // };
  const handle = () => {
    setPassHidden(!passHidden);
  };
  const lang = localStorage.getItem("lan");
  return (
    <>
      <Head>
        <title>To-Leet - Sign in</title>
      </Head>
      <section className="lg:w-10/12 lg:mx-auto grid lg:grid-cols-2 gap-20 my-10 lg:my-24">
        <div className="hidden lg:flex">
          <Lottie
            className="-mt-14 scale-110"
            animationData={lottiImage}
            loop={true}
          ></Lottie>
        </div>
        <Card className="w-10/12 mx-auto" color="transparent">
          {lang ? (
            <Typography className="px-4 mt-2" variant="h4" color="blue-gray">
              Sign In
            </Typography>
          ) : (
            <Typography className="px-4 mt-2" variant="h4" color="blue-gray">
              সাইন ইন
            </Typography>
          )}
          {lang ? (
            <Typography color="gray" className="mt-1 font-normal px-4">
              Enter your registered email and password to signin.
            </Typography>
          ) : (
            <Typography color="gray" className="mt-1 font-normal px-4 text-sm">
              সাইন ইন করতে আপনার নিবন্ধিত ইমেল এবং পাসওয়ার্ড লিখুন।
            </Typography>
          )}
          <div className="mt-8 mb-2 w-full px-4">
            <form
              onSubmit={handleSubmit(handleSignIn)}
              className="mb-4 flex flex-col gap-6 relative"
            >
              <Input
                label={lang ? "Email*" : "ইমেইল*"}
                {...register("email", { required: true })}
              />
              <Input
                type={passHidden ? "password" : "text"}
                label={lang ? "Password*" : "পাসওয়ার্ড*"}
                {...register("password", { required: true })}
              />{" "}
              <div
                className="cursor-pointer absolute right-4 top-[71px]"
                onClick={handle}
              >
                {passHidden ? (
                  <FaEyeSlash className="text-2xl"></FaEyeSlash>
                ) : (
                  <FaEye className="text-2xl"></FaEye>
                )}
              </div>
              <p>abc1Aomar&</p>
              {errors.email && errors.password && (
                <span className="text-red-500 ">
                  {lang
                    ? "All These field is required"
                    : "আপনাকে অবশ্যই ইমেইল এবং পাসওয়ার্ড দিতে হবে।"}{" "}
                </span>
              )}
              <Link href={"/reset"}>
                {lang ? (
                  <h4 className="hover:underline">Forgot password?</h4>
                ) : (
                  <h4 className="text-sm hover:underline">
                    {" "}
                    পাসওয়ার্ড ভুলে গেছেন?
                  </h4>
                )}
              </Link>
              <div className="flex gap-2">
                {" "}
                {lang ? (
                  <p className="text-red-400">{signInError}</p>
                ) : (
                  <p className="text-red-400">{signInErrorBan}</p>
                )}
              </div>
              {lang ? (
                <button className="w-full bg-gradient-to-r from-success via-accent to-success py-2 rounded-lg font-semibold text-gray-800">
                  Sign In
                </button>
              ) : (
                <button className="w-full bg-gradient-to-r from-success via-accent to-success py-2 rounded-lg font-semibold text-gray-800">
                  সাইন ইন
                </button>
              )}
            </form>

            {lang ? (
              <Typography color="gray" className="mt-4 text-center font-normal">
                Already have an account?{" "}
                <Link
                  href="/signUp"
                  className="font-medium text-blue-500 transition-colors hover:text-blue-700"
                >
                  Sign Up
                </Link>
              </Typography>
            ) : (
              <Typography color="gray" className="mt-4 text-center font-normal">
                আপনার কি অ্যাকাউন্ট আছে?{" "}
                <Link
                  href="/signUp"
                  className="font-medium text-blue-500 transition-colors hover:text-blue-700"
                >
                  সাইন আপ
                </Link>
              </Typography>
            )}
          </div>
        </Card>
      </section>
    </>
  );
};

export default SignIn;
