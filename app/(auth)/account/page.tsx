"use client";
import Header from "@/components/shared/Header";
import UserActionsSideBar from "@/components/shared/UserActionsSideBar";
import UserActionMobileSideBar from "@/components/ui/UserActionSideBar/Mobile/UserActionMobileSideBar";
import { Metadata } from "next";
import Link from "next/link";

// export const metadata: Metadata = {
//   title: "Account - VALORA",
//   description:
//     "Manage your VALORA account effortlessly with our comprehensive account overview, featuring secure login, registration, and personalized user information.",
// };

export default function page() {
  return (
    <div>
      <Header />
      <UserActionsSideBar />
      <UserActionMobileSideBar />

      <div className="bg-primary w-screen h-screen flex items-center pt-[4.7rem] px-12 max-md:px-5">
        <div className="w-full">
          <div className="space-y-4">
            <h2 className=" font-playfair">Hello Anon</h2>
            <div className="flex md:space-x-[10rem] max-md:justify-between">
              <p className="uppercase">Welcome to your account</p>
              <Link href="/account/logout" className=" underline">
                Logout
              </Link>
            </div>
          </div>
        </div>

        {/* <div className="flex-1">2</div> */}
      </div>
    </div>
  );
}
