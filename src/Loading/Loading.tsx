/*
 * @Author: quanyj
 * @Date: 2020-06-15 18:14:08
 * @Last Modified by: quanyj
 * @Last Modified time: 2020-07-29 09:29:11
 */

/** @jsx h */

import { h, Component } from 'preact';
import './style/index.scss';
import { Props, LoadingStateType } from './types';
import { classNames } from '../utils/Utils';

/**
 *
 * 加载组件
 * @class Loading
 * @extends {Component<Props>}
 */
class Loading extends Component<Props> {
    constructor(props: Props) {
        super(props);
    }
    renderContent = () => {
        const { state, children, description, className } = this.props;
        if (state === LoadingStateType.LOADING) {
            return <div className="tassel-loading-bg tassel-ani-rotate"></div>;
        }
        return <div className="tassel-loading-fail" />;
    };
    render() {
        const { state, children, description, className } = this.props;
        if (state === LoadingStateType.SUCCESS) {
            return children;
        }

        return (
            <div className={classNames('tassel-loading', className)}>
                {this.renderContent()}
                <div className="tassel-description">{description !== undefined ? description : 'loading...'}</div>
            </div>
        );
    }
}
export default Loading;
