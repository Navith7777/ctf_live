"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { supabase } from "@/app/api/supabase/supabase";
import Logo from "@/components/Layout/Header/Logo";
import Loader from "@/components/Common/Loader";

const SignUp = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { name, email, password } = formData;

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name },
      },
    });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Signup successful. Check your email to verify.");
      router.push("/signin");
    }

    setLoading(false);
  };

  const handleGoogleSignUp = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/auth/callback`, 
      },
    });

    if (error) toast.error(error.message);
  };

  return (
  <div className="min-h-screen flex items-center justify-center bg-[#0d0d0d] px-4">
      <div className="max-w-md w-full mx-auto p-6 bg-[#1f1f1f] rounded-lg shadow-lg"> 
        <div className="text-center mb-6">
        <Logo />
        <h2 className="mt-4 text-lg font-semibold text-white">
          Create an account using your email
        </h2>
        <p className="text-sm text-gray-400">
          or sign up using <span className="text-primary">Google</span>
        </p>
      </div>

      <button
        onClick={handleGoogleSignUp}
        className="w-full bg-white text-black font-medium py-2 rounded-md mb-4 hover:bg-gray-200 transition"
      >
        Sign up with Google
      </button>

      <div className="flex items-center my-6">
        <hr className="flex-grow border-gray-600" />
        <span className="mx-4 text-gray-400 text-sm">OR</span>
        <hr className="flex-grow border-gray-600" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 rounded-md bg-transparent border border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:border-primary"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 rounded-md bg-transparent border border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:border-primary"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-3 rounded-md bg-transparent border border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:border-primary"
          required
        />

        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-md font-medium hover:bg-opacity-80 transition"
        >
          {loading ? <Loader /> : "Sign Up"}
        </button>
      </form>

      <p className="mt-4 text-center text-sm text-gray-400">
        Already have an account?{" "}
        <a href="/signin" className="text-primary hover:underline">
          Sign In
        </a>
      </p>
    </div>
    </div>
  );
};

export default SignUp;
