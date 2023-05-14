import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { useRoute, useNavigation } from "@react-navigation/native";

export default function Index({ dataUser }) {
    const route = useRoute();
    return (
        <View>
            <Text>{route.params?.dataUser.email}</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

