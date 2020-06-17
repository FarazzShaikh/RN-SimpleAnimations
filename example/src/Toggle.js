import React, { Component } from 'react';
import {
    Text,
    Button,
    Animated,
    Easing,
    View
} from 'react-native';
import { RNSimpleAnimations } from 'rn-simple-animations';

export default class Toggle extends Component {
    constructor(props) {
        super(props)
    
        this.animationToggle = new RNSimpleAnimations([100, -100], 500, false)
          .setEasing(Easing.ease)
          .makeToggleable()

        this.animationToggleRotate = new RNSimpleAnimations(['0deg', '360deg'], 500, false)
        .setEasing(Easing.linear)
        .makeToggleable()
    
      }

    render() {
        return (
            <View style={{
                height: 150,
                aspectRatio: 2.1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#121212',
                borderRadius: 10,
                padding: 10,
                margin: 5
            }}>
                <Text style={{color: 'white', marginBottom: 16}}>Toggle</Text>
                <Animated.View
                    style={{
                        transform: [
                            { translateX: this.animationToggle.getValue() },
                            { rotate: this.animationToggleRotate.getValue() }

                        ]
                    }}
                >
                    <Text
                        style={{
                            fontSize: 40,
                        }}

                    >🏈</Text>

                </Animated.View>
                <Button 
                    title={'Trigger!'}
                    color={'coral'}
                    onPress={() => {
                        this.animationToggle.play()
                        this.animationToggleRotate.play()
                    }}
                />
            </View>
        );
    }
}