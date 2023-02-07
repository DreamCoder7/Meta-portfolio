import React from "react";
import {
  VStack,
  Heading,
  Box,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Select,
  Textarea,
  Button,
} from "@chakra-ui/react";

import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const ContactMeSection = () => {
  const { isLoading, response, submit } = useSubmit();
  //   const { onOpen } = useAlertContext();

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact Me
        </Heading>

        <Box p={6} rounded="md" w="80%">
          <form>
            <VStack spacing="4" alignItems="stretch" gap="10">
              <FormControl isInvalid={false}>
                <FormLabel htmlFor="firstname" py="5">
                  Name
                </FormLabel>
                <Input id="firstname" name="firstname" size="md" />
                <FormErrorMessage></FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={false}>
                <FormLabel htmlFor="email" py="5">
                  Email Address
                </FormLabel>
                <Input id="email" type="email" name="email" />
                <FormErrorMessage></FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type" py="5">
                  Type of enquiry
                </FormLabel>
                <Select id="type" name="type">
                  <option value="hireme">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={false}>
                <FormLabel htmlFor="comment" py="5">
                  Your Message
                </FormLabel>
                <Textarea id="comment" name="comment" height={250} />
                <FormErrorMessage></FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                color="#fff"
                width="full"
                bg="#774cdc"
                borderRadius="5px"
                border="none"
                p="10"
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;
