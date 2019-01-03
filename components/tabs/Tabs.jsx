import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import className from 'classnames';
import propTypes from 'prop-types';

/**
 * todo
 * tabs 支持触屏滑动，切换一个tab
 */

class Tabs extends Component {
    constructor (props) {
        super(props);
        this.tabsRef = React.createRef();
        this.barRef = React.createRef();
        this.contentRef = React.createRef();
        this.wrapperRef = React.createRef();

        this.state = {
            active: props.active || props.defaultActive,
            length: props.children.length || 1,
        };
    }

    componentDidMount () {
        this.getDoms();
        this.setBarPosition();
    }

    componentDidUpdate () {
        this.setBarPosition();
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.active !== nextProps.active) {
            this.setState({
                active: nextProps.active,
                length: nextProps.length || 1
            });
        }
    }

    /**
     * 获取各个tabs的宽度，用于计算tabBar滑块的宽度
     */
    getDoms () {
        if (!this.tabsDom) {
            this.tabsDom = ReactDOM.findDOMNode(this.tabsRef.current);
        }

        if (!this.barDom) {
            this.barDom = ReactDOM.findDOMNode(this.barRef.current);
        }

        if (!this.contentDom) {
            this.contentDom = ReactDOM.findDOMNode(this.contentRef.current);
            // 设置容器宽度
            this.setContentWidth();
        }

        // tabs
        this.childrenNodes = [...this.tabsDom.children];
    }

    setBarPosition () {
        const state = this.state;
        let left = 0;
        for (let index = 0; index < this.childrenNodes.length; index++) {
            if (index === state.active) {
                break;
            }
            left += this.childrenNodes[index].offsetWidth;
        }
        this.barDom.style.width = `${this.childrenNodes[state.active].offsetWidth}px`;
        this.barDom.style.left = `${left}px`;
    }

    /**
     * 设置容器宽度
     */
    setContentWidth () {
        const state = this.state;
        const contentWidth = this.contentDom.offsetWidth;

        this.setState({
            contentWidth: contentWidth,
            wrapperWidth: state.length * contentWidth
        });
    }

    /**
     * 设置当前激活页
     */
    setActive (index) {
        const state = this.state;
        const props = this.props;

        if (index === state.active) {
            return false;
        }

        if (!('active' in props)) {
            this.setState({
                active: index
            });
        }

        if ('onChange' in props) {
            props.onChange(index);
        }
    }

    onTabClick (index) {
        this.setActive(index);
    }

    renderTabs () {
        const props = this.props;
        const state = this.state;
        let tabItemList = [];
        let tabPanelList = [];
        let width = `${state.contentWidth}px`;
        React.Children.forEach(props.children, (tab, index) => {
            const tabClassName = className({
                'cooTab-item': true,
                'cooTab-item--active': index === state.active
            });

            const panelClassName = className({
                'cooTab-panel': true,
                'cooTab-panel--active': index === state.active
            });

            tabItemList.push(
                (
                    <div key={index}
                         className={tabClassName}
                         onClick={this.onTabClick.bind(this, index)}>
                        {tab.props.header}
                    </div>
                )
            );
            tabPanelList.push(
                (
                    <div key={index}
                         className={panelClassName}
                         style={{ width }}>
                        {tab.props.children}
                    </div>
                )
            );
        });
        return [tabItemList, tabPanelList];
    }

    render () {
        const state = this.state;
        const contents = this.renderTabs();
        let wrapperStyle = {
            width: `${state.wrapperWidth}px`,
            transform: `translateX(${-state.active * state.contentWidth}px)`
        };

        return (
            <div className={className('cooTab')}>
                <div className={className('cooTab-header')}>
                    <div className={className('cooTab-list cooClearfix')}
                         ref={this.tabsRef}>
                        {contents[0]}
                    </div>
                    <div className={className('cooTab-bar')}
                         ref={this.barRef} />
                </div>
                <div className={className('cooTab-content')}
                     ref={this.contentRef}>
                    <div className={className('cooTab-wrapper cooClearfix')}
                         style={wrapperStyle}
                         ref={this.wrapperRef}>
                        {contents[1]}
                    </div>
                </div>
            </div>
        );
    }
}

Tabs.defaultProps = {
    defaultActive: 0
};

Tabs.propTypes = {
    defaultActive: propTypes.number,
    active: propTypes.number,
    onChange: propTypes.func,
};

export default Tabs;
