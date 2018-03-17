import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

function handleClick() {
  alert('click the start game button');
}

const styles = {
  title: {
    cursor: 'pointer',
    margin:0,
    flexWrap: 'wrap',
  },
};

/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onClick` property, and a [FlatButton](/#/components/flat-button) on the right.
 */
const AppBarHeader = () => (
  <AppBar
    title={<span style={styles.title}>LET'S HAVE A DANCE OFF</span>}
  />
);

export default AppBarHeader;