import { h } from 'preact';
import { mount, shallow, render } from 'enzyme';
// import { act } from 'preact/test-utils';
import Loading from './Loading';
import { LoadingStateType } from './types';

describe('Loading', () => {
    it('测试加载中不显示内容', () => {
        const wrapper = shallow(
            <Loading state={LoadingStateType.LOADING}>
                <div className="real-content" />
            </Loading>
        );
        expect(wrapper.find('.tassel-loading-bg').length).toBe(1);
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
    it('测试加载失败,展示失败图片，不展示子组件', () => {
        const wrapper = shallow(
            <Loading state={LoadingStateType.FAIL}>
                <div className="real-content" />
            </Loading>
        );
        expect(wrapper.find('.tassel-loading-fail').length).toBe(1);
        expect(wrapper.find('.real-content').length).toBe(0);
    });
});
