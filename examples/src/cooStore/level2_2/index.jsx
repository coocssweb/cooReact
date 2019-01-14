import React, {Component} from 'react';
import {cooStore} from 'components';

class Index extends Component {
    constructor (props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    componentDidMount () {
        this.unsubscribe = cooStore.subscribe('level2_2', this.setCount.bind(this));
    }

    componentWillUnmount () {
        this.unsubscribe();
    }

    setCount () {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }

    render () {
        console.log('update render 第二层：2-2');
        return (
            <div className="level">
                <div className="level-name">第二层：2-2</div>
                <div className="level-content">
                    <div className="level-display">按钮点击了【{this.state.count}】次</div>
                </div>
            </div>
        );
    }
}

export default Index;
