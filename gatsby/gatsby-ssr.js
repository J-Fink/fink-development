import React from 'react';
import Layout from './src/components/Layout';
import Terser from 'terser';



import {
    COLOR_MODE_KEY,
    COLORS,
    INITIAL_COLOR_MODE_CSS_PROP,
} from './src/constants';
function setColorsByTheme() {
    const colors = '🌈';
    const colorModeKey = '🔑';
    const colorModeCssProp = '⚡️';
  
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const prefersDarkFromMQ = mql.matches;
    const persistedPreference = localStorage.getItem(colorModeKey);
    console.log(persistedPreference);
    let colorMode = 'light';
  
    const hasUsedToggle = typeof persistedPreference === 'string';
    console.log(hasUsedToggle);

    if (hasUsedToggle === true) {
      colorMode = persistedPreference;
      console.log(colorMode);
    } else {
      colorMode = prefersDarkFromMQ ? 'dark' : 'light';
    }
  
    let root = document.documentElement;
  
    root.style.setProperty(colorModeCssProp, colorMode);
    console.log(colorMode);
    Object.entries(colors).forEach(([name, colorByTheme]) => {
      const cssVarName = `--${name}`;
  
      root.style.setProperty(cssVarName, colorByTheme[colorMode]);
    });
  }
  
  const MagicScriptTag = () => {
    const boundFn = String(setColorsByTheme)
      .replace("'🌈'", JSON.stringify(COLORS))
      .replace('🔑', COLOR_MODE_KEY)
      .replace('⚡️', INITIAL_COLOR_MODE_CSS_PROP);
  
    let calledFunction = `(${boundFn})()`;
  
    calledFunction = Terser.minify(calledFunction).code;
  
    // eslint-disable-next-line react/no-danger
    return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />;
  };
  
  /**
   * If the user has JS disabled, the injected script will never fire!
   * This means that they won't have any colors set, everything will be default
   * black and white.
   * We can solve for this by injecting a `<style>` tag into the head of the
   * document, which sets default values for all of our colors.
   * Only light mode will be available for users with JS disabled.
   */
  const FallbackStyles = () => {
    // Create a string holding each CSS variable:
    /*
      `--color-text: black;
      --color-background: white;`
    */
  
    const cssVariableString = Object.entries(COLORS).reduce(
      (acc, [name, colorByTheme]) => {
        return `${acc}\n--${name}: ${colorByTheme.light};`;
      },
      ''
    );
  
    const wrappedInSelector = `html { ${cssVariableString} }`;
  
    return <style>{wrappedInSelector}</style>;
  };
  
  export const onRenderBody = ({ setPreBodyComponents, setHeadComponents }) => {
    setHeadComponents(<FallbackStyles />);
    setPreBodyComponents(<MagicScriptTag />);
  };


export function wrapPageElement({ element, props }) {
    return <Layout {...props}>{element}</Layout>;
}