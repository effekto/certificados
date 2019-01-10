import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';


import * as firebase from 'firebase'
import Login from '../component/Login'
import Firebase from '../lib/firebase'

export default class licencias extends Component {
    constructor(props){
        super(props);
        this.state = {
            initialView : null,
            userLoaded: false
        };
        this.getInitialView();
        this.getInitialView = this.getInitialView.bind(this);
    }

    //funcion sobre cual vista ejecutar

    getInitialView(){
        firebase.auth().onAuthStateChanged((user) => {
            let initialView = user ? 'App' : 'Login'

            this.setState({
                userLoaded: true,
                initialView: initialView
            })
        })
    }

    configureScene(route){
        if(route.sceneConfig){
            return route.sceneConfig
        } else {
            return ({
                ...Navigator.SceneConfigs.HorizontalSwipeJumpFromRight,
                gestures: {}
            });
        }
    }

    renderScene(route, navigator){
        var globalProps = {navigator};
        switch(route.id){
            case 'App':
                return (
                    <App navigator={navigator}/>
                );
            case 'Login':
                return(
                    <Login navigator={navigator}/>
                )
        }
    }
    render() {
        if(this.state.userLoaded){
            return (
                <Navigator
                    initialroute={{
                        id:this.state.initialView
                    }}
                    renderScene={this.renderScene}
                    configureScene={this.configureScene}
                />
            );
        } else {
            return null
        }

    }
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
