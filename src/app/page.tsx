import Image from "next/image";
import Link from "next/link";
import React from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import Main from "./pages/home/page";
export default function Home() {
  // ESlint yes rules hain iska mtlb ye k ap k code ka error bta deta hy
// sources ka folder means src ka folder hy yes
// tailwind css ko use krna hy toh yes tailwind css ka ek frame work hy 
// tailwind block m components milenge bane banaye 
// tailwind css k sath apni custom css likh sakhte hain
// baki simple tailwind m ye hota hy bs simple class milti hain
// frame work or library se kia kam hota hy k ap k code ko asan kr deta hy
// frame work ek bara package hota hy or is m bht sari cheezen hoti hain
// baki library means k chota package hota hy
// bootstrap m ye hota hy k apko customize krna mushkil hota hy 
// router ko use isliye krte hain k ap advance  pakage use kr sakhte ho
// tailwind.configts ka kam ye hy agr m koi changes krna chata hun tailwind ki class use kr sakhta hun tailwind.configts m changes kr k
// postcss ka ye kam hy k har browser pr css use kr sakhte ho warna har browser k liye apko thori bht css change krni parti hy
// div ka tag means division name hota hain means k har section divide krna
// npm run dev --turbo ix`ska kam develepmont tez kr deta hy
// global k ander tailwind base ye krti hy k apki sari  base css hata deti hy css ki line bana rahi or sari defualt styling hata rahi hy
// text-gray-300	isne ek sath teen kam ek sath ho rahe
// achi seo k liyte html ka use achi krna hota hy ek page pr ek hi h1 use krna hota hy baki h2 or h3
// children jo hy wo apki pages ki jaga pr ayenge
// layoutysx m header ko call krna hy{header()} is tarha use hoga
// <header /> k tareeky ki tareeky ki tarha use karenge
// sb se phle header section add karenge seo k liye seo achi hogi
// nav ka use kr k navbar banane k liye use hoga
// link ka tag use kr k href dekr apko link krwa sakhte ho
// flex lagana zarori hy isse contect ek line m ajaega
// flex hamesha apne children ko dekhta hy
// justify ka kam ye hy horizontally move krna 
// justify center se dono beech m ajaenge
// justify-between se dono div alag alag chale jaega
// justify-round se ye hota hy dono ek kone m chale jate hain but end m thori jaga chorte hain

  return (
    <main>
      {/* <Header/> */}
      {/* <h1>Home Page</h1> */}
      {/* <Hero /> */}
      <Main />
    </main>
  );
}
