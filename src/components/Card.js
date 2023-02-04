import React from "react";
import {
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Card,
  CardHeader,
  CardBody,
  Box,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const CardCom = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Card>
      <CardBody bg="white" borderRadius="10px">
        <CardHeader>
          <Image
            src={imageSrc}
            alt={title}
            boxSize="100%"
            objectFit="cover"
            borderRadius="10px"
          />
        </CardHeader>
        <Box p="15px">
          <VStack alignItems="start" gap="5px">
            <Heading color="black" as="h4" fontSize="20px">
              {title}
            </Heading>
            <Text color="darkslategray">{description}</Text>
          </VStack>
          <HStack paddingTop="10px">
            <Text color="black" fontWeight="600">
              See more
            </Text>
            <FontAwesomeIcon icon={faArrowRight} color="black" size="sm" />
          </HStack>
        </Box>
      </CardBody>
    </Card>
  );
};

export default CardCom;
