import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    textWhite: {
        color: "#fff",
    },
    header: {
        position: 'absolute',
        top: 0,
        zIndex: 999,
    },
    headerSafeAreaView: {
        paddingRight: 100,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        height: 70,

        alignItems: 'center'
    },
    logo: {
       
        width: '20%',
        height: '100%',

    },
});

export default styles;