import React from 'react';
import {Text, View, Image } from 'react-native';
import styles from './Card.styles';

const Card = ({shops}) => {
    
    return (
     <View style={styles.container}>
        <View style={styles.innerContainer}>
            <Image style={styles.image} source={{uri: shops.imgURL}} />
            <Text style={styles.text}>{shops.title}</Text>
            <Text style={styles.price}>{shops.price}</Text>
            <Text style={styles.inStock}>{shops.inStock === true ? '' : 'Stokta Yok'}</Text>
        </View>
    </View>

    );
};

export default Card;

