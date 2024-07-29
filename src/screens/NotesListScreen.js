import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../theme/colors';

const NotesListScreen = () => {
  const noteExample =
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';

  const noteRender = () => (
    <View style={styles.card}>
      <Text style={styles.description}>{noteExample}</Text>
      <TouchableOpacity
        style={styles.btnDelete}
        onPress={() =>
          Alert.alert(
            'Delete Note?',
            'Deleting this note will permanently remove it from your account',
            [
              {
                text: 'Cancel',
                onPress: () => {},
                style: 'cancel',
              },
              {
                text: 'OK',
                onPress: () => {},
              },
            ]
          )
        }>
        <Ionicons name="trash-outline" size={18} color={colors.secondary.red} />
        <Text style={styles.btnText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {noteRender()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderColor: colors.textColors.whiteGrey,
    borderBottomWidth: 10,
  },
  description: {
    color: colors.textColors.grey,
    fontWeight: '400',
    fontSize: 12,
  },
  btnDelete: {
    flexDirection: 'row',
    marginTop: 20,
    alignSelf: 'flex-end',
  },
  btnText: {
    color: colors.secondary.red,
    fontWeight: '400',
    fontSize: 16,
    marginLeft: 8,
  },
});

export default NotesListScreen;