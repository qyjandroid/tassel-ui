/** @jsx h */

import { h } from 'preact';
import Loading, { LoadingStateType } from './index.ts';

export default { title: 'Loading' }


export const withText = () => (
    <Loading>Hello Button</Loading>
);
