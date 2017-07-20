import React from 'react';
import AppBar from 'material-ui/AppBar';

const DankAppBar = () => (
    <AppBar
        title="Dank Course Tool"
        zDepth={1}
        style={{zIndex: "-1"}}
        iconStyleLeft={{display: "none"}}
    />
);

export default DankAppBar;