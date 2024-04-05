import { css } from "@emotion/react";
import { theme } from '../../theme';

export const Header = () => {
  const headerStyles = {
    backgroundColor: theme.colors.brand.backgroundHeader,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    paddingTop: "2em",
    paddingLeft: "8em",
    gap: "1em"
  };

  return css`
    background-color: ${headerStyles.backgroundColor};
    width: ${headerStyles.width};
    display: ${headerStyles.display};
    flex-direction: ${headerStyles.flexDirection};
    padding-top: ${headerStyles.paddingTop};
    padding-left: ${headerStyles.paddingLeft};
    gap: ${headerStyles.gap};
  `;
};

export const H1 = () => {
  const h1Styles = {
    color: theme.colors.brand.titleOptions
  };

  return css`
    color: ${h1Styles.color};
  `
}

export const Nav = () => {
  const navStyles = {
    gap: "2em",
    listStyle: "none"
  };

  return css`
    gap: ${navStyles.gap};
    list-style: ${navStyles.listStyle};
  `  
}

export const OptionsMenu = () => {
  const divMenuStyles = {
    backgroundColor: theme.colors.brand.boxMenu,
    alignItems: "center",
    justifyContent: "center",
    padding: "2em 7em",
  };

  return css`
    background-color: ${divMenuStyles.backgroundColor};
    align-items: ${divMenuStyles.alignItems};
    justify-content: ${divMenuStyles.justifyContent};
    padding: ${divMenuStyles.padding};
  `
}