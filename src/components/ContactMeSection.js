import React, { useEffect } from "react";
import { useAlertContext } from "../context/alertContext";
import { useFormik } from "formik";
import * as Yup from "yup";

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
import Spinner from "./Spinner";
import Alert from "./Alert";
import "../index.css";

const ContactMeSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstname: "",
      email: "",
      type: "",
      comment: "",
    },
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      submit(null, values);
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      type: Yup.string(),
      comment: Yup.string()
        .min(25, "Must be at least 25 characters")
        .required("Required"),
    }),
  });

  // console.log(response, isLoading);

  useEffect(() => {
    if (response?.type === "success") {
      onOpen(response.type, response.message);
      formik.resetForm();
    } else if (response?.type === "error") {
      onOpen(response.type, response.message);
      formik.resetForm();
    }
  }, [response]);

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
      className="section__contact__me"
    >
      {isLoading ? <Spinner /> : null}
      <Alert />
      <VStack p={32} alignItems="flex-start" w="100%">
        <Heading as="h1" id="contactme-section">
          Contact Me
        </Heading>

        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing="4" alignItems="stretch" gap="10">
              <FormControl isInvalid={formik.isValid}>
                <FormLabel htmlFor="firstname" py="5">
                  Name
                </FormLabel>
                <Input
                  id="firstname"
                  type="text"
                  name="firstname"
                  size="md"
                  {...formik.getFieldProps("firstname")}
                  borderColor={
                    !formik.errors.firstname && !formik.touched.firstname
                      ? "red"
                      : "white"
                  }
                />
                {formik.errors.firstname && formik.touched.firstname ? (
                  <FormErrorMessage>
                    {formik.errors?.firstname}
                  </FormErrorMessage>
                ) : null}
              </FormControl>
              <FormControl isInvalid={formik.isValid}>
                <FormLabel htmlFor="email" py="5">
                  Email Address
                </FormLabel>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  {...formik.getFieldProps("email")}
                  borderColor={
                    !formik.errors.email && !formik.touched.email
                      ? "red"
                      : "white"
                  }
                />
                {formik.errors.email && formik.touched.email ? (
                  <p>{formik.errors?.email}</p>
                ) : null}
              </FormControl>
              <FormControl isInvalid={formik.isValid}>
                <FormLabel htmlFor="type" py="5">
                  Type of enquiry
                </FormLabel>
                <Select id="type" name="type" {...formik.getFieldProps("type")}>
                  <option value="hireme">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={formik.isValid}>
                <FormLabel htmlFor="comment" py="5">
                  Your Message
                </FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps("comment")}
                  borderColor={
                    !formik.errors.comment && !formik.touched.comment
                      ? "red"
                      : "white"
                  }
                />
                {formik.errors.comment && formik.touched.comment ? (
                  <p>{formik.errors?.comment}</p>
                ) : null}
              </FormControl>
              <Button
                type="submit"
                color="#fff"
                width="full"
                bg="#774cdc"
                borderRadius="5px"
                border="none"
                p="10"
                cursor="pointer"
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
