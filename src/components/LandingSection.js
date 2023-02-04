import React from "react";
import { Avatar, VStack, Heading } from "@chakra-ui/react";

import FullScreenSection from "./FullScreenSection";
import profile from "../images/avatar.jpg";

const bio = {
  gretting: "Hello, I'm Abreham",
  about: {
    about1: "A frontend developer",
    about2: "specialised in React",
  },
};

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => {
  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#2A4365"
    >
      <VStack>
        <Avatar
          src={profile}
          name="Abreham"
          width="5rem"
          height="5rem"
          borderRadius="50%"
        />
        <Heading as="h6" size="2xl">
          Hello, I'm Abreham
        </Heading>
        <Heading as="h1" size="4xl" color="white">
          A frontend developer
        </Heading>
        <Heading as="h2" size="3xl" color="white">
          specialised in React
        </Heading>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
