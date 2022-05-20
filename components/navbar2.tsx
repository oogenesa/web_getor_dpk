import React from "react";
import logo from "../assets/image/gerjator_icon.png";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-align py-4 ">
      <div className="px-4">
        <Link href="/">
          <a>
            <img
              src="https://1.bp.blogspot.com/-KSsXbkexOaM/W3fUI2ATy4I/AAAAAAAAAD4/NwbesXRFtrwrlprfDn4lI1N3RFWbQq5wQCLcBGAs/s320/GERJATOR.JPG"
              width={40}
            ></img>
          </a>
        </Link>
      </div>
      <div className="flex flex-row ">
        <p className="text-2xl px-2 hover:underline">
          <Link href="/about">
            <a>Sejarah</a>
          </Link>
        </p>
        <p className="text-2xl px-2 ">Kegiatan</p>
        <p className="text-2xl px-2">Tiket</p>
        <p className="text-2xl px-2">Lainnya</p>
      </div>

      <div className="flex ml-2 px-4">
        <a
          href="/api/logout"
          className="rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mx-2 border-2 border-black"
        >
          Warta Jemaat
        </a>
        <a
          href="/api/login"
          className="rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4"
        >
          Login
        </a>
      </div>
    </nav>
  );
}
