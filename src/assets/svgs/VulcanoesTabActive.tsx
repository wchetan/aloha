import * as React from 'react';
import {SvgXml} from 'react-native-svg';

const xml = `
 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_6_944" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
<rect width="24" height="24" fill="#008080"/>
</mask>
<g mask="url(#mask0_6_944)">
<path d="M1 18L7 10L11.5 16H19L14 9.35L11.5 12.65L10.25 11L14 6L23 18H1ZM5 16H9L7 13.325L5 16Z" fill="#008080"/>
</g>
</svg>

`;

export default () => <SvgXml xml={xml} />;
