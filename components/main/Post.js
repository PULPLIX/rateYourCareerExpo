import React from 'react'
import { Text, View, StyleSheet, Image, Button, TouchableOpacity, SafeAreaView, StatusBar, FlatList } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const scarlet = { uri: "https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_.jpg" }
const galGadot = { uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Gal_Gadot_2018_cropped_retouched.jpg/1200px-Gal_Gadot_2018_cropped_retouched.jpg" }
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];

const Item = ({ title }) => (
    <View style={styles.item}>
        <View style={styles.infoConatiner}>
            <View style={styles.postImage}>
                <Image source={scarlet}
                    style={styles.image} />
            </View>
            <View style={styles.infoPost}>
                <View style={{ marginLeft: 10 }}>
                    <Text style={{ fontSize: 18, color: '#1C1C1C', fontWeight: '500' }}>Gal Gadot</Text>
                    <Text style={{ fontSize: 11, color: '#9E9E9E', marginLeft: 2 }}>Mar 5, 2021 - 8:40pm</Text>
                </View>
                <View style={styles.week}>
                    <Text style={{ fontSize: 11, color: '#9E9E9E' }}>semana 3</Text>
                </View>
            </View>
        </View>
        <View style={styles.courseContainer}>
            <View style={styles.courseImage}>
                <MaterialCommunityIcons name="notebook" color="white" size={60} />
            </View>
            <View style={styles.courseInfoConainer}>
                <Text style={{ fontSize: 24, fontWeight: "bold", color: "#1C1C1C" }}>Estructuras de datos</Text>
                <View style={styles.courseInfo}>
                    <Text style={{ fontSize: 16, color: "#373737", }}>Juan de dios</Text>
                    <Text style={{ fontSize: 11, color: "#9E9E9E" }}>II ciclo</Text>
                </View>
            </View>
        </View>
        <View style={styles.comment}>
            <Text style={{ fontSize: 12, color: '#4B4B4B', fontWeight: 'bold' }}>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </Text>
        </View>

    </View>
);

function Post() {
    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );

    return (
        <SafeAreaView style={{
            flex: 1,
            marginTop: StatusBar.currentHeight || 0
        }}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    comment: {
        flex: 3,
        fontSize: 12,
        paddingVertical: 8
    },
    courseImage: {
        width: 80,
        height: 80,
        backgroundColor: "#F2CC39",
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15
    },
    courseInfoConainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    courseInfo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    postImage: {
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 50,
        borderRadius: 25,
        overflow: "hidden",
    },
    image: {
        width: 75,
        height: 75,
        resizeMode: "contain",
        borderRadius: 40,
    },
    week: {
        fontSize: 12,
    },
    infoConatiner: {
        flex: 1,
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#EDECEC",
        paddingVertical: 10,

    },
    infoPost: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    courseContainer: {
        flex: 1,
        flexDirection: "row",
        marginVertical: 8,
    },
    item: {
        marginVertical: 8,
        height: "auto",
        paddingHorizontal: 10,
        backgroundColor: "#fff",
        borderColor: "#4d4d4d",
        shadowColor: "#4d4d4d",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.8,
        shadowRadius: 8.51,
        elevation: 2,
    },
    title: {
        fontSize: 18,
    },
    body: {
        flex: 1,
        backgroundColor: "#fff",
        // justifyContent: "center",
        flexDirection: "row"
    },



});


export default Post
