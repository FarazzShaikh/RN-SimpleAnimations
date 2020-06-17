import React, { Component } from 'react';
import {
    Text,
    Button,
    Animated,
    Easing,
    View
} from 'react-native';
import { RNSimpleAnimations } from 'rn-simple-animations';

export default class Rotate extends Component {
    constructor(props) {
        super(props)
    
        this.animationRotate = new RNSimpleAnimations(['0deg', '360deg'], 1000, true)
          .setEasing(Easing.linear)
          .makeContinous()
    
      }

      componentDidMount() {
        this.animationRotate.start()
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
                <Text style={{color: 'white', marginBottom: 16}}>Rotate</Text>
                <Animated.View
                    style={{
                        transform: [
                            { rotate: this.animationRotate.getValue() },
                            

                        ]
                    }}
                >
                    <Text
                        style={{
                            fontSize: 40,
                        }}

                    >🌏</Text>
                </Animated.View>

            </View>
        );
    }
}