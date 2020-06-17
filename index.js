import {
    Animated,
    Easing,
    EasingFunction
} from 'react-native';

export class RNSimpleAnimations {
    /**
     * @constructor
     * @param {Array} keyframes "An array of values representing animation points."
     * @param {Number} duration "Duration of the animation in milliseconds."
     * @param {Boolean} useNativeDriver "Whether to use Native Driver. Note: must be consistant among all animaton drving the same element."
     * @param {Array<Number>} driverKeyframes "An array of values, representing animaiton events in terms of time. Size of this array and keyframes array must be the same."
     * @return {RNSimpleAnimations}
     */
    constructor(keyframes, duration, useNativeDriver, driverKeyframes) {
        this._delay = 0
        this._easing = Easing.linear

        this._driver = new Animated.Value(0)

        this._interpolatedValue = this._driver.interpolate({
            inputRange: driverKeyframes || this._calcInputRange(keyframes),
            outputRange: keyframes
        })

        this._duration = duration
        this._useNativeDriver = useNativeDriver

        this._togglable = false
        this._toggleState = 0

        this._isContinous = false

    }

    /**
     * Get interpolated value. Must be assigned to style property
     */
    getValue() {
        return this._interpolatedValue
    }

    /**
     * @return {RNSimpleAnimations}
     * Make animation toggleable. i.e. play animation in reverse after playing it with RNSimpleAnimation.play().
     */
    makeToggleable() {
        this._togglable = true
        return this
    }

    /**
     * @return {RNSimpleAnimations}
     * Make Animation continous . i.e. loop animation continously after calling RNSimpleAnimation.start() till RNSimpleAnimation.stop() is called.
     */
    makeContinous() {
        this._isContinous = true
        return this
    }

    /**
     * Sets an easing function for animation interpolation.
     * @param {EasingFunction} easing Easing Function.
     * @return {RNSimpleAnimations}
     */
    setEasing(easing) {
        if (typeof easing === typeof Easing.linear) {
            this._easing = easing
            return this
        } else {
            throw 'Easing function must be of type EasingFunction'
        }

    }

    /**
     * Sets delay before start of an anmation cycle.
     * @param {Number} delay Delay in milliseconds
     * @return {RNSimpleAnimations}
     */
    setDelay(delay) {
        if (typeof delay === typeof 69) {
            this._delay = delay
            return this
        } else {
            throw 'Delay must be of type Number'
        }
    }

    /**
     * Start continuous animation.
     * @param {Function} callback Function that should be excicuted after animation starts.
     * @returns {Animated.CompositeAnimation} Animation that started.
     */
    start(callback) {
        let animation = this._makeAnimaton(1)
        if (this._isContinous) {
            Animated.loop(animation).start(() => {if(callback) callback()})
        } else {
            throw 'Use RnSimpleAnimations.play() with non-continous mode.'
        }
        return animation
    }

    /**
     * Stop continuous animation that has started.
     * @param {Animated.CompositeAnimation} animation Animation that has started.
     */
    stop(animation) {
        animation.stop()
    }

    /**
     * Play animation.
     * @param {*} callback Function that should be excicuted after animation starts.
     */
    play(callback) {
        if (!this._isContinous) {
            if (this._togglable) {
                if (this._toggleState === 1) {
                    this._makeAnimaton(0).start()
                    this._toggleState = 0
                } else {
                    this._makeAnimaton(1).start()
                    this._toggleState = 1
                }
                return
            }

            this._makeAnimaton(1).start(() => {this._driver.setValue(0); if(callback) callback()})

        } else {
            throw 'Use RnSimpleAnimations.start() with continous mode.'
        }

    }

    /**
     * Play animation in reverse.
     */
    playBackward() {
        this._makeAnimaton(0).start(() => this._driver.setValue(1))
    }

    /**
     * @private Used Internally.
     */
    _getAnimation() {
        return this._makeAnimaton()
    }

    /**
     * @private Used Internally.
     */
    _makeAnimaton(toVal) {

        return Animated.timing(this._driver, {
            duration: this._duration,
            useNativeDriver: this._useNativeDriver,
            toValue: toVal,
            easing: this._easing,
            delay: this._delay
        })
    }

    /**
     * @private Used Internally.
     */
    _calcInputRange(output) {
        let inputRange = [0, 1]
        let mids = []

        let divs = 0

        for (let i = 0; i < output.length - 2; i++) {
            divs += 1 / (output.length - 1)
            mids.push(divs)
        }

        inputRange = [0, ...mids, 1]

        return inputRange
    }

    /**
     * @private Used Internally.
     */
    _lerp = (x, y, a) => x * (1 - a) + y * a;
}
