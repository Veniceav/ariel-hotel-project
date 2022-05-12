import React from 'react';
import {
  Flex,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberIncrementStepper,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Navbar from '../../global-components/Navbar';
import Banner from '../../global-components/Banner';

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
  transition: { duration: 1 },
};

const Schedule = () => {
  return (
    <VStack
      w="100vw"
      h="100vh"
      overflow="hidden"
      bg="black"
      fontFamily="'Varela', sans-serif"
    >
      <Navbar logo="AH" brandName="" year="" />
      <motion.div
        style={{ height: '100%', width: '100%' }}
        variants={item}
        initial="hidden"
        animate="show"
        transition={{ delay: 0, duration: 3 }}
      >
        <Flex
          direction="column"
          h="100%"
          w="100%"
          align="Center"
          justify="center"
          bgImage={
            'url(https://images.unsplash.com/photo-1486492440844-ebc195542a40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80)'
          }
          bgSize="cover"
          bgPos="center"
          bgRepeat="no-repeat"
        >
          <Banner title="Booking/Contact" />
          <Flex
            h="75%"
            w="80%"
            align="center"
            direction="row"
            border={'1px solid grey'}
          >
            <Flex w="25%" h="90%" direction="column">
              <FormControl
                isRequired
                h="100%"
                bg="white"
                border="1px solid grey"
                ml={10}
                p={5}
                x
              >
                <FormLabel htmlFor="firstName">First Name</FormLabel>
                <Input id="firstName" type="name" />
                <FormHelperText>Enter your first name</FormHelperText>

                <FormLabel pt={5} htmlFor="email">
                  Email address
                </FormLabel>
                <Input id="email" type="email" />
                <FormHelperText>Enter a valid email address.</FormHelperText>

                <FormLabel pt={10} htmlFor="duration">
                  Stay Duration
                </FormLabel>
                <Select
                  id="duration"
                  placeholder="How long will you be staying?"
                >
                  <option>Days</option>
                  <option>Weeks</option>
                  <option>Month(Max 2.)</option>
                  <option>Full Stay</option>
                </Select>
                <FormHelperText>Select a duration package</FormHelperText>
                <FormLabel pt={5} htmlFor="amount"></FormLabel>
                <NumberInput max={7} min={1}>
                  <NumberInputField
                    id="amount"
                    placeholder="How many(days, weeks, months)?"
                  />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <FormHelperText>
                  Days(2-7), Weeks(1-4), Months(Maximum 2)
                </FormHelperText>
                <Button
                  mt={10}
                  colorScheme="blackAlpha"
                  loadingText="Submiting"
                  type="submit"
                >
                  Submit
                </Button>
              </FormControl>
            </Flex>
          </Flex>
        </Flex>
      </motion.div>
    </VStack>
  );
};

export default Schedule;
