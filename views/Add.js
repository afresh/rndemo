/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Button
} from 'react-native';

export default  class ProfileScreen extends Component {
    static navigationOptions = {
        title: 'Welcome Profile',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Button
                title="Go to main"
                onPress={() =>
                    navigate('Main', { name: 'Jane' })
                }
            />
        );
    }
}
