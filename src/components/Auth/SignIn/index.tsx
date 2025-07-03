"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { supabase } from "@/app/api/supabase/supabase";
import Logo from "@/components/Layout/Header/Logo";
import Loader from "@/components/Common/Loader";
import { log } from "console";

const SignIn = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const loginUser = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const { email, password } = loginData;

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      toast.error(error.message);
      console.log(error);
    } else {
      toast.success("Login successful");
      // router.push("/dashboard");
                router.push("/");
                alert('Log in successful')
              console.log('login successful')
    }

    setLoading(false);
  };

  const handleGoogleSignIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({ provider: "google" });
    if (error) toast.error(error.message);
  };

  return (
      <div className="min-h-screen flex items-center justify-center bg-[#0d0d0d] px-4">
    <div className="max-w-md w-full mx-auto p-6 bg-[#1f1f1f] rounded-lg shadow-lg">
      <div className="text-center mb-6">
        <Logo />
        <h2 className="mt-4 text-lg font-semibold text-white">
          Enter your email and password
        </h2>
        <p className="text-sm text-gray-400">
          or sign in using <span className="text-primary">Google</span>
        </p>
      </div>

      <button
        onClick={handleGoogleSignIn}
        className="w-full bg-white text-black font-medium py-2 rounded-md mb-4 hover:bg-gray-200 transition"
      >
        Sign in with Google
      </button>

      <div className="flex items-center my-6">
        <hr className="flex-grow border-gray-600" />
        <span className="mx-4 text-gray-400 text-sm">OR</span>
        <hr className="flex-grow border-gray-600" />
      </div>

      <form onSubmit={loginUser} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={loginData.email}
          onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
          className="w-full p-3 rounded-md bg-transparent border border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:border-primary"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={loginData.password}
          onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
          className="w-full p-3 rounded-md bg-transparent border border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:border-primary"
          required
        />
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-md font-medium hover:bg-opacity-80 transition"
        >
          Sign In {loading && <Loader />}
        </button>
      </form>

      <p className="mt-4 text-center text-sm text-gray-400">
        Don’t have an account?{" "}
        <a href="/signup" className="text-primary hover:underline">
          Sign Up
        </a>
      </p>
    </div>
    </div>
  );
};

export default SignIn;
