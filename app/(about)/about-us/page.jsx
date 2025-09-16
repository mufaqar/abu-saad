import About from "@/components/about/About";
import Experience from "@/components/about/Experience";
import Experience2 from "@/components/about/Experience2";
import Pricing from "@/components/about/Pricing";
import Process from "@/components/common/Process";
import PageTitle from "@/components/common/PageTitle";
import Copyright2 from "@/components/footers/Copyright2";
import Footer2 from "@/components/footers/Footer2";
import Header1 from "@/components/headers/Header1";
import React from "react";
export const metadata = {
  title: "About Us || Zingbox – Wind & Solar Energy React Nextjs Template",
  description: "Zingbox – Wind & Solar Energy React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div className="sidebar-right header-style-2 topbar-style-1 menu-has-search header-fixed">
        <div id="wrapper" className="animsition" style={{ opacity: 1 }}>
          <div id="page" className="">
            <Header1 />
            <div id="main-content-home" className="site-main clearfix">
              <PageTitle />
              <About />
              <Experience />
              <div
                className="themesflat-spacer clearfix"
                data-desktop={138}
                data-mobile={170}
                data-smobile={320}
              />
              <Pricing />
              <Experience2 />
              <Process />
            </div>
            <Footer2 />
            <Copyright2 />
          </div>
        </div>
      </div>
    </>
  );
}
