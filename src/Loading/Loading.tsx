/*
 * @Author: quanyj
 * @Date: 2020-04-16 17:00:28
 * @Last Modified by: quanyj
 * @Last Modified time: 2020-06-12 11:44:03
 */
/** @jsx h */

import { h, Component } from 'preact';
import './style/index.scss';
import { LoadingProps, LoadingStateType } from './types';

/**
 * 加载中控件
 */
export default class Loading extends Component<LoadingProps> {
    constructor(props: LoadingProps) {
        super(props);
        this.setState({ state: LoadingStateType.LOADING });
    }
    render() {
        const { state, children, txt, className } = this.props;
        if (state === LoadingStateType.SUCCESS && children) {
            return children;
        }
        const create = () => {
            if (state === LoadingStateType.LOADING) {
                return <div className="h5-loading-bg ani-rotate"></div>;
            }
            return <div className="h5-loading-bg ani-rotate"></div>;
            //return <div className="h5-loading-fail" />;
        };
        return (
            <div className={`h5-load flex-row flex-a-center flex-c-center ${className}`}>
                <div className="h5-load-content">
                    {create()}
                    <div className="txt">{txt !== undefined ? txt : '努力加载中...'}</div>
                </div>
            </div>
        );
    }
}
