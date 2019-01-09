import './index.scss';
import React, {Component} from 'react';
import Level1_1 from './level1_1';
import Level1_2 from './level1_2';
import Level2_1 from './level2_1';
import Level2_2 from './level2_2';
import Level2_3 from './level2_3';

class Index extends Component {
    constructor (props) {
        super(props);
        this.state = {
            placement: 'right',
            visible: false
        };
    }

    onOpen (placement) {
        this.setState({
            placement: placement,
            visible: true
        });
    }

    render () {
        return (
            <div className="demo demo--coostore">
                <h1 className="demo-title">简易的组件通讯模式</h1>
                <div className="demo-description">
                    采用观察者模式，通过subscribe、notify实现组件内的通讯<br />
                    因此，层级很深的两个组件，不用通过props、ref来一层一层的回调<br />
                    可以打开调试面板看console.log，点击时只会render对应的组件，发起事件通知时，不用经过父组件传递，因此不会触发其他组件的更新。
                </div>
                <div className="panel">
                    <h2 className="panel-title">演示</h2>
                    <div className="panel-content">
                        <div className="panel-line">
                            <Level1_1>
                                <Level2_1>

                                </Level2_1>
                            </Level1_1>
                        </div>

                        <div className="panel-line">
                            <Level1_2>
                                <Level2_2>

                                </Level2_2>
                                <Level2_3>

                                </Level2_3>
                            </Level1_2>
                        </div>
                    </div>
                </div>
                <div className="panel">
                    <h2 className="panel-title">属性</h2>
                    <div className="panel-content">

                    </div>
                </div>
            </div>
        );
    }
}

export default Index;
