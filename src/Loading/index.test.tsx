import { h } from 'preact';
import { mount, shallow, render } from 'enzyme';
// import { act } from 'preact/test-utils';
import Loading from './index';
import { LoadingStateType } from './types';

describe('Loading', () => {
    it('测试加载中不显示内容', () => {
        const wrapper = shallow(
            <Loading state={LoadingStateType.LOADING}>
                <div className="real-content" />
            </Loading>
        );
        expect(wrapper.find('.h5-load-content').length).toBe(1);
        expect(wrapper.find('.real-content').length).toBe(0);
    });
    it('测试加载成功显示内容', () => {
        const wrapper = shallow(
            <Loading state={LoadingStateType.SUCCESS}>
                <div className="real-content" />
            </Loading>
        );
        expect(wrapper.find('.real-content').length).toBe(1);
    });
});
