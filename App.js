import React from "react";
import {SafeAreaView, Text, FlatList, View, StyleSheet, Image} from "react-native";
import Card from './Components/Card';
import new_shopping from './newshopping.json';
import Searchbox from "./Components/Card/SearchBox";


function App () {
    const renderItem = ({item}) => <Card shops={item} />;
    
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title_text}>PATIKASTORE</Text>
                <FlatList
                ListHeaderComponent={() => <Searchbox/>}
                numColumns={2}
                data={new_shopping}
                renderItem={renderItem} />
           
           </View>
        </SafeAreaView>
    );

};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d80874',
        flex: 1,
    },

    title_text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'pink',
        margin: 5,
        MarginLeft: 10,
    }
});
export default App;