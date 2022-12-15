import React from "react";
import { TextInput, View} from "react-native";
import styles from './Card.styles';

const Searchbox = () => {
    return (
        <View>
            <TextInput style={styles.searchBox} placeholder="Search" />
        </View>
    );
};

export default Searchbox;