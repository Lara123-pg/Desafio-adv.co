import { useState, useEffect } from 'react';

import { OptionMenu } from '../../components/OptionMenu';
import { Header, H1, Nav, Main, SectionMain, DivGrid, SpanGrid, DivGrid2, DivGrid3, DivGrid4, DivBox2, Flex1, DivBox3, DivBox4, Flex2, Flex4, DivBox5, Flex5, Info } from './CategoriesStyles';
import { Box, Heading, Flex, Grid, GridItem, Button } from '@chakra-ui/react'

import { motion, ResolvedValues } from 'framer-motion';

import { MagnifyingGlass, Star } from 'phosphor-react';

import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';
import icon4 from '../../assets/icon4.png';
import icon5 from '../../assets/icon5.png';
import icon6 from '../../assets/icon6.png';
import icon7 from '../../assets/icon7.png';
import icon8 from '../../assets/icon8.png';
import icon9 from '../../assets/icon9.png';
import image from '../../assets/image.png';
import image2 from '../../assets/image2.png';

export function Categories() {
    const [isHovered, setIsHovered] = useState(false);
    const [xPos, setXPos] = useState<number>(0);
    const [lastXPos, setLastXPos] = useState<number>(0);

    const handleMouseEnter = () => {
        setIsHovered(true);
        setXPos(-1200);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setLastXPos(xPos);
        console.log(lastXPos)
    };
    
    const handleUpdateXPos = (latest: ResolvedValues | undefined) => {
        if (!isHovered && latest) {
          setXPos(latest.x as number);
        } 
    };

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const menuElement = document.getElementById("menu-container");
            if (menuElement && event.clientX < window.innerWidth / 4) {
                setXPos(0);
            }
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
      
    
    return (
        <div>
            <Box as="header" css={Header}>
                <Heading as="h1" size={"lg"} css={H1}>What do you need designed?</Heading>

                <Flex as="nav" css={Nav} id="menu-container">
                    <motion.div
                        initial={{ opacity: 0, x: xPos }} 
                        animate={{ opacity: 1, x: xPos}} 
                        transition={{ duration: 3 }}
                        style={{
                          position: 'relative', 
                          display: 'flex',
                          gap: '2em',
                          whiteSpace: 'nowrap', 
                          verticalAlign: 'top',
                          overflowX: 'visible', 
                        }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onUpdate={handleUpdateXPos}
                    >
                        <OptionMenu icon={MagnifyingGlass} isFirstButton />
                        <OptionMenu>Logo & identity</OptionMenu>
                        <OptionMenu>Web & app design</OptionMenu>
                        <OptionMenu>Business & advertising</OptionMenu>
                        <OptionMenu>Clothing & merchandise</OptionMenu>
                        <OptionMenu>Art & illustration</OptionMenu>
                        <OptionMenu>Packaging & label</OptionMenu>
                        <OptionMenu>Book & magazine</OptionMenu>
                        <style>{`
                            .paddingButton {
                                padding: 2em;
                            }
                        `}</style>
                    </motion.div>
                </Flex>
            </Box>

            <Box as="main" css={Main}>
                <Grid as="section" css={SectionMain} templateColumns="repeat(3, 2fr)" gap={4}>
                    <Flex as="div" css={Flex1}>
                        <GridItem colSpan={3} css={DivGrid}>
                            <Box as="span" css={SpanGrid}>
                                <Star size={20} color="#ffffff" weight="fill" />
                                <p>Most popular</p>
                            </Box>

                            <Box as="div" css={DivGrid2}>
                                <img src={icon1} alt="Logo & identity pack" />
                                <div className="description">
                                    <Heading as="h2" size="md">Logo & identity pack</Heading>
                                    <Box as="div" css={DivGrid3}>
                                        <p>from US$599</p>
                                        <span>Save 39%+</span>
                                    </Box>
                                </div>
                            </Box>

                            <Box as="div" css={DivGrid4}>
                                <p>A logo plus digital and print essentials to kick-start your brand</p>

                                <ul>
                                    <li>Logo</li>
                                    <li>Business card</li>
                                    <li>Letterhead & Envelope</li>
                                    <li>Facebook cover</li>
                                </ul>
                            </Box>
                        </GridItem>

                        <GridItem css={DivBox2}>
                            <img src={icon2} alt="Logo design" />
                            <div className="description2">
                                <Heading as="h2" size="md">Logo design</Heading>
                                <p>from US$299</p>
                            </div>
                            
                            <p>An unforgettable logo crafted for your brand</p>
                        </GridItem>

                        <GridItem css={DivBox3}>
                            <img src={icon3} alt="Business card" />

                            <div>
                                <Heading as="h2" size="md">Business card</Heading>
                                <p>from US$169</p>
                            </div>

                            <p>A unique card designed to build connections</p>
                        </GridItem>
                    </Flex>

                    <Flex css={Flex2}>
                        <GridItem colSpan={2} css={DivBox4}>
                            <div className="infos">
                                <img src={icon4} alt="Logo & brand guid" />

                                <div className="description3">
                                    <Heading as="h2" size="md">Logo & brand guid</Heading>

                                    <div>
                                        <p>from US$429</p>
                                        <span>Save US$70</span>
                                    </div>
                                </div>
                            </div>

                            <div className="options">
                                <p>Extend your logo design into a real brand with matching fonts, colors and style</p>

                                <ul>
                                    <li>Logo</li>
                                    <li>Brand guide document</li>
                                </ul>
                            </div>
                        </GridItem>

                        <GridItem css={DivBox4} style={{ borderLeft: '1px solid #dad9d7' }}>
                            <div className="infos">
                                <img src={icon5} alt="Logo & business card" />

                                <div className="description3">
                                    <Heading as="h2" size="md">Logo & business card</Heading>
                                    <div>
                                        <p>from US$499</p>
                                        <span>Save US$49</span>
                                    </div>
                                </div>
                            </div>

                            <div className="options">
                                <p>A logo and business card design that pair perfectly</p>

                                <ul>
                                    <li>Logo</li>
                                    <li>Business card</li>
                                </ul>
                            </div>
                        </GridItem>
                    </Flex>

                    <Flex css={Flex4}>
                        <GridItem colSpan={3} css={DivBox4}>
                            <div className="infos">
                                <img src={icon6} alt="Logo & website" />

                                <div className="description3">
                                    <Heading as="h2" size="md">Logo & website</Heading>

                                    <div>
                                        <p>from US$1,399</p>
                                        <span>Save up to US$300</span>
                                    </div>
                                </div>
                            </div>

                            <div className="options">
                                <p>A custom logo and Squarespace website that matches your brand</p>

                                <ul>
                                    <li>Logo</li>
                                    <li>Fully functioning, custom-designed Squarespace website</li>
                                    <li>Content uploaded for you</li>
                                </ul>
                            </div>
                        </GridItem>
                        
                        <img className="image" src={image} alt="image of letters and fish" />
                    </Flex>

                    <Flex css={Flex4}>
                        <GridItem colSpan={3} css={DivBox4} style={{ width: "99%" }}>
                            <div className="infos">
                                <img src={icon7} alt="Logo & social media pack" />

                                <div className="description3">
                                    <Heading as="h2" size="md">Logo & social media pack</Heading>

                                    <div>
                                        <p>from US$399</p>
                                        <span>Save US$137</span>
                                    </div>
                                </div>
                            </div>

                            <div className="options">
                                <p>Logo and social media cover images to make an impression online</p>

                                <ul>
                                    <li>Logo</li>
                                    <li>Facebook cover</li>
                                    <li>Twitter header</li>
                                    <li>YouTube background</li>
                                </ul>
                            </div>

                            <span style={{ alignSelf: "end" }}>by dalibor rych</span>
                        </GridItem>
                    </Flex>
                    
                    <Flex css={Flex5}>
                        <GridItem css={DivBox3} style={{borderRight: "1px solid #dad9d7", paddingRight: "2em", paddingBottom: "1em"}}>
                            <img src={icon8} alt="Brand guide" />

                            <div>
                                <Heading as="h2" size="md">Brand guide</Heading>
                                <p>from US$299</p>
                            </div>

                            <p>A comprehensive guide of your brand´s fonts, colors and style</p>
                        </GridItem>

                        <GridItem css={DivBox3} style={{borderRight: "1px solid #dad9d7", paddingRight: "2em", paddingBottom: "1em"}}>
                            <img src={icon9} alt="Stationery" />

                            <div>
                                <Heading as="h2" size="md">Stationery</Heading>
                                <p>from US$199</p>
                            </div>

                            <p>Letterhead and envelopes that send your brand´s message</p>
                        </GridItem>

                        <GridItem colSpan={2} css={DivBox5} style={{paddingLeft: "2em", borderBottom: "1px solid #dad9d7"}}>
                            <div className="infos2">
                                <img src={icon1} alt="Full-service Brand Pack" />

                                <div className="description4">
                                    <Heading as="h2" size="md">Full-service Brand Pack</Heading>
                                    <p>from US$3,999</p>
                                </div>
                            </div>

                            <p>A strategically creafted brand identity guided by your personal Creative Director from 99designs Studio</p>
                        </GridItem>
                    </Flex>
                </Grid>

                <Box as="div" css={Info}>
                    <Heading as="strong" size="lg">Find the right brand solution for you</Heading>

                    <div className="infos3">
                        <div className="description5">
                            <p>Answer a few simple questions about your business and we'll recommend a design solution that's right for you.</p>

                            <Button>Take the branding quiz</Button>
                        </div>
                        
                        <div className="imageInfo">
                            <p style={{ color: "#5B5A58" }}>Illustration by wildanya</p>
                            <img src={image2} alt="Girl viewing information screen" />
                        </div>
                    </div>
                </Box>
            </Box>
        </div>
    );
}