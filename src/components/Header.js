import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link, useMergeRefs } from "@chakra-ui/react";

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
  const proLinkRef = useRef();
  const conLinkRef = useRef();
  const [path, setPath] = useState("/");
  const [scrollTo, setScrollTo] = useState();
  const [prevScrollPos, setPrevScrollPos] = useState(150);
  const [visible, setVisible] = useState(true);

  const handleClick = (anchor) => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const proClickHandler = (e) => {
    e.preventDefault();
    const formattedText = proLinkRef.current.innerText.toLowerCase();
    setScrollTo(formattedText);
    setPath(`#${formattedText}`);
  };

  const conClickHandler = (e) => {
    e.preventDefault();
    const formattedText = conLinkRef.current.innerText
      .toLowerCase()
      .split(" ")
      .join("");

    const formattedPath = conLinkRef.current.innerText
      .toLowerCase()
      .split(" ")
      .join("-");

    setPath(`#${formattedPath}`);
    setScrollTo(formattedText);
  };

  useEffect(() => {
    handleClick(scrollTo);
    // replacing the url
    window.history.replaceState(null, null, path);
  }, [path]);

  const controlNavbar = () => {
    const currScrollPos = window.scrollY;
    console.log(currScrollPos);

    if (currScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    // clean up function
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform={visible ? "translateY(0)" : "translateY(-200px)"}
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
            <HStack gap="15px">
              {socials.map((social) => (
                <Link href={social.url} color="white" key={social.url}>
                  {<FontAwesomeIcon icon={social.icon} size="xl" />}
                </Link>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={20}>
              {/* Add links to Projects and Contact me section */}
              <a href={path} ref={proLinkRef} onClick={proClickHandler}>
                Projects
              </a>
              <a href={path} ref={conLinkRef} onClick={conClickHandler}>
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
