import Head from 'next/head'
import { useState, useEffect } from 'react'
import { Box, Text, Image, Spacer, Link, Grid, Button, Flex, IconButton, Stack } from '@chakra-ui/react'
import { FaGithub, FaTelegramPlane, FaTwitter, FaBars, FaRegWindowClose } from "react-icons/fa";

const NavButton = ({ children, mb }) => (
    <Link
        pl="10px"
        pr="10px"
        color="white"
        fontWeight="bold"
        fontSize="15px"
        bgColor="transparent"
        _hover={{ color: '#FF1572' }} >
        {children}
    </Link>
)

const navButtons = [
    { name: 'Home' },
    { name: 'Pre-register' },
    { name: 'Resource Center' },
    { name: 'Documentation' },
    { name: 'Get Started' },
    { name: 'Ambassador Program' },
]

export const AppLayout = ({ children }) => {
    const [open, isOpen] = useState(false)
    return (
        <Box bgColor="background" h="auto">
            <Flex 
                style={{ zIndex: 10 }} 
                bgColor="background"
                display={{ base: 'none', md: 'none', lg: 'flex' }}
                h="50px" align="center" 
                pl="7rem" pr="7rem" 
                position="fixed"
                >
                <Image 
                    src="https://assets-global.website-files.com/60536b901b879c2f395d75d0/60f6c8a0b4e345b44de194c1_Vector%20(1).svg" 
                    h="32px" w="32px" mr="30px"
                    />
                    {navButtons.map((nav, index) => (
                        <NavButton>{nav.name}</NavButton>
                    ))}
                <Spacer/>
                <Button
                    fontSize="15px" 
                    color="white" 
                    bgColor="transparent" 
                    _focus={{ outline: 'none' }} 
                    _hover={{ color: '#FF1572' }} 
                    leftIcon={<FaGithub/>}>
                    Github
                </Button>
                <Button 
                    fontSize="15px" 
                    color="white" 
                    bgColor="transparent" 
                    _focus={{ outline: 'none' }} 
                    _hover={{ color: '#FF1572' }} 
                    leftIcon={<FaTwitter/>}>
                    Twitter
                </Button>
                <Button 
                    fontSize="15px" 
                    color="white" 
                    bgColor="transparent" 
                    _focus={{ outline: 'none' }} 
                    _hover={{ color: '#FF1572' }} 
                    leftIcon={<FaTelegramPlane/>}>
                    Telegram
                </Button>
                <Spacer/>
            </Flex>

            <Box display={{ base: 'flex', lg: 'none' }}>
                <Box
                    style={{ alignItems: 'center', zIndex: 10 }}
                    display={{ base: 'flex', lg: 'none' }}
                    bgColor="background" w="100%"
                    h="50px" pl="2rem" pr="2rem" 
                    position="fixed"
                    >
                    <Image 
                        src="https://assets-global.website-files.com/60536b901b879c2f395d75d0/60f6c8a0b4e345b44de194c1_Vector%20(1).svg" 
                        h="32px" w="32px" mr="30px"
                        />
                    <Spacer/>
                    <Link onClick={() => isOpen(!open)} bgColor="transparent" fontSize="20px" color="white" >
                        {open ? <FaRegWindowClose/> : <FaBars/>}
                    </Link>
                </Box>
                {
                    open 
                    ?
                    <Box>
                        <Grid templateColumns='repeat(2, 1fr)' gap={4} pl="30px" pt="70px">
                            {navButtons.map((nav, index) => (
                                <NavButton>{nav.name}</NavButton>
                            ))}
                        </Grid>
                        <Flex pl="20px" pt="20px">
                            <Button
                                fontSize="15px"
                                color="white" 
                                bgColor="transparent" 
                                _focus={{ outline: 'none' }} 
                                _hover={{ color: '#FF1572' }} 
                                leftIcon={<FaGithub/>}>
                                Github
                            </Button>
                            <Button 
                                fontSize="15px" 
                                color="white" 
                                bgColor="transparent" 
                                _focus={{ outline: 'none' }} 
                                _hover={{ color: '#FF1572' }} 
                                leftIcon={<FaTwitter/>}>
                                Twitter
                            </Button>
                            <Button 
                                fontSize="15px" 
                                color="white" 
                                bgColor="transparent" 
                                _focus={{ outline: 'none' }} 
                                _hover={{ color: '#FF1572' }} 
                                leftIcon={<FaTelegramPlane/>}>
                                Telegram
                            </Button>
                        </Flex>
                    </Box>
                    :
                    null
                }
            </Box>
            
            {children}
        </Box>
    )
}