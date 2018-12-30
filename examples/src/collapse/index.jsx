import React, {Component} from 'react';
import {Collapse} from 'components';
const Panel = Collapse.Panel;

class Index extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <div className="collapse">
                <Collapse accordion={true} forceRender={false}>
                    <Panel header="header first" key="1">
                        <div className="">
                            内容3
                        </div>
                    </Panel>
                    <Panel header="second first" key="2">
                        <div className="">
                            内容2
                        </div>
                    </Panel>
                    <Panel header="third first" key="3">
                        <div className="">
                            内容3
                        </div>
                    </Panel>
                </Collapse>
            </div>
        );
    }
}

export default Index;
