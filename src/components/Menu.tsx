import { House, Lightning, User, Lightbulb, Buildings, ListBullets, Phone, Question } from 'phosphor-react';
import { theme } from '../theme';
import { css } from '@emotion/react';
import { Box } from '@chakra-ui/react';

export function Menu() {
    const Menu = () => {
        const menuStyle = {
            display: "flex",
            flexDirection: "column",
            gap: "1em",
            width: "260px",
            backgroundColor: `${theme.colors.brand.backgroundMainText}`,
            position: "absolute",
            top: "0",
            left: "0",
            zIndex: "1",
            overflowY: "auto",
            height: "100vh",
        }

        return css`
            display: ${menuStyle.display};
            flex-direction: ${menuStyle.flexDirection};
            gap: ${menuStyle.gap};
            width: ${menuStyle.width};
            background-color: ${menuStyle.backgroundColor};
            position: ${menuStyle.position};
            top: ${menuStyle.top};
            left: ${menuStyle.left};
            z-index: ${menuStyle.zIndex};
            overflow-y: ${menuStyle.overflowY};
            height: ${menuStyle.height};

            strong {
                padding-left: 1em;
            }

            div {
                padding-top: 2em;
            }

            ul, div {
                color: ${theme.colors.brand.titleOptions};
            }

            ul {
                display: flex;
                
                padding-top: 1em;

                flex-direction: column;
                gap: 0.7em;

                border-bottom: 1px solid ${theme.colors.brand.boxMenu};

                
                padding-bottom: 2em;
                
                li {
                    display: inline;
                    padding: 1em;

                    font-weight: normal;

                    font-size: 0.9em;

                    a {
                        display: flex;
                        align-items: center;
    
                        gap: 1em;
                    }

                    &:hover {
                        background-color: ${theme.colors.brand.boxMenu};
                    }
                }
            }
        `
    }

    return(
        <Box as="div" css={Menu}>
            <div>
                <ul>
                    <li><a href="#"><House size={18} weight="fill" /> Home</a></li>
                    <li><a href="#"><ListBullets size={18} /> Browse categories</a></li>
                    <li><a href="#"><Lightning size={18} weight="fill" /> How it works</a></li>
                    <li><a href="#"><User size={18} weight="fill" /> Find a designer</a></li>
                    <li><a href="#"><Lightbulb size={18} weight="fill" /> Inspiration</a></li>
                    <li><a href="#"><Buildings size={18} weight="fill" /> Agencies</a></li>
                </ul>

                <div>
                    <strong>Design services</strong>

                    <ul>
                        <li><a href="#">Design contests</a></li>
                        <li><a href="#">1-to-1 Projects</a></li>
                        <li><a href="#">Find a designer</a></li>
                        <li><a href="#">Inpisration</a></li>
                        <li><a href="#">Agencies</a></li>
                        <li><a href="#">99designs Studio</a></li>
                        <li><a href="#">99designs Select</a></li>
                    </ul>
                </div>

                <div>
                    <strong>Get a design</strong>

                    <ul>
                        <li><a href="#">Logo design</a></li>
                        <li><a href="#">Business design</a></li>
                        <li><a href="#">Web page design</a></li>
                        <li><a href="#">Brand guide</a></li>
                        <li><a href="#">Browse all categories</a></li>
                    </ul>
                </div>

                <div>
                    <strong>Support</strong>

                    <ul>
                        <li 
                            style={{ fontWeight: "bold" }} 
                        >
                            <a href="#"><Phone size={18} weight="fill" /> +1 877 834 4534</a>
                        </li>

                        <li
                            style={{ fontWeight: "bold" }}
                        >
                            <a href="#"><Question size={18} weight="fill" /> Help Center</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <strong>Resources</strong>

                    <ul>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Become a designer</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>
            </div>
        </Box>
    );
}