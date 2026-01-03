import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import stopAllIcon from './icon--stop-all.svg';
import styles from './stop-all.css';

const IconFr = () => {
    return (
        <video autoPlay loop muted playsinline style={{width:50}}>
            <source src="https://media.tenor.com/3tLVT8WdI-wAAAPo/rain-world-car.mp4" type="video/mp4"></source>
        </video>
    )
};

const StopAllComponent = function (props) {
    const {
        active,
        className,
        onClick,
        title,
        ...componentProps
    } = props;
    return (
        <IconFr
            className={classNames(
                className,
                styles.stopAll,
                {
                    [styles.isActive]: active
                }
            )}
            draggable={false}
            src={stopAllIcon}
            title={title}
            onClick={onClick}
            {...componentProps}
        />
    );
};

StopAllComponent.propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string
};

StopAllComponent.defaultProps = {
    active: false,
    title: 'Stop'
};

export default StopAllComponent;
