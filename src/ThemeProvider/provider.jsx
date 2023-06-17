import React from 'react';
import PropTypes from 'prop-types';
import {ThemeProvider} from 'styled-components';
import { coral, digital } from './themes';

const getTheme = theme => {
	switch (theme) {
		case 'coral':
			return coral;
		case 'digital':
			return digital;
		default:
			return coral;
	}
};

const Theme = ({ theme, children }) => (
	<ThemeProvider theme={getTheme(theme)}>{children}</ThemeProvider>
);

Theme.propTypes = {
	/**
	 * Used to provide theme to components
	 */
	theme: PropTypes.string,
	/**
	 * Children elements
	 */
	children: PropTypes.element,
};

Theme.defaultProps = {
	theme: 'coral',
	children: null,
};

export default Theme;