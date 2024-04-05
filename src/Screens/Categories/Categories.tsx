import { OptionMenu } from '../../components/OptionMenu';
import { Header, H1, Nav } from './CategoriesStyles';
import { Box, Heading, Flex } from '@chakra-ui/react'
 
export function Categories() {
    return (
        <div>
            <Box as="header" css={Header}>
                <Heading as="h1" size={"lg"} css={H1}>What do you need designed?</Heading>

                <Flex as="nav" css={Nav}>
                    <OptionMenu title="Pesquisar" />
                    <OptionMenu title="Logo & identity" />
                    <OptionMenu title="Web & app design" />
                    <OptionMenu title="Business & advertising" />
                    <OptionMenu title="Clothing & merchandise" />
                    <OptionMenu title="Art & illustration" />
                    <OptionMenu title="Packaging & label" />
                    <OptionMenu title="Book & magazine" />
                </Flex>
            </Box>

            <main></main>
        </div>
    );
}