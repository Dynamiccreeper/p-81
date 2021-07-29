import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Platform, StatusBar, FlatList, Image} from 'react-native';

import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font'
import StoryCard from './PostCard'

let customFonts={
    'Bubblegum-Sans': require('../assets/fonts/BubblegumSans-Regular.ttf')
}
let stories= require('./temp_posts.json')

export default class Feed extends React.Component {
    constructor(props){
        super(props)
        this.state={
            fontsLoaded:false
        }
    }
    async _loadFontsAsync(){
        await Font.loadAsync(customFonts)
        this.setState({fontsLoaded: true})
    }
    componentDidMount(){
        this._loadFontsAsync()
    }
    renderItem=({item:story})=>{
        return <StoryCard story={story} navigation={this.props.navigation}/>
    }
    render() {
        if(!this.state.fontsLoaded){
            return( <AppLoading/>)
        }
        else{
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}>
                    <View style={styles.appTitle}>
                        <View Style={styles.appIcon}>
                            <Image source={require('../assets/logo.png')}
                                style={{width: 60, height: 60, resizeMode:'contain',marginLeft: 10}}/>
                        </View>
                        <View style={styles.appTitleTextContainer}>
                            <Text style={styles.appTitleText}>Spectagram</Text>
                        </View>

                    </View>

                    <View style={styles.cardContainer}>
                        <FlatList
                            data={post}
                            keyExtractor={(item, index)=>index.toString()}
                            renderItem={this.renderItem}/>

                    </View>

               
                </SafeAreaView>
            </View>
        )
        }
    }
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
    },
    droidSafeArea:{

        marginTop:Platform.OS==="android"? StatusBar.currentHeight:0
    },
    appTitle:{
        flex:0.07,
        flexDirection:'row',
        flexWrap:'wrap',
        padding:5
    },
    appIcon:{
        flex:0.3
    },
    appTitleTextContainer:{
        justifyContent:'center',
        alignItems:'center'

    },
    appTitleText:{
        color: "white",
fontSize: 28,
fontFamily: "Bubblegum-Sans",
paddingLeft: 20

    },
    cardContainer: {
        flex: 0.85 //100- 8-7= 85
        }
        
})
