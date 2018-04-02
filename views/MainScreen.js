/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Button
} from 'react-native';

export default class MainScreen extends Component {
    static navigationOptions = {
        title: 'Welcome Main',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Button
                title="Go to Jane's profile"
                onPress={() =>
                    navigate('Add', { name: 'Jane' })
                }
            />
        );
    }
}
