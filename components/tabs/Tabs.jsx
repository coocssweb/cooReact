import React, {Component} from 'react';
import className from 'classnames';
import propTypes from 'prop-types';

class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 1
        };
    }

    componentDidMount () {
        this.getTabItemsWidth();
    }

    componentDidUpdate () {
        this.getTabItemsWidth();
    }

    /**
     * 获取各个tabs的宽度
     */
    getTabItemsWidth () {

    }

    renderTabs () {
        const props = this.props;
        let tabContent;
        let tabItemList;


    }

    render () {
        return (
            <div className={className('cooTabs')}>
                <div className={className('cooTabs-header')}>
                    <div className={className('cooTabs-list')}>

                    </div>
                    <div className={className('cooTabs-slide')}></div>
                </div>
                <div className={className('cooTabs-content')}>

                </div>
            </div>
        );
    }
}

Tabs.defaultProps = {
    active: 0
};

Tabs.PropTypes = {
    active: propTypes.number
};

export default Tabs;
