import './index.scss';
import React, {Component} from 'react';
import propTypes from 'prop-types';
import className from 'classnames';
import Code from '../code';
import {Placebo, Button} from 'components';

class index extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <div className="demo demo--placebo">
                <h1 className="demo-title">Placebo 组件</h1>
                <div className="demo-description">
                    Placebo 安慰剂组件<br />
                    有一种情况，页面内容加载时间很久很久！我们想要给我们的用户一些些安慰，告诉用户别慌，它在加载。
                    <br />这就是所谓的安慰剂。当然我们可以用Toast.loading，显示一个<i>"菊花"</i>，但是我们可以更酷，所以，就有了这个安慰剂。
                </div>
                <div className="panel">
                    <h2 className="panel-title">演示</h2>
                    <div className="panel-content">
                        <div className="panel-line">
                            <Button onClick={() => {
                                Placebo.open({fillColor: '255, 0, 0'});
                                setTimeout(() => {
                                    Placebo.close();
                                }, 3000);
                            }}>我需要一长达3秒的安慰</Button>
                            <Button type="normal" onClick={() => {
                                Placebo.open();
                                setTimeout(() => {
                                    Placebo.close();
                                }, 5000);
                            }}>我需要一长达5秒蓝色的安慰</Button>
                        </div>
                        <div className="panel-line">

                        </div>
                    </div>
                </div>
                <div className="panel">
                    <h2 className="panel-title">代码展示</h2>
                    <div className="panel-content">
                        <Code>
{
`<Button type="normal" onClick={() => {
    Placebo.open();
    // 可调用Placebo.close进行关闭，关闭默认不销毁组件；下次打开不会重新创建组件
    // 也可调用Placebo.desroy进行销毁，会销毁组件；下次打开需要重新创建组件
    setTimeout(() => {
        Placebo.close();
    }, 5000);
}}>我需要一长达5秒蓝色的安慰</Button>`
  }
                        </Code>
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

export default index;
