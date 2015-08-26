var React = require("react");
var Slider = require("../../components/Slider/Slider.js");
React.render(
    <Slider dataUrl="./data.js" isPager={true} isHorizontal = {false} />,
        document.body
);