import classNames from 'classnames';
import {FormattedMessage} from 'react-intl';
import PropTypes from 'prop-types';
import React from 'react';
import Button from '../button/button.jsx';

//import {Binoculars} from 'lucide-react';

const iconfr = () => {
    return (
        <video autoPlay loop muted playsinline style={{width:50}}>
            <source src="https://media.tenor.com/3tLVT8WdI-wAAAPo/rain-world-car.mp4" type="video/mp4"></source>
        </video>
    )
};

const Binoculars = iconfr;

import styles from './community-button.css';

const CommunityButton = ({
    className,
    onClick
}) => (
    <Button
        className={classNames(
            className,
            styles.communityButton
        )}
        iconClassName={styles.communityButtonIcon}
        iconElem={Binoculars}
        onClick={onClick}
    >
        <FormattedMessage
            defaultMessage="See Project Page"
            description="Label for see project page button"
            id="gui.menuBar.seeProjectPage"
        />
    </Button>
);

CommunityButton.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func
};

CommunityButton.defaultProps = {
    onClick: () => {}
};

export default CommunityButton;
