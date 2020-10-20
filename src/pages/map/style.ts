import {Dimensions, StyleSheet} from  'react-native';


const style = StyleSheet.create({
    container:{
        flex: 1
    },

    mapview:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        

    },

    containerCallout:{
        flex:1,
        width: 160,
        height:46,
        backgroundColor: 'rgba(255,255,255, 0.8)',
        borderRadius: 10,
        
        alignItems: 'center',
        justifyContent:'center'
    },
    
    textCallout:{
        color: '#aaa'    
    },

    footer:{
        position: 'absolute',
        left: 24,
        right: 24,
        bottom: 32,

        backgroundColor: '#fff',
        borderRadius: 20,
        height: 56,
        paddingLeft: 24,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        elevation: 5
    },

    textFooter:{
        color: '#8fa7b3',
        fontSize: 14,
        fontFamily: 'Nunito_700Bold'
    },

    buttonFooter:{
        width: 56,
        height: 56,
        backgroundColor: '#15c3d6',
        borderRadius: 20,

        justifyContent: 'center',
        alignItems:'center'
    }

})

export default style