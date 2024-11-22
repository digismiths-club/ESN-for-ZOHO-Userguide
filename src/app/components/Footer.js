import React from "react"

export default function Footer(){
    return (
        <div className="border-2 flex flex-col gap-1 items-center py-3">
            <div>
                <h1>&#xA9;2024 Digismiths Digital Agency</h1>
            </div>
            <div className="flex gap-2">
                <a href="#">Privay</a>
                <a href="#">Terms & Conditions</a>
            </div>
        </div>
    )
}