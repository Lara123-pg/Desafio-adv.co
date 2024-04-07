import React from 'react';

import { OptionsMenu } from "../Screens/Categories/CategoriesStyles";

import { Button } from '@chakra-ui/react';
import { MagnifyingGlass } from 'phosphor-react';

interface OptionMenuProps {
    children?: React.ReactNode | string;
    icon?: React.ElementType;
    isFirstButton?: boolean;
    styleButton?: boolean;
}
export function OptionMenu({ children, icon, isFirstButton, styleButton, ...props }: OptionMenuProps){
    return(
        <Button 
            as="button" 
            css={OptionsMenu} 
            leftIcon={icon && <MagnifyingGlass size={25} />}
            style={{...(styleButton && { color: "#fff", backgroundColor: "#01A1C1" })}}
            className={isFirstButton ? "paddingButton" : "option"}
            {...props} 
        >   
            { children }
        </Button>
    );
}