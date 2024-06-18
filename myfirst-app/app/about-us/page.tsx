import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About US",
  };

export default function about(){
    console.log("hi");
    return <h1>about-US</h1>
}