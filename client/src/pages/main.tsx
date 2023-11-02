import About from "./home/about";
import Hero from "./home/hero";
import Model from "./home/model";
import Contact from "./home/contact";
import Layout from "./screen/layout";

function Page() {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Model />
        <Contact />
      </Layout>
    </>
  );
}

export default Page;
