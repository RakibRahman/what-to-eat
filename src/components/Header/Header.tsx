import { Box } from "@chakra-ui/react";
import React from "react";
import { Hero } from "./Hero";
import { Navbar } from "./Navbar";

export const Header = () => {
    return (
        <Box bg="#0C1712" px={[5, 15, 40]}>
            <Navbar />
            <Hero />
        </Box>
    );
};
