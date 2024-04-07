import React from 'react';

import { OptionsMenu } from "../Screens/Categories/CategoriesStyles";

import { Button } from '@chakra-ui/react';
import { MagnifyingGlass } from 'phosphor-react';

import { useNavigate } from "react-router-dom";

interface OptionMenuProps {
    children?: React.ReactNode | string;
    icon?: React.ElementType;
    isFirstButton?: boolean;
    styleButton?: boolean;
}
export function OptionMenu({ children, icon, isFirstButton, styleButton, ...props }: OptionMenuProps){
    const navigate = useNavigate();
    
    return(
        <Button 
            as="button" 
            css={OptionsMenu} 
            leftIcon={icon && <MagnifyingGlass size={25} />}
            style={{...(styleButton && { color: "#fff", backgroundColor: "#01A1C1" })}}
            className={isFirstButton ? "paddingButton" : "option"}
            onClick={styleButton ? () => navigate("/checkout") : undefined}
            {...props} 
        >   
            { children }
        </Button>
    );
}