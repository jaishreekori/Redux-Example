import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class CounterComponent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
                <Button
                    style={styles.buttonView}
                    onPress={this.props.increment}
                    title="Increase Count"
                    color="#841584"
                    accessibilityLabel="Increase Count"
                />

                <Text style={{ fontSize: 30 }}>{this.props.count}</Text>

                <Button
                    style={styles.buttonView}
                    onPress={this.props.decrement}
                    title="Decrease Count"
                    color="#841584"
                    accessibilityLabel="Decrease Count"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    buttonView: {
        fontSize: 40,
    },
});