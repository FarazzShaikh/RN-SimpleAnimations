[![forthebadge](https://forthebadge.com/images/badges/uses-js.svg)](https://forthebadge.com)

# Simple Animations
Simple Animations is a simple abstraction of the React Native Animated API built for iOS.

![demo](https://media.giphy.com/media/Q6yfve6sRQh3wcTjyE/giphy.gif) 

## Installation
```sh
$ npm i @farazshaikh/react-native-simple-animations --save
```
#### iOS
```sh
$ cd ios
$ pod install
$ cd ..
```
## Usage
#### Import
```js
import { RNSimpleAnimations } from '@farazshaikh/react-native-simple-animations';
```
#### Initialize
Create new animation instance.
```js
const animation = new RNSimpleAnimations(
    keyframes,
    delay,
    useNativeDriver
)
```
#### Assign Animation
Assign interpolated value to style property.
```js
 <Animated.View
    style={{
        transform: [
            { translateX: animation.getValue() }
        ]
    }}
>
```
#### Play Animation
```js
animation.start()
```
## Example
Simple example of an animation that drives scale continuously. Example app in *__./examples/src.__*
```js
import React, { Component } from 'react';
import {
    Button,
    Animated,
    Easing
} from 'react-native';
import { RNSimpleAnimations } from '@farazshaikh/react-native-simple-animations';

export default class Example extends Component {
    constructor(props) {
        super(props)
        // instantiation
        this.animation = new RNSimpleAnimations([1, 1.5, 1], 1000, true) 
          .setEasing(Easing.ease)
          .makeContinous()
    }
    render() {
        return (
            <>
                <Animated.View style={{
                    transform: [
                        scale: this.animation.getValue() // Assignment
                    ]
                }}>
                </Animated.View>
                <Button 
                    title={'Trigger'}
                    onPress={() => {
                        this.animation.start() // Execution
                    }}
                />
            </>
        )
    }
}
```
# Documentation
Simple Animations is currently available with the following options:
#### *constructor*
Initialize Animation Instance.
```js
new RNSimpleAnimations()
```
| Options | Type | Discription |
| ------ | ------ | ------ |
| keyframes | Array<Any> | "An array of values representing animation points." |
| duration | Number | "Duration of the animation in milliseconds." |
| useNativeDriver | Boolean | "Whether to use Native Driver. Note: must be consistant among all animaton drving the same element." |
| driverKeyframes | Array<Number> | "An array of values, representing animaiton events in terms of time. Size of this array and keyframes array must be the same." |

#### *.getValue()*
Get interpolated value. Must be assigned to style property.
```js
animation.getValue()
```
| Options | Type | Discription |
| ------ | ------ | ------ |
| none | - | - |

#### *.makeToggleable()*
Make animation toggleable. i.e. play animation in reverse after playing it with __play()__.
```js
animation.makeToggleable()
```
| Options | Type | Discription |
| ------ | ------ | ------ |
| none | - | - |

#### *.makeContinous()*
Make Animation continous . i.e. loop animation continously after calling __start()__ till __stop()__ is called.
```js
animation.makeContinous()
```
| Options | Type | Discription |
| ------ | ------ | ------ |
| none | - | - |

#### *.setEasing()*
Sets an easing function for animation interpolation.
```js
animation.setEasing()
```
| Options | Type | Discription |
| ------ | ------ | ------ |
| easing | EasingFunction | Easing Function. |

#### *.setDelay()*
Sets delay before start of an anmation cycle.
```js
animation.setDelay()
```
| Options | Type | Discription |
| ------ | ------ | ------ |
| delay | Number | Delay in milliseconds. |

#### *.play()*
Play animation.
```js
animation.play()
```
| Options | Type | Discription |
| ------ | ------ | ------ |
| callback | Function | Function that should be excicuted after animation starts. |

#### *.playBackward()*
Play animation in reverse.
```js
animation.playBackward()
```
| Options | Type | Discription |
| ------ | ------ | ------ |
| none | - | - |

#### *.start()*
Start continuous animation.
```js
animation.start()
```
| Options | Type | Discription |
| ------ | ------ | ------ |
| callback | Function | Function that should be excicuted after animation starts. |

#### *.stop()*
Stop continuous animation that has started.
```js
animation.stop()
```
| Options | Type | Discription |
| ------ | ------ | ------ |
| animation | Function | Animation that has started. |



