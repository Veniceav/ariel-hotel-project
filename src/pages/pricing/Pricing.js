import { Flex, VStack, Grid, GridItem, Text, Box } from '@chakra-ui/react';
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../global-components/Navbar';
import images from '../../assets/Images/images';
import Banner from '../../global-components/Banner';

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
  transition: { duration: 1 },
};

const pricing = {
  hourly: 50,
  daily: 300,
  weekly: 1700,
  monthly: 5500,
};

const FeatureList = props => {
  const price = props.durationPrice;

  if (price === pricing.hourly) {
    return (
      <>
        <Text fontSize={'l'} mb={5}>
          (Availability to these inclusions will be determined by your purchased
          package. We apologize for any inconvenience.)
        </Text>
        <ul>
          <li>Unlimited Access to Music Studios(Software included)</li>
          <li>Unlimited Access to Film Studios</li>
          <li>Unlimited Access to editing rooms(Software included)</li>
        </ul>
      </>
    );
  }
  if (price === pricing.daily) {
    return (
      <>
        <Text fontSize={'l'} mb={5}>
          (Availability to these inclusions will be determined by your purchased
          package. We apologize for any inconvenience.)
        </Text>
        <Text pb={10}>
          <ul>
            <li>Unlimited Access to Music Studios(Software included)</li>
            <li>Unlimited Access to Film Studios</li>
            <li>Unlimited Access to editing rooms(Software included)</li>
          </ul>
        </Text>
        <Text textDecoration="underline">Must be booked in advance.</Text>
      </>
    );
  }
  if (price === pricing.weekly) {
    return (
      <>
        <Text fontSize={'l'} mb={5}>
          (Availability to these inclusions will be determined by your purchased
          package. We apologize for any inconvenience.)
        </Text>
        <Text mb={2}>
          <ul>
            <li>
              Unlimited Access to Music Studios(Instruments/Hardware/Software
              included)
            </li>
            <li>Unlimited Access to Film Studios(Hardware/Tolls included)</li>
            <li>
              Unlimited Access to editing rooms(Hardware/Software included)
            </li>
          </ul>
        </Text>
        <Text textDecoration="underline">Must be booked in advance.</Text>
      </>
    );
  }
  if (price === pricing.monthly) {
    return (
      <>
        <Text fontSize={'l'} mb={5}>
          (Top Priority)
        </Text>
        <Text fontSize={'l'} mb={10}>
          <ul>
            <li>
              Unlimited Access to Music Studios(Instruments/Hardware/Software
              included)
            </li>
            <li>Unlimited Access to Film Studios(Hardware/Tolls included)</li>
            <li>
              Unlimited Access to editing rooms(Hardware/Software included)
            </li>
          </ul>
        </Text>
        <Text textDecoration="underline">Must be booked in advance.</Text>
      </>
    );
  }
};

const PricePanel = props => {
  return (
    <Flex
      align="center"
      justify="center"
      h="100%"
      w="100%"
      bg="rgba(255, 255, 255, 1)"
    >
      <Flex pt={5} direction="column" h="90%" w="90%" align="center">
        <Box h="15%" w="100%">
          <Text textAlign="Center" fontSize="2xl">
            {props.durationType}
          </Text>
          <Text textAlign="center" fontSize="lg">
            ({props.durationTime})
          </Text>
        </Box>
        <Box w="95%" h="70%" pl={5} mb={10}>
          <Text fontSize="2xl">Includes:</Text>
          <FeatureList durationPrice={props.durationPrice} />
        </Box>
        <Box p={2} border={'1px solid black'}>
          <Text fontSize={'2xl'}>
            {props.price} {props.durationTime}
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

const Pricing = () => {
  return (
    <VStack
      h="100vh"
      w="100%vw"
      fontFamily="'Varela', sans-serif"
      overflow="hidden"
      bg="black"
    >
      <Navbar logo="AH" brandName="" year="" />
      <motion.div
        style={{ height: '100%' }}
        variants={item}
        initial="hidden"
        animate="show"
        transition={{ delay: 0, duration: 3 }}
      >
        <Flex
          w="100%"
          h="100%"
          justify="center"
          align="center"
          direction="column"
          bgPos="center"
          bgSize={'cover'}
          bgImage={images.music[0]}
          filter="saturate(0%)"
        >
          <Banner title="Pricing" />
          <Grid
            bgPos={'center'}
            bgSize="cover"
            bgRepeat="no-repeat"
            p={10}
            border="1px solid white"
            w="80%"
            h="75%"
            gap={5}
            templateRows="repeat(3, 1fr)"
            templateColumns="repeat(4, 1fr)"
          >
            <GridItem rowSpan={3}>
              <PricePanel
                durationPrice={pricing.hourly}
                durationType="Drop In"
                price={`$${pricing.hourly}`}
                durationTime=" Per Hour"
              />
            </GridItem>
            <GridItem rowSpan={3}>
              <PricePanel
                durationPrice={pricing.daily}
                durationType="Daily"
                price={`$${pricing.daily}`}
                durationTime=" Per Day"
              />
            </GridItem>
            <GridItem rowSpan={3}>
              <PricePanel
                durationPrice={pricing.weekly}
                durationType="Weekly"
                price={`$${pricing.weekly}`}
                durationTime=" Per Week"
              />
            </GridItem>
            <GridItem rowSpan={3}>
              <PricePanel
                durationPrice={pricing.monthly}
                durationType="Monthly"
                price={`$${pricing.monthly}`}
                durationTime=" Per Month"
              />
            </GridItem>
          </Grid>
        </Flex>
      </motion.div>
    </VStack>
  );
};

export default Pricing;
