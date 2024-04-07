import { css } from "@emotion/react";
import { theme } from '../../theme';

import { useBreakpointValue } from '@chakra-ui/react'

export const Header = () => {
  const headerStyles = {
    backgroundColor: theme.colors.brand.backgroundHeader,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    paddingTop: "2em",
    paddingBottom: "3em",
    gap: "1em"
  };

  const paddingLeft = useBreakpointValue({ base: "1em", sm: "3em", md: "5em", lg: "12em", xl: "14em" });

  return css`
    background-color: ${headerStyles.backgroundColor};
    width: ${headerStyles.width};
    display: ${headerStyles.display};
    flex-direction: ${headerStyles.flexDirection};
    padding-top: ${headerStyles.paddingTop};
    padding-left: ${paddingLeft};
    padding-bottom: ${headerStyles.paddingBottom};
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
    padding: "2em 4em",
    position: "relative"
  };

  return css`
    background-color: ${divMenuStyles.backgroundColor};
    align-items: ${divMenuStyles.alignItems};
    justify-content: ${divMenuStyles.justifyContent};
    padding: ${divMenuStyles.padding};
    position: ${divMenuStyles.position};
    overflow: visible;
    
    &:hover {
      background-color: ${theme.colors.brand.backgroundMainText};
    }
  `;
}

export const Main = () => {
  const mainStyles = {
    backgroundColor: theme.colors.brand.backgroundMainText,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "3em",
    paddingBottom: "3em",
  };

  const paddingLeft = useBreakpointValue({ base: "1em", sm: "3em", md: "5em", lg: "12em", xl: "14em" });

  return css`
    background-color: ${mainStyles.backgroundColor};
    width: ${mainStyles.width};
    display: ${mainStyles.display};
    flex-direction: ${mainStyles.flexDirection};
    padding-left: ${paddingLeft};
    padding-top: ${mainStyles.paddingTop};
    padding-bottom: ${mainStyles.paddingBottom};
  `
}

export const SectionMain = () => {
  const sectionStyles = {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    
  };

  return css`
    width: ${sectionStyles.width};
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    justify-content: ${sectionStyles.justifyContent};
    align-items: ${sectionStyles.alignItems};  
  `
}

export const Flex1 = () => {
  const flexStyles = {
    width: "100%",
  }

  return css`
    width: ${flexStyles.width};
  `
}

export const DivGrid = () => {
  const gridStyles = {
    width: "500px",
    display: "flex",
    flexDirection: "column",
    gap: "2em",
    paddingRight: "1.5em",
    paddingBottom: "1em"
  }

  return css`
    width: ${gridStyles.width};
    display: ${gridStyles.display};
    flex-direction: ${gridStyles.flexDirection};
    gap: ${gridStyles.gap};
    padding-right: ${gridStyles.paddingRight};
    padding-bottom: ${gridStyles.paddingBottom};

    border-bottom: 1px solid #dad9d7;    
    transition: box-shadow 0.3s;

    padding: 2em;

    z-index: 1;

    &:hover {
      box-shadow: 0 7px 21px 0 rgba(0,0,0,.1);
      -webkit-transform: scale(1.05,1.05);
      transform: scale(1.05,1.05)
      transition-duration: .3s;

      color: #01A1C1;
      cursor: pointer;

      z-index: 6;
    }
  `
}

export const SpanGrid = () => {
  const spanStyles = {
    width: "120px",
    display: "flex",
    justifyContent: "center",
    backgroundColor: theme.colors.brand.mainOptions,
    padding: "0.3em",
    color: theme.colors.brand.backgroundMainText,
    borderRadius: "14px",
    borderLeft: "1px solid #dad9d7",
    alignItems: "center",
    gap: "0.1em",
  }

  return css`
    width: ${spanStyles.width};
    display: ${spanStyles.display};
    justify-content: ${spanStyles.justifyContent};
    background-color: ${spanStyles.backgroundColor};
    padding: ${spanStyles.padding};
    color: ${spanStyles.color};
    border-radius: ${spanStyles.borderRadius};
    border-left: ${spanStyles.borderLeft};
    align-items: ${spanStyles.alignItems};
    gap: ${spanStyles.gap};
    align-self: start;

    p {
      font-size: 0.8em;
    }
  `
}

export const DivGrid2 = () => {
  const gridStyles = {
    width: "100%",
    display: "flex",
    gap: "2em",
  }

  return css`
    width: ${gridStyles.width};
    display: ${gridStyles.display};
    gap: ${gridStyles.gap};

    img {
      width: 20%;
      height: 70px;
    }

    div.description {
      flex-direction: column;
      display: flex;
      gap: 0.3em;
    }
  `
}

export const DivGrid3 = () => {
  const gridStyles = {
    display: "flex",
    gap: "1em",
  }

  return css`
    display: ${gridStyles.display};
    align-items: center;
    gap: ${gridStyles.gap};

    p {
      color: #5B5A58;
    }

    span {
      width: 130px;
      border: 1px solid #01A1C1;
      color: #01A1C1;

      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 0.9rem;
    }
  `
}

export const DivGrid4 = () => {
  const gridStyles = {
    display: "flex",
    flexDirection: "column",
    gap: "2em",
  }

  return css`
    display: ${gridStyles.display};
    flex-direction: ${gridStyles.flexDirection};
    gap: ${gridStyles.gap};
    color: #5B5A58;

    ul {
      li::before {
        content: '✔ ';

        color: #5B5A58;
      }
    }
  `
}

export const DivBox2 = () => {
  const boxStyles = {
    width: "230px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    gap: "1em",
    paddingLeft: "2em"
  }

  return css`
    width: ${boxStyles.width};
    display: ${boxStyles.display};
    justify-content: ${boxStyles.justifyContent};
    flex-direction: ${boxStyles.flexDirection};
    gap: ${boxStyles.gap};
    padding-left: ${boxStyles.paddingLeft};

    border-left: 1px solid #dad9d7;
    border-right: 1px solid #dad9d7;
    border-bottom: 1px solid #dad9d7;

    transition: box-shadow 0.3s;

    padding: 2em;

    z-index: 1;

    &:hover {
      box-shadow: 0 7px 21px 0 rgba(0,0,0,.1);
      -webkit-transform: scale(1.05,1.05);
      transform: scale(1.05,1.05)
      transition-duration: .3s;

      color: #01A1C1;
      cursor: pointer;

      z-index: 6;
    }

    img {
      width: 40%;
    }

    p {
      color: #5B5A58;
    }

    div.description2 {
      display: flex;
      flex-direction: column;
      gap: 0.3em;
    }
  `
}

export const DivBox3 = () => {
  const boxStyles = {
    width: "230px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    gap: "1em",
    paddingLeft: "2em",
    paddingTop: "2em"
  }

  return css`
    width: ${boxStyles.width};
    display: ${boxStyles.display};
    justify-content: ${boxStyles.justifyContent};
    flex-direction: ${boxStyles.flexDirection};
    gap: ${boxStyles.gap};
    padding-left: ${boxStyles.paddingLeft};
    padding-top: ${boxStyles.paddingTop};

    border-bottom: 1px solid #dad9d7;

    transition: box-shadow 0.3s;

    padding: 2em;

    z-index: 1;

    &:hover {
      box-shadow: 0 7px 21px 0 rgba(0,0,0,.1);
      -webkit-transform: scale(1.05,1.05);
      transform: scale(1.05,1.05)
      transition-duration: .3s;

      color: #01A1C1;
      cursor: pointer;

      z-index: 6;
    }

    img {
      width: 40%;
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 0.3em;
    }

    p {
      color: #5B5A58;
    }
  `
}

export const Flex2 = () => {
  return css`
    margin-top: -15px;
  `
}

export const DivBox4 = () => {
  const boxStyles = {
    width: "500px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    gap: "1em",
    paddingLeft: "3em",
    paddingTop: "2em",
    position: "relative"
  }

  return css`
    width: ${boxStyles.width};
    display: ${boxStyles.display};
    justify-content: ${boxStyles.justifyContent};
    flex-direction: ${boxStyles.flexDirection};
    gap: ${boxStyles.gap};
    padding-left: ${boxStyles.paddingLeft};
    padding-top: ${boxStyles.paddingTop};
    position: ${boxStyles.position};

    border-bottom: 1px solid #dad9d7;

    transition: box-shadow 0.3s;

    padding: 3em;

    z-index: 1;

    &:hover {
      box-shadow: 0 7px 21px 0 rgba(0,0,0,.1);
      -webkit-transform: scale(1.05,1.05);
      transform: scale(1.05,1.05)
      transition-duration: .3s;

      color: #01A1C1;
      cursor: pointer;

      z-index: 6;
    }

    div.infos {
      display: flex;
      gap: 1em;
    }

    div.description3 {
      display: flex;
      flex-direction: column;
      gap: 0.3em;

      div {
        display: flex;
        gap: 1em;
        align-items: center;
        color: #5B5A58;

        span {
          width: 160px;
          color: #01A1C1;
          border: 1px solid #01A1C1;

          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }

    div.options {
      display: flex;
      flex-direction: column;

      color: #5B5A58;

      gap: 1em;

      ul {
        li::before {
          content: '✔ ';
        }

        padding-bottom: 2em;
      }
    }

  `
}

export const Flex4 = () => {
  const flexStyles = {
    display: "flex",
    gap: "1em",
  }

  const right = useBreakpointValue({ base: "0", sm: "-20em", md: "-15em", lg: "-10em", xl: "-2em" });

  return css`
    display: ${flexStyles.display};
    gap: ${flexStyles.gap};

    div {
      display: flex;

    }
  
    img.image {
      position: absolute;

      right: ${right};
      top: 1000px;
      bottom: 0;
    }
  `
}

export const Flex5 = () => {
  return css`
    padding-bottom: 2em;

    margin-top: -15px;
  `
}

export const DivBox5 = () => {
  const boxStyles = {
    width: "500px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    gap: "1em",
  }

  return css`
    width: ${boxStyles.width};
    display: ${boxStyles.display};
    justify-content: ${boxStyles.justifyContent};
    flex-direction: ${boxStyles.flexDirection};
    gap: ${boxStyles.gap};

    transition: box-shadow 0.3s;

    padding: 2em;

    z-index: 1;

    &:hover {
      box-shadow: 0 7px 21px 0 rgba(0,0,0,.1);
      -webkit-transform: scale(1.05,1.05);
      transform: scale(1.05,1.05)
      transition-duration: .3s;

      color: #01A1C1;
      cursor: pointer;

      z-index: 6;
    }

    div.infos2 {
      display: flex;
    }

    p, span {
      color: #5B5A58;
    }
  `
}

export const Info = () => {
  const infoStyles = {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    gap: "1em",
    backgroundColor: theme.colors.brand.backgroundInfo,
    padding: "2em",
    borderRadius: "20px"
  }

  const marginRight = useBreakpointValue({ base: "1em", sm: "3em", md: "5em", lg: "12em", xl: "2em" });

  return css`
    width: ${infoStyles.width};
    justify-content: ${infoStyles.justifyContent};
    display: ${infoStyles.display};
    flex-direction: ${infoStyles.flexDirection};
    gap: ${infoStyles.gap};
    background-color: ${infoStyles.backgroundColor};
    padding: ${infoStyles.padding};
    border-radius: ${infoStyles.borderRadius};
    margin-right: ${marginRight};

    border: 1px solid #000;
    div.infos3 {
      display: flex;
      height: 100%;

      align-items: center;
    }

    div.description5 {
      display: flex;
      flex-direction: column;

      gap: 1em;
    }

    img {
      width: 100%;
    }

    button {
      width: 50%;
      background-color: #1c1b1a;
      color: #fff;

      border-radius: 20px;

      padding: 10px 8px;
    }
  `
}

