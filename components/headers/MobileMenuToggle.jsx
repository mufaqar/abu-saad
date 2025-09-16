"use client";
import toggleMobilemenu from "@/utlis/toggleMobilemenu";
import React from "react";

export default function MobileMenuToggle() {
  return (
    <div className="mobile-button" onClick={toggleMobilemenu}>
      <span />
    </div>
  );
}
