/** @jsx h */

import { h } from 'preact';
import Centered from '@storybook/addon-centered/preact';
import Loading from './index';
import { LoadingStateType } from './types';

export default {
    title: 'Loading', component: Loading, parameters: { notes: '加载' }, decorators: [Centered]
}
export const loading = () => <Loading state={LoadingStateType.LOADING}>加载成功子组件展示</Loading>;
loading.story = {
    name: '加载中',
    parameters: {
        notes: '加载中组件展示',
    },
    decorators: [Centered],
};

export const loadingFail = () => <Loading state={LoadingStateType.FAIL} description="网络不好，加载失败">加载成功子组件展示</Loading>;
loadingFail.story = {
    name: '加载失败',
    parameters: {
        notes: '加载失败组件展示',
    },
    decorators: [Centered],
};

export const loadingSuccess = () => <Loading state={LoadingStateType.SUCCESS}>加载成功子组件展示</Loading>;
loadingSuccess.story = {
    name: '加载成功',
    parameters: {
        notes: '加载成功组件展示',
    },
    decorators: [Centered],
};