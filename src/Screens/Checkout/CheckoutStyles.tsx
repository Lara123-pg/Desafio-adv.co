import { theme } from '../../theme';
import { css } from '@emotion/react';

import icon10 from '../../assets/icon10.png';

export const Header = () => {
    const headerStyles = {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.9em 3em",
    }

    return css`
        width: ${headerStyles.width};
        display: ${headerStyles.display};
        justify-content: ${headerStyles.justifyContent};
        padding: ${headerStyles.padding};
        align-items: ${headerStyles.alignItems};

        div.logoMenu {
            display: flex;

            gap: 0.6em;

            width: 700px;
            justify-content: space-between;
            align-items: center;
        }

        ul, div.phoneLogin, div.menuResponsivo {
            color: #313030;
            font-weight: bold;
        }

        ul {
            display: flex;

            gap: 1em;

            color: #313030;
            font-weight: bold;
        }

        div.phoneLogin {
            display: flex;

            gap: 1em;
            align-items: center;
        }

        button {
            background-color: ${theme.colors.brand.backgroundMainText};

            &:hover {
                background-color: ${theme.colors.brand.backgroundMainText};
            }
        }

        div.menuResponsivo {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;

            img.menuButton {
                width: 20px;
                height: 20px;

                &: hover {
                    cursor: pointer;
                }
            }

        }
    `
}

export const Main = () => {
    const mainStyles = {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "4em 3em",
    }

    return css`
        width: ${mainStyles.width};
        display: ${mainStyles.display};
        flex-direction: ${mainStyles.flexDirection};
        padding: ${mainStyles.padding};
    `
}

export const Section = () => {
    const sectionStyles = {
        display: "flex",
        flexDirection: "column",
        gap: "1em"
    }

    return css`
        display: ${sectionStyles.display};
        flex-direction: ${sectionStyles.flexDirection};
        gap: ${sectionStyles.gap};

        height: 620px;


        div.slideImages {
            display: flex;
            flex-direction: column;

            gap: 1em;

            img {
                width: 100%;
            }
        }

        div.infos {
            display: flex;
            justify-content: space-between;

            div.buttons {
                display: flex;
                gap: 1em;

                span {
                    width: 12px;
                    height: 12px;

                    background-color: ${theme.colors.brand.boxMenu};

                    border-radius: 50px;

                    transition: all 0.3s;


                    &:hover {
                        cursor: pointer;
                    }
                }
            }

            p {
                width: 200px;

                color: ${theme.colors.brand.descriptionOptions};

                font-size: 0.8em;

                text-align: end;

                a {
                    text-decoration: underline;
                }
            }
        }
    `
}

export const Aside = () => {
  const asideStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "2.5em 2em",
    gap: "2em",
    border: "1px solid #dad9d7",
    paddingBottom: "2em",
  }

  return css`
    display: ${asideStyles.display};
    flex-direction: ${asideStyles.flexDirection};
    justify-content: ${asideStyles.justifyContent};
    padding: ${asideStyles.padding};
    gap: ${asideStyles.gap};
    border: ${asideStyles.border};
    padding-bottom: ${asideStyles.paddingBottom};
   
    color: ${theme.colors.brand.menuCheckout};

    position: sticky;
    top: 0;

    p {
        font-size: 1.1em;
        font-weight: bold;
    }

    ul {
        line-height: 2.2em;

        li {
            display: flex;
            gap: 1em;

            font-size: 1em;
        }

        li::before {
            content: '✔  '
        }
    }

    button {
        display: flex;
        gap: 0.8em;

        background-color: ${theme.colors.brand.backgroundButtonInfo};

        color: #fff;

        border-radius: 20px;
    }
  `
}

export const Section2 = () => {
    const section2Styles = {
        display: "flex",
        flexDirection: "column",
        gap: "2em",
        width: "55%",
        paddingTop: "2em",
    }

    return css`
        display: ${section2Styles.display};
        flex-direction: ${section2Styles.flexDirection};
        gap: ${section2Styles.gap};
        width: ${section2Styles.width};
        padding-top: ${section2Styles.paddingTop};

        strong {
            font-size: 1.5em;
        }

        p {
            color: ${theme.colors.brand.menuCheckout};
        }
    `
}

export const Info2 = () => {
    const info1Styles = {
        display: "flex",
        flexDirection: "column",
        gap: "1em",
        fontSize: "1em",
        borderBottom: "1px solid #dad9d7",
        padding: "2em",
        paddingLeft: "0",
        paddingBottom: "4em",
    }

    return css`
        display: ${info1Styles.display};
        flex-direction: ${info1Styles.flexDirection};
        gap: ${info1Styles.gap};
        font-size: ${info1Styles.fontSize};
        border-bottom: ${info1Styles.borderBottom};
        padding: ${info1Styles.padding};
        padding-left: ${info1Styles.paddingLeft};
        padding-bottom: ${info1Styles.paddingBottom};
    `
}

export const Info3 = () => {
    const info1Styles = {
        display: "flex",
        flexDirection: "column",
        gap: "1em",
        fontSize: "1em",
        borderBottom: "1px solid #dad9d7",
        padding: "2em",
        paddingLeft: "0",
        paddingBottom: "4em",
        paddingTop: "4em"
    }

    return css`
        display: ${info1Styles.display};
        flex-direction: ${info1Styles.flexDirection};
        gap: ${info1Styles.gap};
        font-size: ${info1Styles.fontSize};
        border-bottom: ${info1Styles.borderBottom};
        padding: ${info1Styles.padding};
        padding-left: ${info1Styles.paddingLeft};
        padding-bottom: ${info1Styles.paddingBottom};
        padding-top: ${info1Styles.paddingTop};

        ul {
            line-height: 2.2em;
    
            li {
                display: flex;
                gap: 1em;
    
                font-size: 1em;
            }
    
            li::before {
                content: '✔  '
            }
        }
    `
}

export const Info4 = () => {
    const info1Styles = {
        display: "flex",
        flexDirection: "column",
        gap: "1em",
        fontSize: "1em",
        padding: "2em",
        paddingLeft: "0",
        paddingBottom: "4em",
        paddingTop: "4em"
    }

    return css`
        display: ${info1Styles.display};
        flex-direction: ${info1Styles.flexDirection};
        gap: ${info1Styles.gap};
        font-size: ${info1Styles.fontSize};
        padding: ${info1Styles.padding};
        padding-left: ${info1Styles.paddingLeft};
        padding-bottom: ${info1Styles.paddingBottom};
        padding-top: ${info1Styles.paddingTop};


        div.infosCollaboration {
            display: flex;
            flex-direction: column;
            gap: 1em;

            padding: 2em;

            border-radius: 10px;

            color: ${theme.colors.brand.menuCheckout};

            background-color: ${theme.colors.brand.backgroundCheckout};

            background-image: url(${icon10});
            background-repeat: no-repeat;
            background-position: bottom right;

            ul {
                line-height: 2.2em;
        
                li {
                    display: flex;
                    gap: 1em;
        
                    font-size: 1em;
                }
        
                li::before {
                    content: '✔  '
                }
            }

            a {
                display: flex;
                gap: 0.5em;

                width: 120px;

                align-items: center;

                img {
                    width: 10px;
                    height: 10px;
                }

                border-bottom: 1px solid ${theme.colors.brand.boxMenu};

                &:hover {
                    border-bottom-color: ${theme.colors.brand.menuCheckout};
                }
            }
        }
    `
}

export const Info5 = () => {
    const info1Styles = {
        display: "flex",
        flexDirection: "column",
        gap: "1em",
        fontSize: "1em",
        padding: "2em",
        paddingLeft: "0",
        paddingBottom: "2em",
    }

    return css`
        display: ${info1Styles.display};
        flex-direction: ${info1Styles.flexDirection};
        gap: ${info1Styles.gap};
        font-size: ${info1Styles.fontSize};
        padding: ${info1Styles.padding};
        padding-left: ${info1Styles.paddingLeft};
        padding-bottom: ${info1Styles.paddingBottom};

        div.images {
            display: flex;
            gap: 1em;

            span {
                font-weight: bold;
                color: ${theme.colors.brand.menuCheckout};
            }

            p {
                color: ${theme.colors.brand.descriptionOptions};
            }
        }

    `
}