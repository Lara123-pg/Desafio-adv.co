import { useState } from 'react';
import { Box, Button, Flex, Heading } from '@chakra-ui/react';

import { Phone, ArrowDown } from 'phosphor-react';

import logo from '../../assets/logo.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import arrowRight from '../../assets/right-arrow.png';
import image5 from '../../assets/image5.jpg';
import image6 from '../../assets/image6.jpg';
import image7 from '../../assets/image7.jpg';

import { Header, Main, Aside, Section, Section2, Info2, Info3, Info4, Info5 } from './CheckoutStyles';

export function Checkout() {
    const [selectedOption, setSelectedOption] = useState(1);
    const [selectedLink, setSelectedLink] = useState(1);

    function selectedOptionButton(option: number) {
        setSelectedOption(option)
    }

    function selectedLinkBox(option: number) {
        setSelectedLink(option)
    }

    return(
        <div style={{ width: "100vw", backgroundColor: '#ffff' }}>
            <Box as="header" css={Header}>
                <div className="logoMenu">
                    <img src={logo} alt="Logo designs99" />

                    <nav>
                        <ul>
                            <li><a href="#">Categories</a></li>
                            <li><a href="#">How it works</a></li>
                            <li><a href="#">Find a designer</a></li>
                            <li><a href="#">Inspiration</a></li>
                            <li><a href="#">Studio</a></li>
                        </ul>
                    </nav>
                </div>

                <div className="phoneLogin">
                    <Button><Phone size={18} weight="fill" /> +1 877 834 4534</Button>
                    <a href="#">Log in</a>
                </div>
            </Box>

            <Box as="main" css={Main}>
                <Flex style={{ position: "relative" }}>
                    <Box as="section" css={Section}>
                        <div className="slideImages">
                            <img src={selectedOption == 1 ? image3 : image4} alt="Logo & brand identity pack images" />

                            <div className="infos">
                                <div className="buttons">   
                                    <span 
                                        style={{...selectedOption === 1 && { backgroundColor: "#5B5A58" }}}
                                        onClick={() => selectedOptionButton(1)}
                                    ></span>
                                    <span 
                                        style={{...selectedOption === 2 && { backgroundColor: "#5B5A58" }}}
                                        onClick={() => selectedOptionButton(2)}
                                    ></span>
                                </div>

                                <p>Design contest for <a href="https://en.99designs.com.br/brand-identity-pack/contests/young-creative-agency-needs-hype-brand-identity-977016">The Hype Lab </a>  Winning design by <a href="https://en.99designs.com.br/profiles/leonelbalza">leonelbalza</a></p>
                            </div>
                        </div>

                        <div className="links">
                            <a 
                                href="#infos3" 
                                style={{...selectedLink === 1 && { color: "#1c1b1a", borderBottom: "2px solid #1c1b1a" }}}
                                onClick={() => selectedLinkBox(1)}
                            >
                                What you get
                            </a>

                            <a 
                                href="#infos5"
                                style={{...selectedLink === 2 && { color: "#1c1b1a", borderBottom: "2px solid #1c1b1a" }}}
                                onClick={() => selectedLinkBox(2)}
                            >
                                How it works
                            </a>

                            <a 
                                href="#"
                                style={{...selectedLink === 3 && { color: "#1c1b1a", borderBottom: "2px solid #1c1b1a" }}}
                                onClick={() => selectedLinkBox(3)}
                            >
                                Pricing
                            </a>

                            <a 
                                href=""
                                style={{...selectedLink === 4 && { color: "#1c1b1a", borderBottom: "2px solid #1c1b1a" }}}
                                onClick={() => selectedLinkBox(4)}
                            >
                                FAQs
                            </a>
                        </div>

                    
                    </Box>

                    <Box as="aside" css={Aside}>
                        <Heading as="h1" size="lg">Logo & brand identity pack</Heading>

                        <p>Starting from $599</p>

                        <ul>
                            <li>1 finished, completely custom logo design</li>
                            <li>1 business card design</li>
                            <li>1 letterhead</li>
                            <li>1 envelope</li>
                            <li>1 Facebook cover</li>
                            <li>Full copyright ownership</li>
                            <li>Digital print and web files (RGB, CMYK, PNG, JPG, PDF)</li>
                            <li>The original, editable file (i.e. AI)</li>
                            <li>100% money back guarantee</li>
                        </ul>

                        <Button>Select a package <ArrowDown size={19} color="#ffffff" /></Button>
                    </Box>

                </Flex>

                <Box className="infosLinks" css={Section2}>
                      <div className="infosLink">
                        <Box as="div" className="infos2" css={Info2}>
                            <Heading as="strong" size="lg">Branding as unique as your business.</Heading>
                            <p>Invite our professional designers to bring your brand to life through custom logo design, business cards, letterhead and social media graphics.</p>
                        </Box>

                        <Box className="infos3" as="div" css={Info3} id="infos3">
                            <Heading as="strong" size="lg">What you get</Heading>

                            <ul>
                                <li>1 finished, completely custom logo design</li>
                                <li>1 business card design</li>
                                <li>1 letterhead</li>
                                <li>1 envelope</li>
                                <li>1 Facebook cover</li>
                                <li>Full copyright ownership</li>
                                <li>Digital print and web files (RGB, CMYK, PNG, JPG, PDF)</li>
                                <li>The original, editable file (i.e. AI)</li>
                                <li>100% money back guarantee</li>
                            </ul>
                        </Box>

                        <Box className="infos4" css={Info4}>
                            <Heading as="strong" size="lg">Collaboration method</Heading>

                            <div className="infosCollaboration">
                                <Heading as="h2" size="sm">Contest Bundle</Heading>
                
                                <p>Open your design brief to our entire community. Designers submit their ideas and you pick your favorite design.</p>

                                <ul>
                                    <li>Creative concepts from multiple designers</li>
                                    <li>Choose a winning design and receive copyright to the files</li>
                                    <li>Work with the winning designer to finalize deliverables in your bundle</li>
                                </ul>

                                <a href="#">Find out more <img src={arrowRight} alt="" /></a>
                            </div>
                        </Box>

                        <Box className="infos5" css={Info5} id="infos5">
                            <Heading as="strong" size="lg">How a contest works</Heading>

                            <div className="images">
                                <div className="image1">
                                    <img src={image5} alt="Boy thinking about design" />
                                    <span>01.</span>
                                    <p>Write a design brief</p>
                                </div>
                                
                                <div className="image2">
                                    <img src={image6} alt="People sharing their ideas" />
                                    <span>02.</span>
                                    <p>Designers submit concepts</p>
                                </div>

                                <div className="image3">
                                    <img src={image7} alt="Design choice" />
                                    <span>03.</span>
                                    <p>Pick a winning design</p>
                                </div>
                            </div>
                        </Box>
                    </div> 
                </Box>
            </Box>
        </div>
    );
}