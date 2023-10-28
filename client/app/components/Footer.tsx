'use client'

import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="mt-auto">
        <div className="bg-darkColor text-center">
            <div className="flex justify-center">
                <div className="px-10 text-textColor">
                    <Link href="https://github.com/re4dev/fisch-quiz" target="_blank">Github</Link>
                </div>
                <div className="pr-10 text-textColor">
                    <Link href="/contact">Kontakt</Link>
                </div>
                <div className="pr-10 text-textColor">
                    <Link href="/">Changelog</Link>
                </div>
            </div>
            <div className="px-10 text-textColor">
                    <p>© 2023 Fisch-Quiz. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
 );
};

export default Footer;