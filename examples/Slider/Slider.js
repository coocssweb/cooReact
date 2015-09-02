var React = require("react");
var Slider = require("Slider");
React.render(
    <Slider dataUrl="./data.js" isPager={true} isHorizontal = {false} />,
        document.body
);