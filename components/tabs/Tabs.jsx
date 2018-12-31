import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import className from 'classnames';
import propTypes from 'prop-types';

class Tabs extends Component {
    constructor (props) {
        super(props);
        this.tabsRef = React.createRef();
        this.barRef = React.createRef();
        this.state = {
            active: props.active || props.defaultActive
        };
    }

    componentDidMount () {
        this.getTabItemsWidth();
    }

    componentDidUpdate () {
        this.getTabItemsWidth();
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.active !== nextProps.active) {
            this.setState({
                active: nextProps.active
            });
        }
    }

    /**
     * 获取各个tabs的宽度
     */
    getTabItemsWidth () {
        if (!this.tabsDom) {
            this.tabsDom = ReactDOM.findDOMNode(this.tabsRef.current);
        }
        if (!this.barDom) {
            this.barDom = ReactDOM.findDOMNode(this.barRef.current);
        }
        const state = this.state;
        let childrenNodes = [...this.tabsDom.children];
        let left = 0;
        for (let index = 0; index < childrenNodes.length; index++) {
            if (index === state.active) {
                break;
            }
            left += childrenNodes[index].offsetWidth;
        }
        this.barDom.style.width = `${childrenNodes[state.active].offsetWidth}px`;
        this.barDom.style.left = `${left}px`;
    }

    onTabClick (index) {
        const props = this.props;
        if (index === this.state.active) {
            return false;
        }

        if (!('active' in props)) {
            this.setState({
                active: index
            });
        }

        if ('onChange' in this.props) {
            this.props.onChange(index);
        }
    }

    renderTabs () {
        const props = this.props;
        const state = this.state;
        let tabItemList = [];
        let tabPanelList = [];
        let width = `${100 / (props.children.length || 1)}%`;
        React.Children.forEach(props.children, (tab, index) => {
            const tabClassName = className({
                'cooTab-item': true,
                'cooTab-item--active': index === state.active
            });

            tabItemList.push(<div key={index} className={tabClassName} onClick={this.onTabClick.bind(this, index)}>{tab.props.header}</div>);
            tabPanelList.push(<div key={index} className={className('cooTab-panel')} style={{ width }}>{tab.props.children}</div>);
        });
        return [tabItemList, tabPanelList];
    }

    render () {
        const state = this.state;
        const contents = this.renderTabs();
        let wrapperStyle = {
            width: `${contents[1].length * 100}%`,
            marginLeft: `-${state.active * 100}%`
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
                <div className={className('cooTab-content')}>
                    <div className={className('cooTab-wrapper cooClearfix')}
                         style={wrapperStyle}>
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
