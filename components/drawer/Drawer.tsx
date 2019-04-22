import React, {Component} from 'react';
import className from 'classnames';
import propTypes from 'prop-types';
import Content from './Content';

class Drawer extends Component {
    constructor (props) {
        super(props);
        this.haveOpened = false;

        this.state = {

        };
    }

    onClose () {
        const props = this.props;
        if ('onClose' in props) {
            props.onClose();
        }
    }

    render () {
        const state = this.state;
        const props = this.props;
        this.haveOpened = this.haveOpened || props.visible;

        return (
            <div className={className('cooDrawer')}>
                {
                    this.haveOpened ? (
                        <Content
                            {...props}
                            onClose={this.onClose.bind(this)}>
                            { props.children }
                        </Content>
                    ) : null
                }
            </div>
        );
    }
}

Drawer.defaultProps = {
    visible: false,
    placement: 'right',
    size: 300,
    maskClosable: true,
    closable: true
};

Drawer.propTypes = {
    visible: propTypes.bool,
    placement: propTypes.oneOf(['top', 'right', 'bottom', 'left']),
    onClose: propTypes.func,
    width: propTypes.number,
    maskClosable: propTypes.bool,
    title: propTypes.string,
    closable: propTypes.bool
};

export default Drawer;
