import React, { Component } from 'react';
import {
    Text,
    Button,
    Animated,
    Easing,
    View
} from 'react-native';
import { RNSimpleAnimations } from 'rn-simple-animations';

export default class Scale extends Component {
    constructor(props) {
        super(props)
    
        this.animationScale = new RNSimpleAnimations([1, 1.5, 1], 1000, true)
          .setEasing(Easing.ease)
          .makeContinous()
    
      }

      componentDidMount() {
        this.animationScale.start()
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
                <Text style={{color: 'white', marginBottom: 16}}>Scale</Text>
                <Animated.View
                    style={{
                        transform: [
                            { scale: this.animationScale.getValue() },
                            

                        ]
                    }}
                >
                    <Text
                        style={{
                            fontSize: 40,
                        }}

                    >♥️</Text>
                </Animated.View>
            </View>
        );
    }
}