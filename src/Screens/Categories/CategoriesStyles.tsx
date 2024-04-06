import { css } from "@emotion/react";
import { theme } from '../../theme';

export const Header = () => {
  const headerStyles = {
    backgroundColor: theme.colors.brand.backgroundHeader,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    paddingTop: "2em",
    paddingLeft: "14em",
    paddingBottom: "3em",
    gap: "1em"
  };

  return css`
    background-color: ${headerStyles.backgroundColor};
    width: ${headerStyles.width};
    display: ${headerStyles.display};
    flex-direction: ${headerStyles.flexDirection};
    padding-top: ${headerStyles.paddingTop};
    padding-left: ${headerStyles.paddingLeft};
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
    paddingLeft: "14em",
    paddingTop: "3em",
    paddingBottom: "3em",
  };

  return css`
    background-color: ${mainStyles.backgroundColor};
    width: ${mainStyles.width};
    display: ${mainStyles.display};
    flex-direction: ${mainStyles.flexDirection};
    padding-left: ${mainStyles.paddingLeft};
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
    display: "flex",
    flexDirection: "column",
    gap: "2em",
    paddingRight: "1.5em",
    paddingBottom: "1em"
  }

  return css`
    display: ${gridStyles.display};
    flex-direction: ${gridStyles.flexDirection};
    gap: ${gridStyles.gap};
    padding-right: ${gridStyles.paddingRight};
    padding-bottom: ${gridStyles.paddingBottom};

    border-bottom: 1px solid #dad9d7;
  `
}

export const SpanGrid = () => {
  const spanStyles = {
    width: "35%",
    display: "flex",
    justifyContent: "center",
    gap: "0.9em",
    backgroundColor: theme.colors.brand.mainOptions,
    padding: "0.2em",
    color: theme.colors.brand.backgroundMainText,
    borderRadius: "14px",
    borderLeft: "1px solid #dad9d7",
  }

  return css`
    width: ${spanStyles.width};
    display: ${spanStyles.display};
    justify-content: ${spanStyles.justifyContent};
    gap: ${spanStyles.gap};
    background-color: ${spanStyles.backgroundColor};
    padding: ${spanStyles.padding};
    color: ${spanStyles.color};
    border-radius: ${spanStyles.borderRadius};
    border-left: ${spanStyles.borderLeft};
    align-self: start;

    p {
      font-size: 0.9em;
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
      border: 1px solid #01A1C1;
      color: #01A1C1;

      padding: 1px 10px;

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
    width: "20%",
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
    width: "20%",
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

    border-bottom: 1px solid #dad9d7;

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
  const flexStyles = {
    display: "flex",
    gap: "1em",
  }

  return css`
    display: ${flexStyles.display};
  `
}

export const DivBox4 = () => {
  const boxStyles = {
    width: "40.6%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    gap: "1em",
    paddingLeft: "2em",
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
          color: #01A1C1;
          border: 1px solid #01A1C1;

          padding: 1px 10px;
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

  return css`
    display: ${flexStyles.display};
    gap: ${flexStyles.gap};

    img.image {
      position: absolute;

      right: 0;
      top: 920px;
      bottom: 0;
    }
  `
}

export const Flex5 = () => {
  return css`
    borderm-bottom: 1px solid #dad9d7;

    padding-bottom: 2em;
  `
}

export const DivBox5 = () => {
  const boxStyles = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    gap: "1em",
  }

  return css`
    display: ${boxStyles.display};
    justify-content: ${boxStyles.justifyContent};
    flex-direction: ${boxStyles.flexDirection};
    gap: ${boxStyles.gap};

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
    gap: "1em",
    backgroundColor: theme.colors.brand.backgroundInfo,
    padding: "2em",
    borderRadius: "20px"
  }
  return css`
    width: ${infoStyles.width};
    display: ${infoStyles.display};
    flex-direction: ${infoStyles.flexDirection};
    gap: ${infoStyles.gap};
    background-color: ${infoStyles.backgroundColor};
    padding: ${infoStyles.padding};
    border-radius: ${infoStyles.borderRadius};

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

      padding: 10px 5px;
    }
  `
}