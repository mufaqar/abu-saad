import Blogs from "@/components/blog/Blogs";
import PageTitle from "@/components/common/PageTitle";
import Copyright from "@/components/footers/Copyright";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import React from "react";
export const metadata = {
  title: "Blogs || Zingbox – Wind & Solar Energy React Nextjs Template",
  description: "Zingbox – Wind & Solar Energy React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div className="sidebar-right header-style-2 topbar-style-1 menu-has-search header-fixed">
        <div id="wrapper" className="animsition" style={{ opacity: 1 }}>
          <div id="page" className="">
            <Header1 />
            <PageTitle pageName="Blogs" />
            <div id="main-content" className="site-main clearfix">
              <Blogs />
            </div>
            <Footer1 />
            <Copyright />
          </div>
        </div>
      </div>
    </>
  );
}
