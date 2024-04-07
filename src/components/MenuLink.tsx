import { useState } from "react";
import { theme } from "../theme";
import { css } from "@emotion/react";
import { Box, useMediaQuery } from "@chakra-ui/react";

export function MenuLink() {
    const [selectedLink, setSelectedLink] = useState(1);


    const [is600px] = useMediaQuery("(max-width: 600px)");

    function selectedLinkBox(option: number) {
        setSelectedLink(option)
    }

    const Menu = () => {
        return css`
            width: 100%;
            display: flex;
            gap: 3em;

            position: sticky;
            top: 0;

            color: ${theme.colors.brand.links};
            font-weight: bold;

            border-bottom: 1px solid ${theme.colors.brand.boxMenu};

            a {
                line-height: 2.4em;

                &:hover {
                    color: ${theme.colors.brand.backgroundButtonInfo};
                    border-bottom: 2px solid ${theme.colors.brand.backgroundButtonInfo};
                }
            }
        `
    }

    return (
        <Box as="div" css={Menu}>
            <a 
                href="#infos3" 
                style={{...selectedLink === 1 && { color: "#1c1b1a", borderBottom: "2px solid #1c1b1a" }}}
                onClick={() => selectedLinkBox(1)}
            >
                What you get
            </a>

            {
                !is600px && (
                    <a 
                        href="#infos5"
                        style={{...selectedLink === 2 && { color: "#1c1b1a", borderBottom: "2px solid #1c1b1a" }}}
                        onClick={() => selectedLinkBox(2)}
                    >
                        How it works
                    </a>
                )
            }

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
        </Box>
    );
}