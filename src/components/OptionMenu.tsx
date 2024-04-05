import { OptionsMenu } from "../Screens/Categories/CategoriesStyles";

import { Button } from '@chakra-ui/react';

interface OptionMenuProps {
    title: string
}
export function OptionMenu({ title }: OptionMenuProps) {
    return(
        <Button as="button" css={OptionsMenu}>
            {title}
        </Button>
    );
}