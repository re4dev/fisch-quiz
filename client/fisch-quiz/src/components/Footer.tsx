
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="mt-auto justify-center w-fit mx-auto">
        {/* <Grid.Container gap={1} justify="center">
            <Grid>
                <Link href="https://github.com/re4dev/fisch-quiz" target="_blank">Github</Link>
            </Grid>
            <Spacer x={1} />
            <Grid>
                <Link href="#">Impressum</Link>
            </Grid>
            <Spacer x={1} />
            <Grid>
                <Link href="#">Datenschutz</Link>
            </Grid>
            <Spacer x={1} />
            <Grid>
                <Link href="/contact">Kontakt</Link>
            </Grid>
        </Grid.Container> */}
        <div>
                <p>© 2023 Fisch-Quiz. All Rights Reserved.</p>
        </div>
    </footer>
 );
};

export default Footer;