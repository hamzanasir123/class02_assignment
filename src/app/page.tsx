
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Link from "next/link";

export default function Home() {
  return (
   <>
   <Header/>
   <div
   className="h-screen w-full bg-slate-200 text-center "
   >
     <p
    className="text-9xl font-mono"
    >
      <br/>
      Hi<br/>This Is Hero Section</p>
   </div>
   <div
   className="h-screen w-full bg-slate-200 text-center text-3xl font-mono"
   >
    <h1
    id="about"
    className="text-6xl font-mono"
    >About Me</h1>
    <br/>
    <p>
    I am a passionate AI enthusiast with expertise in Web3, Metaverse, and
        Generative AI,<br/> currently honing my skills under the guidance of <b className="bg-orange-400"> Sir Hamza Alvi</b>
        <br/> My journey is fueled by curiosity and a desire to innovate
        through technology.<br/> I strive to create impactful digital experiences
        that bridge the gap between creativity and technology.<br/>
    </p>
    <p className="w-full text-center bg-slate-200 font-mono font-bold text-2xl">
        
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <span className="text-center text-7xl font-mono" id="contact">Contact Me</span>
        <br/>
        I’m always excited to connect and collaborate! Whether you have a
        project in mind,
        <br /> want to ask a question, or just want to say hello,
        <br /> feel free to reach out using any of the methods below.
        <br /> I’ll do my best to respond as soon as possible.
        <br /> Email: <span className="bg-orange-400">hk435981@gmail.com</span>
        <br /> LinkedIn:{" "}
        <Link
          href={"https://www.linkedin.com/in/hamza-nasir-bb02142b5/"}
          target="_blank"
          className="bg-orange-400 rounded-sm "
        >
          Visit
        </Link>{" "}
        <br /> Phone: <span className="bg-orange-400">03122449908</span>.
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </p>
   </div>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <Footer/>
   </>
  );
}
