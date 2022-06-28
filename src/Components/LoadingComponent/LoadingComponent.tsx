import React from 'react';
import {ClockLoader} from 'react-spinners'

const LoadingComponent = () => {
    return (
        <ClockLoader
            size={200}
            color="rgba(71, 5, 255, 1)"
            speedMultiplier={3}
        />
    );
};

export default LoadingComponent;