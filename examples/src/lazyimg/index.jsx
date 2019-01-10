import './index.scss';
import React, {Component} from 'react';
import propTypes from 'prop-types';
import className from 'classnames';
import {Lazyimg, Button} from 'components';

class index extends Component {
    constructor (props) {
        super(props);
        this.state = {
            auto01: false,
            auto02: false
        };
    }

    render () {
        return (
            <div className="demo demo--lazyimg">
                <h1 className="demo-title">Lazyimg 组件</h1>
                <div className="demo-description">
                    一个图片懒加载组件，可以外部控制加载，也可通过点击图片加载；<br />
                    分两张图片的懒加载,1、预加载图片(如果有)；2、真实图片(可设置自动加载)；<br />
                    加载失败会显示给用户重新加载的提示（icon）；<br />
                    以下是Lazyimg 组件的相关设置
                </div>
                <div className="panel">
                    <h2 className="panel-title">演示</h2>
                    <div className="panel-content">
                        <div className="panel-litetitle">GIF图片演示</div>
                        <div className="panel-line">
                            <Lazyimg height={188}
                                     width={350}
                                     thumb="https://coocssweb.github.io/react/photo/thumb.jpg"
                                     src="https://coocssweb.github.io/react/photo/photo.gif" />
                        </div>
                    </div>
                    <div className="panel-content">
                        <div className="panel-litetitle">JPG图片演示</div>
                        <div className="panel-line">
                            <Lazyimg height={188}
                                     width={350}
                                     thumb="https://coocssweb.github.io/react/photo/code_60.jpg"
                                     src="https://coocssweb.github.io/react/photo/code.jpg"
                                     auto={this.state.auto01} />

                            <Lazyimg height={188}
                                     width={350}
                                     auto={this.state.auto02}
                                     src="https://coocssweb.github.io/react/photo/codesss.jpg" />
                        </div>
                        <Button
                            onClick={() => {
                                this.setState({
                                    auto01: true
                                });
                            }}>加载第一张</Button>
                        <Button onClick={() => {
                            this.setState({
                                auto02: true
                            });
                        }}>加载第二张(不存在的图片)</Button>
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
