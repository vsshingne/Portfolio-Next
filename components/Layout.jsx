import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";
import ParticlesContainer from "../components/ParticlesContainer";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <main
      className={`page text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative overflow-hidden`}
    >
      {/* metadata */}
      <Head>
        <title>Vaibhav Shingne | Portfolio</title>
        <meta
          name="description"
          content="Vaibhav Shingne is a passionate Software Engineering student with strong skills in data structures, algorithms, and system design. Experienced in developing AI-driven and full-stack solutions."
        />
        <meta
          name="keywords"
          content="react, next, nextjs, python, cpp, ai, machine-learning, full-stack, developer, student, portfolio, mlops, docker, kubernetes, linux-kernel"
        />
        <meta name="author" content="Vaibhav Shingne" />
        <meta name="theme-color" content="#f13024" />
      </Head>

      {/* Particles - positioned behind video */}
      <div className="fixed top-0 left-0 w-full h-full -z-20 overflow-hidden">
        <ParticlesContainer />
      </div>

      {/* Background Video */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
        >
          <source src="/background-video.mp4" type="video/mp4" />
          <source src="/background-video.webm" type="video/webm" />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <TopLeftImg />
      <Nav />
      <Header />

      {/* main content */}
      {children}
    </main>
  );
};

export default Layout;
