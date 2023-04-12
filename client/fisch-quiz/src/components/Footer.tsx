import { Grid, Container, Spacer, Text } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <Container justify="center" css={{bottom: "0", position: "fixed", height: "auto"}} fluid>
        <Grid.Container gap={1} justify="center">
            <Grid>
                <Link href="#">Github</Link>
            </Grid>
            <Spacer x={1} />
            <Grid>
                <Link href="#">Impressum</Link>
            </Grid>
            <Spacer x={1} />
            <Grid>
                <Link href="#">Datenschutz</Link>
            </Grid>
        </Grid.Container>
        <Grid.Container gap={1} justify="center">
            <Grid>
                <Text>© 2023 Fisch-Quiz. All Rights Reserved.</Text>
            </Grid>
        </Grid.Container>
    </Container>
    
  );
};

export default Footer;
