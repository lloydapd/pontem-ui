import Head from 'next/head'
import { 
  Box, Flex, Text, 
  Wrap, Grid, IconButton, 
  Button, Image, Divider, Link
} from '@chakra-ui/react'
import { AppLayout } from './AppLayout'
import { FaGithub, FaBook, FaTelegramPlane, FaTwitter, FaMaxcdn } from "react-icons/fa";
import Slider from 'react-slick'
import { RoadMap } from './RoadMap';
import Carousel from 'react-elastic-carousel'

const ImageLogo = ({ image }) => (
  <Box as="button">
    <Image src={image} objectFit="cover" h="40px"/>
  </Box>
)

const DevLogo = ({ image, text }) => (
  <Box as="button" w="100%" style={{ alignItems: 'center' }}>
    <Box align="center" mb="20px">
      <Image src={image} objectFit="cover" h="130px"/>
    </Box>
    <Box style={{ alignItems: 'center' }}>
      <Text color="text" fontFamily="Avenir Next" fontSize="16px" fontWeight="bold" >
        {text}
      </Text>
    </Box>
  </Box>
)

const FooterLinks = ({ icon, text }) => (
  <Link display="flex" align="center" fontSize="25px">
    <Box mr="10px" color="white">
      {icon}
    </Box>
    <Text fontSize="16px" fontWeight="bold" _hover={{ color: 'white' }} color="gray.600">{text}</Text>
  </Link>
)


export default function Home() {

  const logo = [
    { logo: 'https://assets-global.website-files.com/60536b901b879c2f395d75d0/610bb6f30105f27afe6b9b77_partner_5.png' },
    { logo: 'https://assets-global.website-files.com/60536b901b879c2f395d75d0/610bb6f36f0dde26a14d21cb_partner_2.svg' },
    { logo: 'https://assets-global.website-files.com/60536b901b879c2f395d75d0/610bb6f34f911bacfff17d68_partner_7.png' },
    { logo: 'https://assets-global.website-files.com/60536b901b879c2f395d75d0/610bb6f3dc1058c3d42640f2_partner_4.png' },
    { logo: 'https://assets-global.website-files.com/60536b901b879c2f395d75d0/610bb6f4d4bf4a7aa0352057_partner_3.svg' },
    { logo: 'https://assets-global.website-files.com/60536b901b879c2f395d75d0/610bb6f364c520149cbb47b6_partner_1.svg' }
  ]

  const grantsLogo = [
    { logo: 'https://assets-global.website-files.com/60536b901b879c2f395d75d0/610bb6f34e17d04cf6c20cd3_partner_6.svg' },
    { logo: 'https://assets-global.website-files.com/60536b901b879c2f395d75d0/61647ef48010cc7c075f3743_SBP_M1%201.svg' },
    { logo: 'https://assets-global.website-files.com/60536b901b879c2f395d75d0/60536b911b879caa005d7633_Group%2018.svg' },
  ]

  const devLogo = [
    { logo: 'https://assets-global.website-files.com/60536b901b879c2f395d75d0/60536b911b879c19e25d7628_icon-1.svg', text: 'Permissioned blockchain makes developing interoperability costly' },
    { logo: 'https://assets-global.website-files.com/60536b901b879c2f395d75d0/60536b911b879c54dd5d7629_icon-2.svg', text: 'Siloed liquidity from permissionless crypto' },
    { logo: 'https://assets-global.website-files.com/60536b901b879c2f395d75d0/60536b911b879c8e9f5d762a_icon-3.svg', text: 'High barriers to entry with strict compliance' },
    { logo: 'https://assets-global.website-files.com/60536b901b879c2f395d75d0/60536b911b879c19e25d7628_icon-1.svg', text: 'High cost for finding product market fit' },
  ]

  const footerIcons = [
    { icon: <FaBook/>, text: 'Documents' },
    { icon: <FaGithub/>, text: 'Github' },
    { icon: <FaTelegramPlane/>, text: 'Telegram' },
    { icon: <FaTwitter/>, text: 'Twitter' },
    { icon: <FaMaxcdn/>, text: 'Medium' },
  ]

  const settings = {
    dots: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
};

  return (
    <AppLayout>
      <Box
        h={{ 
          base: '50vh', 
          md: '55vh', 
          lg: "60vh"
        }} w="100%" 
        position="relative" 
        align="center" 
        style={{ 
        alignItems: 'center' 
        }}>
        <Image 
          h={{ base: '40vh', md: '100%', lg: '100%' }}
          w="100vw"
          objectFit="contain"
          objectPosition="center"
          src="https://assets-global.website-files.com/60536b901b879c2f395d75d0/616b1f589c8d494e1f1d9509_Hero_img.svg" />
        <Box 
          position="absolute" 
          bottom={3} left={0} right={0}
          pl={{ base: '2rem', md: '2rem', lg: "7rem" }}
          pr={{ base: '2rem', md: '2rem', lg: "7rem" }} 
          style={{ alignItems: 'end', justifyContent: 'center' }}>
          <Text 
            fontSize={{ base: '35px', md: '4xl', lg: "6xl" }} 
            textAlign="center"
            fontWeight="extrabold" 
            fontFamily="Avenir Next" 
            textTransform="uppercase" 
            bgGradient="linear(to-l, #F03F76, #B432A3)"
            bgClip="text"
            letterSpacing="10px"
            >
            Pontem Network
          </Text>
          <Text fontSize={{ base: '1xl', lg: '2xl' }} fontFamily="Avenir Next" textAlign="center" color="text" fontWeight="extrabold">
            The Experimentation Platform for Meta (Facebook) Backed Diem
          </Text>
        </Box>
      </Box>
      <Box
        pl={{ base: '2rem', md: '2rem', lg: "7rem" }}
        pr={{ base: '2rem', md: '2rem', lg: "7rem" }}
        >
        <Box display="flex" style={{ justifyContent: 'center' }} mt="30px">
          <Button 
            h="60px" pl="40px" pr="40px" 
            style={{ borderRadius: '99999px' }}
            _focus={{ outline: 'none' }}
            bgColor="primary"
            color="white"
            _hover={{ backgroundColor: '#f74a8f' }}
            fontFamily="Avenir Next"
            fontSize="16px"
            textTransform="uppercase"
            fontWeight="bold"
            mr="20px"
            >
            Pre-register
          </Button>
          <Button 
            h="60px" pl="40px" pr="40px" 
            style={{ borderRadius: '99999px' }}
            _focus={{ outline: 'none' }}
            border="1px solid white"
            bgColor="transparent"
            color="white"
            _hover={{ backgroundColor: 'rgba(76,76,76,0.1)' }}
            fontFamily="Avenir Next"
            fontSize="16px"
            textTransform="uppercase"
            fontWeight="bold"
            >
            Join Community
          </Button>
        </Box>
        <Box mt="100px">
          <Text 
            textAlign="center" 
            fontSize="20px" 
            fontWeight="extrabold"
            textTransform="uppercase"
            fontFamily="Avenir Next" 
            textTransform="uppercase" 
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            >
            Backed By
          </Text>
          <Wrap 
            mt="30px" 
            spacing="40px" 
            justify="center"
            >
            {logo.map((l, index) => (
              <ImageLogo image={l.logo} />
            ))}
            <Button 
              bgColor="transparent" 
              border="1px solid white"
              _focus={{ outline: 'none' }}
              _hover={{ backgroundColor: 'rgba(79, 79, 79, 0.1)' }}
              color="text" 
              textTransform="uppercase" 
              leftIcon={<Text>+</Text>} 
              h="30px" 
              fontSize="12px" 
              style={{ 
                borderRadius: '99999px' 
              }}>
              More
            </Button>
          </Wrap>
          <Box pl="7rem" pr="7rem" mt="30px" mb="30px">
            <Divider />
          </Box>
          <Box mt="40px">
            <Text 
              textAlign="center" 
              fontSize="20px" 
              fontWeight="extrabold"
              textTransform="uppercase"
              fontFamily="Avenir Next" 
              textTransform="uppercase" 
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              mb="30px"
              >
              Grants
            </Text>
            <Wrap justify="center" spacing="20px" >
              {grantsLogo.map((l, index) => (
                <ImageLogo image={l.logo} />
              ))}
            </Wrap>
          </Box>
        </Box>
        <Box mt="200px" display={{ base: 'block', md: 'block', lg: 'flex' }}>
          <Box>
            <Box style={{ flex: 1 }} display={{ base: 'block', md: 'block', lg: 'none' }}>
              <Image src="https://assets-global.website-files.com/60536b901b879c2f395d75d0/6123c8cf5233fd8238664ad6_Captions_frame.png" objectFit="contain" h="60vh" w="100%" />
            </Box>
            <Flex style={{ flex: 1 }}>
              <Text 
                textAlign="center" 
                fontSize="20px" 
                fontWeight="extrabold"
                fontFamily="Avenir Next" 
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                mr="10px"
                >
                Build on
              </Text>
              <Image 
                h="25px"
                src="https://assets-global.website-files.com/60536b901b879c2f395d75d0/60536b911b879c4fd85d7627_pontem-small.svg" 
                />
            </Flex>
            <Box>
              <Text color="text" mt="20px" fontSize="50px" fontFamily="Avenir Next" fontWeight="bold" >
                An incentivized
                <br/>dev environment <br/> for Diem
              </Text>
              <Text color="gray.600" mt="20px" fontWeight="bold">
                Diem is blockchain infrastructure for the financial 
                <br/>inclusion of Facebook's 3.2 billion daily active users.
              </Text>
              <Box mt="30px" color="gray.600" fontWeight="bold">
                Pontem Network cost efficiently maintains Diem
                <br/> interoperability with decentralized applications. Pontem 
                <br/>enables product testing in an internationally regulated 
                <br/>market through a compliance tooling dev platform to 
                <br/>streamline the 
                <Link color="#FF1572" _hover={{ color: 'gray.600' }}> Diem Association certification processes.</Link>
              </Box>
              <Button 
                h="60px" mt="30px" pl="40px" pr="40px" 
                style={{ borderRadius: '99999px' }}
                _focus={{ outline: 'none' }}
                bgColor="primary"
                color="white"
                _hover={{ backgroundColor: '#f74a8f' }}
                fontFamily="Avenir Next"
                fontSize="16px"
                textTransform="uppercase"
                fontWeight="bold"
                mr={{ base: 'none', md: '20px' }}
                >
                Pre-register
              </Button>
            </Box>
          </Box>
          <Box style={{ flex: 1 }} ml="70px" display={{ base: 'none', md: 'none', lg: 'block' }}>
            <Image src="https://assets-global.website-files.com/60536b901b879c2f395d75d0/6123c8cf5233fd8238664ad6_Captions_frame.png" objectFit="contain" h="60vh" w="100%" />
          </Box>
        </Box>
        <Box mt="100px" display={{ base: 'block', md: 'block', lg: 'flex' }}>
          <Box align="center" mr={{ base: 'none', md: '40px', lg: '40px' }} mb={{ base: '70px', md: '70px', lg: 'none' }}>
            <Image 
              h="500px" 
              src="https://assets-global.website-files.com/60536b901b879c2f395d75d0/6124920287ab19caa84d293c_Oval.svg" 
              />
          </Box>
          <Box display="flex" style={{ alignItems: 'center' }}>
            <Box>
              <Text 
                fontSize="16px" 
                fontWeight="bold"
                fontFamily="Avenir Next" 
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                mr="10px"
                >
                STAY TUNED FOR OUR TOKEN LAUNCH
              </Text>
              <Text fontFamily="Avenir Next" fontSize="50px" color="text" fontWeight="bold" >
                Join the Pontem <br/>Community
              </Text>
              <Flex mt="20px">
                <Box
                  mr="10px" 
                  bgColor="#1D1E33" 
                  display="flex" 
                  fontSize="25px" 
                  color="text" 
                  h="60px" w="50px" 
                  style={{ 
                    borderRadius: '10px', 
                    alignItems: 'center', 
                    justifyContent: 'center' 
                  }}>
                  2
                </Box>
                <Box
                  mr="10px" 
                  bgColor="#1D1E33" 
                  display="flex" 
                  fontSize="25px" 
                  color="text" 
                  h="60px" w="50px" 
                  style={{ 
                    borderRadius: '10px', 
                    alignItems: 'center', 
                    justifyContent: 'center' 
                  }}>
                  1
                </Box>
                <Box
                  mr="10px" 
                  bgColor="#1D1E33" 
                  display="flex" 
                  fontSize="25px" 
                  color="text" 
                  h="60px" w="50px" 
                  style={{ 
                    borderRadius: '10px', 
                    alignItems: 'center', 
                    justifyContent: 'center' 
                  }}>
                  9
                </Box>
                <Box
                  mr="10px" 
                  bgColor="#1D1E33" 
                  display="flex" 
                  fontSize="25px" 
                  color="text" 
                  h="60px" w="50px" 
                  style={{ 
                    borderRadius: '10px', 
                    alignItems: 'center', 
                    justifyContent: 'center' 
                  }}>
                  9
                </Box>
                <Box
                  mr="30px" 
                  bgColor="#1D1E33" 
                  display="flex" 
                  fontSize="25px" 
                  color="text" 
                  h="60px" w="50px" 
                  style={{ 
                    borderRadius: '10px', 
                    alignItems: 'center', 
                    justifyContent: 'center' 
                  }}>
                  9
                </Box>
                <Box display={{ base: 'none', md: 'none', lg: "flex"}} style={{ alignItems: 'center' }}>
                  <Text 
                    fontSize="16px" 
                    fontWeight="bold" 
                    fontFamily="Avenir Next" 
                    color="gray.600" 
                    >
                    People have joined
                  </Text>
                </Box>
              </Flex>
              <Box 
                display={{ base: 'block', md: 'flex', lg: 'flex' }} 
                style={{ alignItems: 'center' }} 
                mt="40px" 
                >
                <Button 
                  h="60px" pl="100px" pr="100px" 
                  style={{ borderRadius: '99999px' }}
                  _focus={{ outline: 'none' }}
                  bgColor="primary"
                  color="white"
                  _hover={{ backgroundColor: '#f74a8f' }}
                  fontFamily="Avenir Next"
                  fontSize="16px"
                  textTransform="uppercase"
                  fontWeight="bold"
                  mr="20px"
                  >
                  Join Us
                </Button>
                <Box display="flex" mt={{ base: '30px', md: 'none', lg: 'none' }}>
                  <IconButton 
                    bgColor="white" 
                    style={{ borderRadius: '30px' }} 
                    h="60px" w="60px" 
                    fontSize="30px"
                    mr="10px" 
                    icon={<FaTwitter/>}
                    />
                  <IconButton 
                    bgColor="white" 
                    style={{ borderRadius: '30px' }} 
                    h="60px" w="60px" 
                    fontSize="30px" 
                    mr="10px" 
                    icon={<FaMaxcdn/>}
                    />
                  <IconButton 
                    bgColor="white" 
                    style={{ borderRadius: '30px' }} 
                    h="60px" w="60px" 
                    fontSize="30px" 
                    icon={<FaTelegramPlane/>}
                    />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box mt="200px">
          <Text 
            textAlign="center" 
            fontSize="35px" 
            color="text"
            fontWeight="extrabold" 
            fontFamily="Avenir Next"
            >
            Diem Development Challenges
          </Text>
        </Box>
        <Grid
          justify="center" 
          mt="60px" 
          templateColumns={{ 
            base: 'repeat(1, 1fr)', 
            md: 'repeat(2, 1fr)', 
            lg: 'repeat(4, 1fr)' 
          }}
          gap={{ base: 20, md: 4, lg: 4 }}
          >
          {devLogo.map((d, i) => (
            <DevLogo image={d.logo} text={d.text} key={i}/>
          ))}
        </Grid>
        <Box mt="100px">
          <Text
            mb="100px" 
            textAlign="center" 
            fontSize="35px" 
            color="text"
            fontWeight="extrabold" 
            fontFamily="Avenir Next"
            >
            Pontem Network Features
          </Text>
          <Box display={{ base: 'block', md: 'block', lg: 'flex' }}>
            <Box style={{ flex: 1 }} align="center">
              <Box>
                <Image 
                  h="200px"
                  src="https://assets-global.website-files.com/60536b901b879c2f395d75d0/61169661540c3cca92b75605_feature-1.svg" 
                  />
                <Box mt="20px" h="200px">
                  <Text 
                    fontSize="20px" 
                    fontFamily="Avenir Next" 
                    fontWeight="bold" 
                    color="text"
                    letterSpacing="5px" 
                    >
                    SANDBOX FOR DIEM
                  </Text>
                  <Text mt="20px" fontSize="16px" color="gray.600">
                    Discover Diem’s potential. Pontem lets you validate
                    <br/> ideas before porting to the Diem Blockchain.
                  </Text>
                </Box>
              </Box>
              <Box mt={{ base: '20px', md: '20px', lg: '100px' }}>
                <Image 
                  h="200px"
                  src="https://assets-global.website-files.com/60536b901b879c2f395d75d0/61169661e75ed44fc2282a24_feature-3.svg" 
                  />
                <Box mt="20px">
                  <Text 
                    fontSize="20px" 
                    fontFamily="Avenir Next" 
                    fontWeight="bold" 
                    color="text" 
                    letterSpacing="5px" 
                    >
                    DEVELOPMENT FRAMEWORKS
                  </Text>
                  <Text mt="20px" fontSize="16px" color="gray.600">
                    Focus on user experience. Pontem integrates with
                    <br/> a broad suite of developer tools and pre-built 
                    <br/>smart contract modules so teams can focus on
                    <br/> their product, not blockchain infrastructure.
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box style={{ flex: 1 }} align="center">
              <Box>
                <Image 
                  h="200px"
                  src="https://assets-global.website-files.com/60536b901b879c2f395d75d0/61169661411c5e6a81fa1723_feature-2.svg" 
                  />
                <Box mt="20px" h="200px">
                  <Text 
                    fontSize="20px" 
                    fontFamily="Avenir Next" 
                    fontWeight="bold" 
                    color="text"
                    letterSpacing="5px" 
                    >
                    MULTI-CHAIN LIQUIDITY
                  </Text>
                  <Text mt="20px" fontSize="16px" color="gray.600">
                    Pontem uses existing bridges to connect liquidity 
                    <br/>and data from other permissionless networks to
                    <br/> the permissioned Diem Blockchain
                  </Text>
                </Box>
              </Box>
              <Box mt={{ base: '20px', md: '20px', lg: '80px' }}>
                <Image 
                  h="200px"
                  src="https://assets-global.website-files.com/60536b901b879c2f395d75d0/611696615cb346899e07b633_feature-4.svg" 
                  />
                <Box mt="20px">
                  <Text 
                    fontSize="20px" 
                    fontFamily="Avenir Next" 
                    fontWeight="bold" 
                    color="text" 
                    letterSpacing="5px" 
                    >
                    COMPATIBLE WITH DIEM
                  </Text>
                  <Text mt="20px" fontSize="16px" color="gray.600">
                    Pontem Network is the easiest way to build 
                    <br/>apps for Diem. Iterate quickly on a 
                    <br/>permissionless, incentivized network that is interoperable with 
                    <br/>the Diem Blockchain.
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box mt="70px" align="center">
            <Button 
              h="60px" pl="100px" pr="100px" 
              style={{ borderRadius: '99999px' }}
              _focus={{ outline: 'none' }}
              bgColor="primary"
              color="white"
              _hover={{ backgroundColor: '#f74a8f' }}
              fontFamily="Avenir Next"
              fontSize="16px"
              textTransform="uppercase"
              fontWeight="bold"
              mr="20px"
              >
              Get Started
            </Button>
          </Box>
        </Box>
        <Box mt="200px" mb="30px">
          <Text 
            textAlign="center" 
            fontSize="50px" 
            color="text" 
            fontFamily="Avenir Next" 
            fontWeight="bold"
            >
            Technical Architecture
          </Text>
        </Box>
        <Box mt="100px">
          <Box display={{ base: 'block', md: 'block', lg: 'flex' }} w="100%">
            <Box align="center" style={{ flex: { base: 'none', md: 'none', lg: 1 } }}>
              <Image 
                h={{ base: '15vh', md: '15vh', lg: '30vh' }}
                src="https://assets-global.website-files.com/60536b901b879c2f395d75d0/60536b911b879c97355d7638_tech-img-1.png" 
                />
            </Box>
            <Box style={{ flex: 1 }} ml={{ base: 'none', md: 'none', lg: '5rem' }} mt={{ base: '40px', md: '40px', lg: 'none' }} display="flex" >
              <Box>
                <Text 
                  fontSize="3xl" 
                  fontWeight="bold" 
                  color="text" 
                  fontFamily="Avenir Next"
                  >
                  Built on Substrate
                </Text>
                <Text mt="10px" fontSize="20px" color="gray.600" fontWeight="bold">
                  Polkadot compatible blockchain that supports safe and flexible industry standard WebAssembly (WASM) smart contracts.
                </Text>
              </Box>
            </Box>
          </Box>
          <Box mt="70px" display={{ base: 'block', md: 'block', lg: 'flex' }} w="100%">
            <Box align="center" display={{ base: 'block', md: 'block', lg: 'none' }}>
              <Image 
                h="10vh"
                mb="40px"
                src="https://assets-global.website-files.com/60536b901b879c2f395d75d0/60536b911b879caf395d7639_tech-img-2.png" 
                />
            </Box>
            <Box style={{ flex: 1 }} mr={{ base: 'none', md: 'none', lg: '5rem' }} mb={{ base: '40px', md: '40px', lg: 'none' }} display="flex" >
              <Box>
                <Text 
                  fontSize="3xl" 
                  fontWeight="bold" 
                  color="text" 
                  fontFamily="Avenir Next"
                  >
                  Web 3 integrations
                </Text>
                <Text mt="10px" fontSize="20px" color="gray.600" fontWeight="bold">
                  Integration with polkadot projects as well as Ethereum and other layer 1 decentralized services utilizing polkadot bridges
                </Text>
              </Box>
            </Box>
            <Box display={{ base: 'none', md: 'none', lg: 'block' }}>
              <Image 
                h="20vh"
                src="https://assets-global.website-files.com/60536b901b879c2f395d75d0/60536b911b879caf395d7639_tech-img-2.png" 
                />
            </Box>
          </Box>
          <Box display={{ base: 'block', md: 'block', lg: 'flex' }} w="100%">
            <Box align="center">
              <Image 
                h={{ base: '13vh', md: '20vh', lg: '20vh' }}
                src="https://assets-global.website-files.com/60536b901b879c2f395d75d0/6070779e0a79c65b041189f1_tech-img-3.png" 
                />
            </Box>
            <Box style={{ flex: 1 }} ml={{ base: 'none', md: 'none', lg: '5rem' }} mt={{ base: '40px', md: '40px', lg: 'none' }} display="flex" >
              <Box>
                <Text 
                  fontSize="3xl" 
                  fontWeight="bold" 
                  color="text" 
                  fontFamily="Avenir Next"
                  >
                  Diem compatible Move technology
                </Text>
                <Text mt="10px" fontSize="20px" color="gray.600" fontWeight="bold">
                  Fully compatible Move virtual machine and standard library using a code base and tools that are compatible with Diem
                </Text>
              </Box>
            </Box>
          </Box>
          <Box mt="70px" display={{ base: 'block', md: 'block', lg: 'flex' }} w="100%">
            <Box align="center" display={{ base: 'block', md: 'block', lg: 'none' }}>
              <Image 
                h="10vh"
                mb="40px"
                src="https://assets-global.website-files.com/60536b901b879c2f395d75d0/60536b911b879cb4005d763a_tech-img-4.png" 
                />
            </Box>
            <Box style={{ flex: 1 }} mr={{ base: 'none', md: 'none', lg: '5rem' }} mb={{ base: '40px', md: '40px', lg: 'none' }} display="flex" >
              <Box>
                <Text 
                  fontSize="3xl" 
                  fontWeight="bold" 
                  color="text" 
                  fontFamily="Avenir Next"
                  >
                  Move language development framework
                </Text>
                <Text mt="10px" fontSize="20px" color="gray.600" fontWeight="bold">
                  Complete Toolset to develop applications using a Move language package manager and compiler.
                </Text>
              </Box>
            </Box>
            <Box display={{ base: 'none', md: 'none', lg: 'block' }}>
              <Image 
                h="20vh"
                src="https://assets-global.website-files.com/60536b901b879c2f395d75d0/60536b911b879cb4005d763a_tech-img-4.png" 
                />
            </Box>
          </Box>
          <Box align="center" mt="100px">
            <Button 
              h="60px" pl="100px" pr="100px" 
              style={{ borderRadius: '99999px' }}
              _focus={{ outline: 'none' }}
              bgColor="primary"
              color="white"
              _hover={{ backgroundColor: '#f74a8f' }}
              fontFamily="Avenir Next"
              fontSize="16px"
              textTransform="uppercase"
              fontWeight="bold"
              mr="20px"
              >
              Get Started
            </Button>
          </Box>
        </Box>
        <Box display={{ base: 'block', md: 'block', lg: 'flex' }}  mt="100px">
          <Box 
            mb="70px"
            display={{ base: 'block', md: 'block', lg: 'none' }} 
            align="center" >
            <Image 
              h="400px"
              src="https://assets-global.website-files.com/60536b901b879c2f395d75d0/60536b911b879c4bd35d760a_block-opacity.png" 
              />
          </Box>
          <Box style={{ flex: 1 }}>
            <Box 
              bgColor="white" 
              display="flex" 
              p="5px"
              w="160px"
              style={{ 
                borderRadius: '10px', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }} >
              <Box>
                <Text 
                  fontSize="20px" 
                  fontWeight="bold" 
                  fontFamily="Avenir Next" 
                  letterSpacing="7px" 
                  >
                  Use Case
                </Text>
              </Box>
            </Box>
            <Text 
              fontSize="50px" 
              mt="30px"
              fontFamily="Avenir Next" 
              fontWeight="bold" 
              color="text" 
              >
              Blocks Builder
            </Text>
            <Text 
              fontFamily="Avenir Next" 
              fontWeight="bold" 
              color="gray.600"
              fontSize="20px"
              mt="30px"
              >
              The Pontem Blocks Builder is a no code / low code user interface for building smart contracts. With pre-made templates for common use cases, it is easy to start building for Diem
            </Text>
            <Box display={{ base: 'block', md: 'block', lg: 'flex' }} align="center" mt="40px">
              <Button 
                h="60px" pl="100px" pr="100px"
                style={{ borderRadius: '99999px' }}
                _focus={{ outline: 'none' }}
                bgColor="primary"
                color="white"
                _hover={{ backgroundColor: '#f74a8f' }}
                fontFamily="Avenir Next"
                fontSize="16px"
                textTransform="uppercase"
                fontWeight="bold"
                mb={{ base: '30px', md: '30px', lg: 'none' }}
                mr={{ base: 'none', md: 'none', lg: "20px"}}
                >
                Try it now
              </Button>
              <Button 
                h="60px" pl="40px" pr="40px" 
                style={{ borderRadius: '99999px' }}
                _focus={{ outline: 'none' }}
                border="1px solid white"
                bgColor="transparent"
                color="white"
                _hover={{ backgroundColor: 'rgba(76,76,76,0.1)' }}
                fontFamily="Avenir Next"
                fontSize="16px"
                textTransform="uppercase"
                fontWeight="bold"
                >
                More Products
              </Button>
            </Box>
          </Box>
          <Box display={{ base: 'none', md: 'none', lg: 'block' }} align="center" >
            <Image 
              h="400px"
              src="https://assets-global.website-files.com/60536b901b879c2f395d75d0/60536b911b879c4bd35d760a_block-opacity.png" 
              />
          </Box>
        </Box>
        <Box h="200px" mt="200px" position="relative">
          <Box 
            position="absolute" 
            top={6} bottom={0} left={0} right={0}
            >
            <Text 
              textAlign="center"
              fontSize="40px" 
              fontWeight="extrabold" 
              color="text"
              fontFamily="Avenir Next"
              >
              Road Map
            </Text>
            <Text textAlign="center" fontSize="16px" fontWeight="bold" color="gray.600">
              Please note that the team reserves the right to make changes at any time
            </Text>
          </Box>
          <Box>
            <Text 
              textAlign="center"
              fontSize={{ base: '30px', md: '50px', lg: '80px' }} 
              textTransform="uppercase" 
              fontFamily="Avenir Next" 
              letterSpacing="20px" 
              fontWeight="extrabold"
              >
              Implementation
            </Text>
          </Box>
        </Box>
      </Box>

      <Box h="200px" mb="60px">
        <RoadMap>
              
        </RoadMap>
      </Box>
      
      <Box align="center" mb="40px">
        <Wrap spacing="20px" justify="center">
          {footerIcons.map((f, i) => (
            <FooterLinks icon={f.icon} text={f.text} />
          ))}
        </Wrap>
        <Text 
          textAlign="center" 
          color="gray.600" 
          mb="20px" fontSize="12px" 
          w="50vw" mt="10px"
          >
          © 2021 Pontem Technology Ltd. All Rights Reserved. We are not affiliated, associated, authorized, endorsed by, or in any way officially connected with Facebook, the Diem Association or any of its subsidiaries or its affiliates. All product and company names are trademarks™ or registered® trademarks of their respective holders.
        </Text>
        <Link>
            <Text color="gray.600" fontSize="12px" _hover={{ color: "white" }}>Policy</Text>
        </Link>
      </Box>
    </AppLayout>
  )
}
