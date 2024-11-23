"use client";

import React from "react";
import Link from "next/link";

import { useRouter } from "next/navigation";

export default function LoginPage() {


  const router = useRouter();

  // const handleSubmit = (event: React.FormEvent) => {
  //   event.preventDefault();
  //   // Add your authentication logic here
  //   router.push("/recruiter/dashboard");
  // };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg dark:bg-gray-800">
        <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-white">Welcome Back!</h1>
        <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-2">
          Sign in to your account
        </p>
        <form className="mt-6">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-600"
            onClick={() => router.push("/recruiter/dashboard")}
          >
            Sign In
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
          New?{" "}
          <Link href="/recruiter/register">
            <span className="text-blue-500 hover:underline">Register for Free</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
