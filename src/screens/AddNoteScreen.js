import { useState } from "react";
import {useNavigation} from '@react-navigation/native';
import { StyleSheet, TextInput, View, TouchableOpacity, Text } from "react-native";
import colors from "../theme/colors";
import {useDispatch} from "react-redux";
import {addNote} from "../redux/notesSlice";

const AddNoteScreen = () => {
    const [content, setContent] = useState('');
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const addHandler = () => {
        dispatch (addNote(content))
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <TextInput 
                value={content}
                onChangeText={setContent}
                placeholder="Enter note content here..."
                style={styles.input}
                multiline={true}
            />
            <TouchableOpacity style={styles.button} onPress={addHandler}>
                <Text style={styles.buttonTitle}>Save Note</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24
    },
    input: {
        height: 300,
        fontWeight: '400',
        textAlignVertical: 'top',
        textAlign: 'left',
        color: colors.textColors.grey,
        marginBottom: 24,
        paddingHorizontal: 18,
        paddingVertical: 14,
        backgroundColor: colors.textColors.whiteGrey,
        borderRadius: 14,
    },
    button: {   
        backgroundColor: colors.primary.blue,
        height: 44,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonTitle: {
        color: colors.textColors.white,
        fontWeight: '600',
        fontSize: 16,
    }
});

export default AddNoteScreen;