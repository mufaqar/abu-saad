import Pricing from "@/components/about/Pricing";
import PageTitle from "@/components/common/PageTitle";
import Copyright2 from "@/components/footers/Copyright2";
import Footer2 from "@/components/footers/Footer2";
import Header1 from "@/components/headers/Header1";
import Facts from "@/components/pricing/Facts";
import Services from "@/components/pricing/Services";
import React from "react";
export const metadata = {
  title: "Pricing || Zingbox – Wind & Solar Energy React Nextjs Template",
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
              <PageTitle pageName="Pricing" />
              <div
                className="themesflat-spacer clearfix"
                data-desktop={138}
                data-mobile={60}
                data-smobile={60}
              />

              <Pricing />
              <Services />
              <Facts />
            </div>
            <Footer2 />
            <Copyright2 />
          </div>
        </div>
      </div>
    </>
  );
}
