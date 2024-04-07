import { House, Lightning, User, Lightbulb, Buildings, ListBullets } from 'phosphor-react';
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
            height: "100vh",
            backgroundColor: `${theme.colors.brand.backgroundMainText}`,
            position: "absolute",
            top: "0",
            left: "0",
            zIndex: "1",
        }

        return css`
            display: ${menuStyle.display};
            flex-direction: ${menuStyle.flexDirection};
            gap: ${menuStyle.gap};
            width: ${menuStyle.width};
            height: ${menuStyle.height};
            background-color: ${menuStyle.backgroundColor};
            position: ${menuStyle.position};
            top: ${menuStyle.top};
            left: ${menuStyle.left};
            z-index: ${menuStyle.zIndex};

            ul {
                display: flex;
                
                padding-top: 1em;

                flex-direction: column;
                gap: 0.7em;

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
            <ul>
                <li><a href="#"><House size={18} weight="fill" /> Home</a></li>
                <li><a href="#"><ListBullets size={18} /> Browse categories</a></li>
                <li><a href="#"><Lightning size={18} weight="fill" /> How it works</a></li>
                <li><a href="#"><User size={18} weight="fill" /> Find a designer</a></li>
                <li><a href="#"><Lightbulb size={18} weight="fill" /> Inspiration</a></li>
                <li><a href="#"><Buildings size={18} weight="fill" /> Agencies</a></li>
            </ul>
        </Box>
    );
}