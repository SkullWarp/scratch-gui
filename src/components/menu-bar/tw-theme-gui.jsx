import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {FormattedMessage} from 'react-intl';
import {connect} from 'react-redux';

import ChevronDown from './ChevronDown.jsx';
import {MenuItem, Submenu} from '../menu/menu.jsx';
import {Theme, GUI_MAP} from '../../lib/themes/index.js';
import {closeSettingsMenu, guiMenuOpen, openGuiMenu} from '../../reducers/menus.js';
import {setTheme} from '../../reducers/theme.js';
import {applyTheme} from '../../lib/themes/themePersistance.js';
import styles from './settings-menu.css';

import {Check} from 'lucide-react';

const ThemeIcon = ({id}) => {
    return (
        <video autoPlay loop muted playsinline style={{width:50}}>
            <source src="https://media.tenor.com/3tLVT8WdI-wAAAPo/rain-world-car.mp4" type="video/mp4"></source>
        </video>
    );
};

ThemeIcon.propTypes = {
    id: PropTypes.string
};

const ThemeMenuItem = props => (
    <MenuItem onClick={props.onClick}>
        <div className={styles.option}>
            <Check
                className={classNames(styles.check, {[styles.selected]: props.isSelected})}
                size={15}
            />
            {/*<ThemeIcon id={props.id} />*/}
            <video autoPlay loop muted playsinline style={{width:50}}>
                <source src="https://media.tenor.com/3tLVT8WdI-wAAAPo/rain-world-car.mp4" type="video/mp4"></source>
            </video>
            <span className={props.name}>
                <FormattedMessage
                    defaultMessage="{theme}"
                    description="Label for theme option"
                    id="tw.theme.option"
                    values={{
                        theme: props.name
                    }}
                />
            </span>
        </div>
    </MenuItem>
);

ThemeMenuItem.propTypes = {
    id: PropTypes.string,
    isSelected: PropTypes.bool,
    onClick: PropTypes.func,
    name: PropTypes.string
};

const GuiThemeMenu = ({
    isOpen,
    isRtl,
    onChangeTheme,
    onOpen,
    theme
}) => (
    <MenuItem expanded={isOpen}>
        <div
            className={styles.option}
            onClick={onOpen}
        >
            {/*<ThemeIcon id={theme.gui} />*/}
            <video autoPlay loop muted playsinline style={{width:50}}>
                <source src="https://media.tenor.com/3tLVT8WdI-wAAAPo/rain-world-car.mp4" type="video/mp4"></source>
            </video>
            <span className={styles.submenuLabel}>
                <FormattedMessage
                    defaultMessage="Theme"
                    description="Label for menu to choose theme"
                    id="tw.menuBar.theme"
                />
            </span>
            <ChevronDown className={styles.expandCaret} />
        </div>
        <Submenu
            place={isRtl ? 'left' : 'right'}
            className={styles.submenu}
        >
            {Object.entries(Theme.defaults).map(([themeId, t]) => (
                <ThemeMenuItem
                    key={themeId}
                    id={themeId}
                    name={t.name || t.gui}
                    isSelected={theme.gui === themeId}
                    onClick={() => onChangeTheme(theme.set('gui', themeId))}
                />
            ))}
        </Submenu>
    </MenuItem>
);

GuiThemeMenu.propTypes = {
    isOpen: PropTypes.bool,
    isRtl: PropTypes.bool,
    onChangeTheme: PropTypes.func,
    onOpen: PropTypes.func,
    theme: PropTypes.instanceOf(Theme)
};

const mapStateToProps = state => ({
    isOpen: guiMenuOpen(state),
    isRtl: state.locales.isRtl,
    theme: state.scratchGui.theme.theme
});

const mapDispatchToProps = dispatch => ({
    onChangeTheme: theme => {
        dispatch(setTheme(theme));
        dispatch(closeSettingsMenu());
        applyTheme(theme);
    },
    onOpen: () => {
        dispatch(openGuiMenu());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GuiThemeMenu);
