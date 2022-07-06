import React from 'react';
import {ClockLoader} from 'react-spinners'
import s from './LoadingComponent.module.scss'

const LoadingComponent = () => {
    return (
        <div className={s.loadingBlock}>
            <ClockLoader
                size={200}
                cssOverride={{
                    backgroundColor: 'black'
                }}
                color="red"
                speedMultiplier={3}
            />
        </div>
    );
};

export default LoadingComponent;