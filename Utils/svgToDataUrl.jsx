import React from 'react';
import { renderToString } from 'react-dom/server';

const getDataUrlFromComp = (iconComponent) => {
  // Render the icon component to an SVG string
  const iconSvgString = renderToString(iconComponent);

  // Convert the SVG string to a data URL
  const iconDataUrl = `data:image/svg+xml;base64,${window.btoa(
    unescape(encodeURIComponent(iconSvgString))
  )}`;

  return iconDataUrl;
};

export default getDataUrlFromComp;
