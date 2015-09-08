var React = require("react");
React.initializeTouchEvents(true);
var Slider = require("Slider");
React.render(
    <Slider dataUrl="./data.js" isPager={true} isHorizontal = {false} />,
        document.body
);