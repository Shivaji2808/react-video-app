import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../Assets/6.jpg';
import img2 from '../Assets/7.jpg';
import img3 from '../Assets/8.jpg';
import img4 from '../Assets/4.jpg';
import img5 from '../Assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading
          textTransform={'uppercase'}
          py="2"
          w={'fit-content'}
          borderBottom={'2px solid'}
          m="auto"
        >
          Services
        </Heading>

        <Stack
          h="full"
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />

          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            //p={['4', '16']}
            textAlign={'start'}
          >
            Our React-based video app provides a range of services that allow users to create, view, and share videos in a secure and user-friendly environment. Here are some of the key services we offer:<br></br>

            <br></br><b>Secure Login/Signup:</b> Our app offers secure login/signup functionality that allows users to create an account and access the full range of features available on our platform.<br></br>

            <br></br><b>Video Library:</b> Our app provides users with access to a vast library of videos, organized by category and searchable by keywords. Users can browse the library, view videos, and save their favorites for future viewing.<br></br>

            <br></br><b>Video Player:</b> our app provides a high-quality video player that ensures smooth playback of videos across all devices. Users can watch videos in full-screen mode, adjust playback speed, and control other settings to enhance their viewing experience.<br></br>

            <br></br>Overall, our React-based video app offers a range of powerful services that make it easy for users to create, share, and watch videos. Whether you're a content creator or a casual viewer, our app has something for everyone.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={2000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
    preventMovementUntilSwipeScrollTolerance={true}
    swipeScrollTolerance={50}
  >
    <Box w="full" h={'100vh'} >
      <Image src={img1} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} size={['2xl','4xl']} color={'white'} {...headingOptions}>
      Transforming ideas into reality
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img2} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.900'} size={['2xl','4xl']} color={'black'} {...headingOptions}>
      Revolutionizing the way
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img3} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} size={['2xl','4xl']} color={'black'} {...headingOptions}>
      Discover the power of simplicity
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img4} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} size={['2xl','4xl']} color={'black'} {...headingOptions}>
        Empowering the Journey
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
