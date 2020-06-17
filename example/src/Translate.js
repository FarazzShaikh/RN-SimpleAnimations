import React, { Component } from 'react';
import {
    Text,
    Button,
    Animated,
    Easing,
    View
} from 'react-native';
import { RNSimpleAnimations } from 'rn-simple-animations';

export default class Translate extends Component {
    constructor(props) {
        super(props)
    
        this.animationTranslate = new RNSimpleAnimations([0, 25, 0, -25, 0], 1000, true)
          .setEasing(Easing.linear)
          .makeContinous()
    
    }

    componentDidMount() {
        this.animationTranslate.start()
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
                <Text style={{color: 'white', marginBottom: 16}}>Translate</Text>
                <Animated.View
                    style={{
                        transform: [
                            { translateX: this.animationTranslate.getValue() },
                            

                        ]
                    }}
                >
                    <Text
                        style={{
                            fontSize: 40,
                        }}

                    >☝️</Text>
                </Animated.View>
                
            </View>
        );
    }
}