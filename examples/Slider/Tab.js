var React = require("react");
React.initializeTouchEvents(true);
var Base = require("Base");
var SliderList = require("Slider");
var $ =require("jquery");

var SliderTest = React.createClass({
        slideCallback : function(){

        },
        render : function(){

            var elements=[];
            elements.push(
                (
                    <ul className="lbs-list">
                    <li className="film"><a href="javascript:;"></a></li><li className="hotel"><a href="javascript:;"></a></li><li className="food"><a href="javascript:;"></a></li><li className="bus"><a href="javascript:;"></a></li>
                    <li className="school"><a href="javascript:;"></a></li><li className="bank"><a href="javascript:;"></a></li><li className="takeout"><a href="javascript:;"></a></li><li className="viewspot"><a href="javascript:;"></a></li>
                    </ul>
                )
            );
            elements.push(
                (
                    <ul className="lbs-list">
                    <li className="school"><a href="javascript:;"></a></li><li className="bank"><a href="javascript:;"></a></li><li className="takeout"><a href="javascript:;"></a></li><li className="viewspot"><a href="javascript:;"></a></li>
                    <li className="film"><a href="javascript:;"></a></li><li className="hotel"><a href="javascript:;"></a></li><li className="food"><a href="javascript:;"></a></li><li className="bus"><a href="javascript:;"></a></li>
                    </ul>
                )
            );
            return (
                <SliderList sliders= {elements} isPager ={this.props.isPager} sliderIndex={1} callback={this.slideCallback} isHorizontal={this.props.isHorizontal} slideType="drawer" />
            )
        }


});

React.render(
<SliderTest isPager={true} isHorizontal = {true} />,
    document.getElementById("tab-content")
);