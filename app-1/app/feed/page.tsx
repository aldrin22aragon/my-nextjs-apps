import Link from "next/link";
import React from "react";

export default function Feeds() {
    return (
        <div>
            Feeds
            <Link href={`/photo/${232}`}>Open the photo</Link>
        </div>
    );
}
