/*
 * @Author: quanyj
 * @Date: 2019-11-21 15:22:36
 * @Last Modified by: quanyj
 * @Last Modified time: 2020-06-12 10:24:27
 */
import { h, Component } from 'preact';
import ButtonCheck from './ButtonCheck';
import Loading, { LoadingStateType } from '../Loading';
import { ButtonProps } from './types';

interface State {
    isShowLoading: boolean;
    clicked: boolean;
}

export default class Button extends Component<ButtonProps, State> {
    private curTimeout: any;

    private timeout: any;

    private buttonCheck: any;

    static defaultProps = {
        disabled: false,
    };

    constructor(props: ButtonProps) {
        super(props);
        this.buttonCheck = new ButtonCheck(props.delayTime);
        this.state = { clicked: false, isShowLoading: false };
    }

    onItemClick = (e: any) => {
        if (!this.buttonCheck.check()) return;
        try {
            if (this.props.disabled === true) return;
            this.curTimeout = setTimeout(() => {
                this.setState({ clicked: true, isShowLoading: true });
            }, 10);
            if (this.timeout) {
                this.timeout();
            }
            this.timeout = setTimeout(() => {
                this.setState({ clicked: false, isShowLoading: false });
            }, this.props.delayTime || 200);
            this.props.onClick(e);
            this.report();
        } catch (e) {
            console.log(e);
        }
    };

    report() {
        if ((window as any).Logger) {
            const { clickId, statMap } = this.props;
        }
    }

    componentWillUnmount = () => {
        this.curTimeout && this.curTimeout();
        this.timeout && this.timeout();
    };

    render() {
        const { className, style, statId, clickId, disabled, ...other } = this.props;
        const { clicked, isShowLoading } = this.state;
        return (
            <div {...other} class={className} onClick={this.onItemClick}>
                {this.props.children}
                {isShowLoading ? <Loading state={LoadingStateType.LOADING}></Loading> : null}
            </div>
        );
    }
}
