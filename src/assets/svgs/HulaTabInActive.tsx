import * as React from 'react';
import {SvgXml} from 'react-native-svg';

const xml = `
 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_6_939" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
<rect width="24" height="24" fill="#000"/>
</mask>
<g mask="url(#mask0_6_939)">
<path d="M5 20V18H7V14L1 5H15L9 14V18H11V20H5ZM5.9 9H10.1L11.5 7H4.5L5.9 9ZM16 20C15.1667 20 14.4583 19.7083 13.875 19.125C13.2917 18.5417 13 17.8333 13 17C13 16.1667 13.2917 15.4583 13.875 14.875C14.4583 14.2917 15.1667 14 16 14C16.1833 14 16.3583 14.0125 16.525 14.0375C16.6917 14.0625 16.85 14.1167 17 14.2V5H22V8H19V17C19 17.8333 18.7083 18.5417 18.125 19.125C17.5417 19.7083 16.8333 20 16 20Z" fill="#001A1A"/>
</g>
</svg>

`;

export default () => <SvgXml xml={xml} />;
