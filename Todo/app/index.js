/**
 * Created by prasanndubey on 11/09/17.
 */

import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import ScarletScreen from './ScarletScreen';
import GrayScreen from './GrayScreen';
import YellowScreen from './YellowScreen';
import BlueScreen from './BlueScreen';
import RedScreen from './RedScreen'

const App = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="scarlet"
                       component={ScarletScreen}
                       title="Scarlet"
                       initial
                />
                <Scene
                    key="gray"
                    component={GrayScreen}
                    title="-NOTER-"
                />
                <Scene
                    key="yellow"
                    component={YellowScreen}
                    title="Yellow"
                />
                <Scene
                    key="blue"
                    component={BlueScreen}
                    title="Blue"
                />
                <Scene
                    key="red"
                    component={RedScreen}
                    title="Red"
                />
            </Scene>
        </Router>
    );
}

export default App;