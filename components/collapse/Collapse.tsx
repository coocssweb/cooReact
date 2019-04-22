import React, {Component} from 'react';
import className from 'classnames';
import propTypes from 'prop-types';
import CollapseItem from './Item';

class Collapse extends Component {
    constructor (props) {
        super(props);
        let activeKey = props.defaultActiveKey;
        const keys = this.getActiveKey(props);
        this.state = {
            activeKey: keys || activeKey
        };
    }

    getActiveKey (props) {
        if ('activeKey' in props) {
            if (typeof props.activeKey === 'string') {
                return [props.activeKey];
            } else {
                return props.activeKey;
            }
        }
        return null;
    }

    componentWillReceiveProps (nextProps) {
        let keys = this.getActiveKey(nextProps);
        if (keys) {
            this.setState({
                activeKey: keys
            });
        }
    }

    onOpen (key, isOpened) {
        const props = this.props;
        // 有设置展开key、onChange回调
        // 则通过props控制展开项目
        if ('activeKey' in props && 'onChange' in props) {
            props.onChange(key, isOpened);
            return;
        }
        // 手风琴，每次只打开一箱
        if (props.accordion) {
            this.setState({
                activeKey: isOpened ? [key] : []
            });
            return;
        }
        // 可以打开多项，通过push、splice key，控制关闭/展开
        this.setState((prevState) => {
            if (isOpened) {
                return {
                    activeKey: [...prevState.activeKey, key]
                };
            }

            prevState.activeKey.splice(prevState.activeKey.indexOf(key), 1);
            return {
                activeKey: [...prevState.activeKey]
            };
        });
    }

    renderPanels () {
        const props = this.props;
        const state = this.state;
        const children = props.children;
        let panels = [];
        React.Children.forEach(children, (panel, index) => {
            let key = panel.key;
            const active = state.activeKey.includes(key);

            panels.push(
                <CollapseItem active={active}
                              forceRender={props.forceRender}
                              key={key}
                              header={panel.props.header}
                              onOpen={this.onOpen.bind(this, key, !active)}>
                    { panel.props.children }
                </CollapseItem>
            );
        });

        return panels;
    }

    render () {
        return (
            <div className={className('cooCollapse')}>
                {this.renderPanels()}
            </div>
        );
    }
}

Collapse.defaultProps = {
    defaultActiveKey: [],
    accordion: false,
    // todo
    // false 时，因为获取不到dom的高度，首次动画不流畅
    // 考虑把菜单放在外面
    // Item内只放内容，
    // 首次，在componentDidMount进行高度处理
    forceRender: true,
};

Collapse.propTypes = {
    defaultActiveKey: propTypes.array,
    activeKey: propTypes.oneOfType([propTypes.array, propTypes.string]),
    onChange: propTypes.func,
    accordion: propTypes.bool,
    forceRender: propTypes.bool,
};

export default Collapse;
