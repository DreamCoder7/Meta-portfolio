import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const linkRef = useRef();
  const [path, setPath] = useState({ path: "/" });

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    console.log(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const linkClickHandler = (e) => {
    e.preventDefault();
    const formattedLinkText = e.target.innerText
      ?.toLowerCase()
      .split(" ")
      .join("-");
    const updatedPath = {
      ...path,
      path: formattedLinkText,
    };
    setPath(updatedPath);
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex="999"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={20}
          py={10}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack gap="10px">
              {socials.map((social) => (
                <Link href={social.url} color="white" key={social.url}>
                  {<FontAwesomeIcon icon={social.icon} size="lg" />}
                </Link>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a href={path.path} ref={linkRef} onClick={linkClickHandler}>
                Projects
              </a>
              <a href={path.path} ref={linkRef} onClick={linkClickHandler}>
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
