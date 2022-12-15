import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        margin: 5,
        borderRadius: 5,
        width: Dimensions.get('window').width,
    },
    image: {
        height: Dimensions.get('window').height / 4,
        borderRadius: 10,

    },
    text: {
        fontSize: 15,
        color: '#540343',
        fontWeight: 'bold',
        paddingTop: 5,
    },
    price: {
        fontSize: 13,
        fontWeight: 'bold',
                
    },
    innerContainer: {
        padding: 5,
        paddingBottom: 5,
       
    },
    inStock: {
        color:'red',
        fontWeight: 'bold',
        fontSize: 15,
    },
    searchBox: {
        backgroundColor: 'white',
        margin: 10,
        padding: 10,
        borderRadius: 5,
        borderWidth: 4,
        borderColor: 'red',

    }

});