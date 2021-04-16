import React from 'react'
import { Text, View, ImageBackground, StyleSheet, Image, Button, TouchableOpacity } from 'react-native'


const scarlet = { uri: "https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_.jpg" }
const galGadot = { uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Gal_Gadot_2018_cropped_retouched.jpg/1200px-Gal_Gadot_2018_cropped_retouched.jpg" }
function Post() {
    return (
        <View style={styles.body}>
            <View style={styles.container}>
                <View style={styles.infoPersonal}>
                    <View style={styles.containerImage}>
                        <Image
                            source={galGadot}
                            style={styles.image}
                        />
                    </View>
                    <View style={styles.containerInfo}>
                        <View >
                            <Text style={styles.userName}>Scarlett Johanson</Text>
                            <Text style={{ fontSize: 11, color: "#9E9E9E", fontWeight: "bold" }}>Mar 5, 2021 - 8:40pm</Text>
                        </View>
                        <View style={{ marginRight: 10, justifyContent: "center" }}>
                            <Text style={{ fontSize: 11, color: "#9E9E9E" }}>Semana 2</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.comentarioContainer}>
                </View>
            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "#fff",
        // justifyContent: "center",
        flexDirection: "row"
    },
    container: {
        flex: 1,
        flexDirection: "column",
        margin: 10,
        width: "100%",
        // backgroundColor: "#000",
        padding: 10,
        borderWidth: 2,
        borderColor: "#0004"
    },
    infoPersonal: {
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        backgroundColor: "#fff",
        borderBottomColor: "#D7D7D7",
        borderBottomWidth: 1,
        paddingTop: 10,
        paddingBottom: 10,
    },

    containerImage: {
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 50,
        borderRadius: 25,
        overflow: "hidden",
        backgroundColor: "#ff0000",
        marginLeft: 5
    },
    image: {
        width: 80,
        height: 80,
        resizeMode: "contain",
        borderRadius: 40,
    },
    containerInfo: {
        flex: 1,
        marginLeft: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    userName: {
        fontSize: 20,
        fontWeight: "600",
        color: "#212121",
    },
    comentarioContainer: {
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        height: 100,
        width: "100%",
        backgroundColor: "#fff",
    },


});


export default Post
