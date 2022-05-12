import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import {
  Text,
  MenuButton,
  Menu,
  MenuItem,
  Flex,
  MenuList,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Navbar = props => {
  return (
    <motion.div
      initial={{
        position: 'fixed',
        backgroundColor: 'black',
        opacity: 0,
        width: '100%',
      }}
      animate={{
        backgroundColor: 'hsl(0, 0, 0)',
        position: 'fixed',
        width: '100%',
        zIndex: 1,
        opacity: 1,
      }}
      transition={{ delay: 1.5, duration: 2 }}
    >
      <Flex
        position="fixed"
        fontFamily={"'Varela', sans-serif"}
        color="whiteAlpha.900"
        className="container"
        backgroundColor="transparent"
        margin="0"
        p="0"
        w="100vw"
        h="5vh"
        direction="row"
        align="center"
        justify="space-between"
      >
        <Flex
          className="logo"
          h={'100%'}
          w={'5%'}
          alignItems={'center'}
          justify={'center'}
        >
          <Link to="/">
            <Text as="button" fontSize="2xl">
              {props.logo}
            </Text>
          </Link>
        </Flex>

        <Flex
          className="title"
          w="90%"
          align={'center'}
          h={'100%'}
          justify="center"
        >
          <Text
            pointerEvents="none"
            fontSize="3xl"
            letterSpacing={'5px'}
            casing="upperCase"
            fontWeight="medium"
          >
            {props.brandName}
          </Text>{' '}
        </Flex>
        <Flex h={'100%'} w="5%" justify={'center'} align="center">
          <Menu>
            <MenuButton as="button" style={{ fontSize: '24px' }}>
              <GiHamburgerMenu />
            </MenuButton>
            <MenuList
              border="none"
              bg="rgba(20, 20, 20, 0.9)"
              fontFamily="var(--chakra-fonts-body)"
              fontSize="lg"
              color="whiteAlpha.900"
            >
              <MenuItem
                _hover={{ bg: 'rgba(80, 80, 80, 0.5)' }}
                _focus={{ bg: 'rgba(80, 80, 80, 0.5)' }}
              >
                <Link to={`/Pricing`}>Pricing</Link>
              </MenuItem>
              <MenuItem
                _hover={{ bg: 'rgba(80, 80, 80, 0.5)' }}
                _focus={{ bg: 'rgba(80, 80, 80, 0.5)' }}
              >
                <Link to="/Contact">Contact/Booking</Link>
              </MenuItem>
              <MenuItem
                _hover={{ bg: 'rgba(80, 80, 80, 0.5)' }}
                _focus={{ bg: 'rgba(80, 80, 80, 0.5)' }}
              ></MenuItem>
            </MenuList>
          </Menu>
          <Outlet />
        </Flex>
      </Flex>
    </motion.div>
  );
};

export default Navbar;
