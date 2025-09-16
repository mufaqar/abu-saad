import PageTitle from "@/components/common/PageTitle";

import Experience from "@/components/faq/Experience";
import Faq from "@/components/faq/Faq";
import Process from "@/components/faq/Process";
import Copyright2 from "@/components/footers/Copyright2";
import Footer2 from "@/components/footers/Footer2";
import Header1 from "@/components/headers/Header1";

import React from "react";
export const metadata = {
  title: "FAQS || Zingbox – Wind & Solar Energy React Nextjs Template",
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
              <PageTitle pageName="FAQ" />
              <Faq />
              <Experience />
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
