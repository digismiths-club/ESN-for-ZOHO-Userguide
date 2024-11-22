"use client";

import { useState } from "react";
import Link from "next/link"

export default function Navbar() {

    const [active, setActive] = useState(0);

    return (
        <div className="fixed bg-white justify-between shadow-lg flex w-full p-6 items-center">
            <Link onClick={()=>{setActive(0)}} href="/">
                <div className="text-2xl">Eisenhover Matrix Zoho</div>
            </Link>

            <div className="justify-self-end">
                <div className="flex gap-8">
                    <Link className={`hover:text-blue-700 ${active==1 && "underline underline-offset-4 text-blue-700"}`} onClick={()=>{setActive(1)}} href="/UsageSteps">
                        <h1>Usage Steps</h1>
                    </Link>
                    <Link className={`hover:text-blue-700 ${active==2 && "underline underline-offset-4 text-blue-700"}`} onClick={()=>{setActive(2)}} href="/GoogleApi">
                        <h1>Google API</h1>
                    </Link>
                    <Link className={`hover:text-blue-700 ${active==3 && "underline underline-offset-4 text-blue-700"}`} onClick={()=>{setActive(3)}} href="/Bug">
                        <h1>Report a bug</h1>
                    </Link>
                    <Link className={`hover:text-blue-700 ${active==4 && "underline underline-offset-4 text-blue-700"}`} onClick={()=>{setActive(4)}} href="/Contact">
                        <h1>Contact us</h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}