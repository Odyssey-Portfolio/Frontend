"use client";
import Button from "@/_components/AtomicComponents/Button";
import TextInput from "@/_components/AtomicComponents/TextInput";
import FM_Reveal from "@/_components/FramerMotion/FM_Reveal";
import { COLOR_PRIMARY, COLOR_SECONDARY } from "@/_constants/Colors";
import {
  FONT_LEXEND,
  FONTSTYLE_HEADING1,
  FONTSTYLE_SUBTEXT1,
} from "@/_constants/Fonts";
import { BAD_REQUEST, SUCCESS } from "@/_constants/ResponseCodes";
import { LoginFormFields } from "@/_models/AuthFormFields";
import { selectAuthData, selectIsLoading } from "@/_redux/auth/authSelector";
import { clearAuthData } from "@/_redux/auth/authSlice";
import { loginThunk } from "@/_redux/auth/authThunk";
import { setSnackbarMessage } from "@/_redux/snackbar/snackbarActions";
import { AppDispatch } from "@/_redux/store";
import { nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

export default function LoginPage() {
  const loginPageClassname = `flex flex-col mt-32 mx-24 mb-12   
                                items-center justify-between space-y-20`;
  return (
    <div className={loginPageClassname}>
      <HeadingText />
      <LoginForm />
    </div>
  );
}

function HeadingText() {
  const headingTextClassname = `text-center space-y-2`;
  const h1Classname = `${FONT_LEXEND.className} ${FONTSTYLE_HEADING1}`;
  const h2Classname = `${FONT_LEXEND.className} ${FONTSTYLE_SUBTEXT1}`;
  return (
    <FM_Reveal className={headingTextClassname}>
      <>
        <h1 className={h1Classname} style={{ color: COLOR_PRIMARY }}>
          Welcome back!
        </h1>
        <h6 className={h2Classname} style={{ color: COLOR_SECONDARY }}>
          Please login to continue.
        </h6>
      </>
    </FM_Reveal>
  );
}

function LoginForm() {
  const loginFormClassname = "space-y-5 w-96";
  const methods = useForm<LoginFormFields>();
  const dispatch = useDispatch<AppDispatch>();

  const isLoading = useSelector(selectIsLoading);
  const authData = useSelector(selectAuthData);
  const onSubmit = (data: LoginFormFields) => {
    console.log("Login data submitted:", data);
    dispatch(loginThunk(data));
  };

  useEffect(() => {
    if (
      (authData && authData.statusCode === SUCCESS) ||
      (authData && authData.statusCode === BAD_REQUEST)
    ) {
      dispatch(
        setSnackbarMessage({
          id: nanoid(),
          message: authData.message,
          type: authData.statusCode === SUCCESS ? "success" : "error",
        })
      );
    }
    return () => {
      dispatch(clearAuthData());
    };
  }, [authData]);

  return (
    <FormProvider {...methods}>
      <div className={loginFormClassname}>
        <TextInput
          label="Email"
          type="email"
          {...methods.register("email", { required: true })}
        />
        <TextInput
          label="Password"
          type="password"
          {...methods.register("password", { required: true })}
        />

        <Button
          label="Submit"
          isLoading={isLoading}
          onClick={methods.handleSubmit(onSubmit)}
        />
        <p className="text-sm text-center text-gray-600">
          Don’t have an account?
          <a href="/register" className="text-blue-600 hover:underline ml-1">
            Register here
          </a>
        </p>
      </div>
    </FormProvider>
  );
}
