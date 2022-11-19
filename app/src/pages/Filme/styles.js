import { StyleSheet } from "react-native";

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    hero: {
        marginTop: 10,
        width: '100%',
        height: 200,
        
    },
    containerPadding: {
        padding: 20,
    },
    buttonPlay: {
        marginVertical: 20,
    },
    captionInfos: {
        marginTop: 20,

    },
    menu: {
        width: '100%',
        height: 38,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    captionWhite: {
        color: '#fff'
    },
    header: {
        position: 'absolute',
        top: 0,
        zIndex: 999,
    },
    buttonTemporada: {
        width: '100%',
        padding: 10,
        borderRadius: 3,
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.21)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 17,

    },
    temporadaName: {
        color: '#fff',
    },

    
})

export default styles;