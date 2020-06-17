import React, { Component } from 'react';
import {
    Text,
    Button,
    Animated,
    Easing,
    View
} from 'react-native';
import { RNSimpleAnimations } from 'rn-simple-animations';

export default class Opacity extends Component {
    constructor(props) {
        super(props)
    
        this.animationOpacity = new RNSimpleAnimations([1, 0, 1], 1000, false)
          .setEasing(Easing.linear)
          .makeContinous()
    

      }

      componentDidMount() {
        this.animationOpacity.start()
      }

    render() {
        return (
            <View style={{
                height: 150,
                aspectRatio: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#121212',
                borderRadius: 10,
                padding: 10,
                margin: 5
            }}>
                <Text style={{color: 'white', marginBottom: 16}}>Opacity</Text>
                <Animated.View
                    style={{
                        opacity: this.animationOpacity.getValue()
                    }}
                >
                    <Text
                        style={{
                            fontSize: 40,
                        }}

                    >👀</Text>
                </Animated.View>
            </View>
        );
    }
}