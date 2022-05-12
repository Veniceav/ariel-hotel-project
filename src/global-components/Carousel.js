import React from 'react';
import { Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import 'normalize.css';
import { useRef } from 'react/cjs/react.development';

const ImgContainer = ({ width, gap, images }) => {
  return (
    <Flex flexShrink="0" overflow="hidden">
      {images.map(text => {
        return (
          <div
            key={text}
            alt=""
            style={{
              backgroundImage: `url(${text})`,
              backgroundRepeat: 'no-repeat',
              pointerEvents: 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '10rem',
              marginRight: gap,
              width: width,
              height: '100%',
            }}
          />
        );
      })}
    </Flex>
  );
};

const Carousel = ({ images = [], childWidth = 500, gap = 20 }) => {
  const carousel = useRef();

  const totalWidth = (childWidth + gap) * images.length;

  return (
    <Flex h={300} mt="0 !important" overflow="hidden">
      <motion.div ref={carousel} style={{ overflow: 'hidden' }}>
        <motion.div
          style={{
            display: 'flex',
            flexDirection: 'row',
            height: '100%',
            filter: 'saturate(0%)',
          }}
          animate={{ x: -totalWidth }}
          transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
        >
          <ImgContainer images={images} width={childWidth} gap={gap} />
          <ImgContainer images={images} width={childWidth} gap={gap} />
          <ImgContainer images={images} width={childWidth} gap={gap} />
        </motion.div>
      </motion.div>
    </Flex>
  );
};

export default Carousel;
