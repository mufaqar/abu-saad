import PageTitle from "@/components/common/PageTitle";
import Copyright2 from "@/components/footers/Copyright2";
import Footer2 from "@/components/footers/Footer2";
import Header1 from "@/components/headers/Header1";

import ProjectDetails from "@/components/project/ProjectDetails";
import RelatedProjects from "@/components/project/RelatedProjects";

import React from "react";
export const metadata = {
  title:
    "Project Details || Zingbox – Wind & Solar Energy React Nextjs Template",
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
              <PageTitle pageName="Project Details" />
              <div className="container">
                <ProjectDetails />
                <RelatedProjects />
              </div>
            </div>
            <Footer2 />
            <Copyright2 />
          </div>
        </div>
      </div>
    </>
  );
}
