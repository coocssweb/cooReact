import React, {Component} from 'react';
import {Tabs} from 'components';
const TabItem = Tabs.TabItem;

class Index extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <div className="tabs">
                <Tabs>
                    <TabItem header="tab-01">
                        <div className="tabContent tabContent-01">
                            内容一
                        </div>
                    </TabItem>
                    <TabItem header="tab-02">
                        <div className="tabContent tabContent-01">
                            内容三
                        </div>
                    </TabItem>
                    <TabItem header="tab-03">
                        <div className="tabContent tabContent-01">
                            内容三
                        </div>
                    </TabItem>
                </Tabs>
            </div>
        );
    }
}

export default Index;
