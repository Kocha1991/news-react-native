import { StyleSheet, View, Image, Text } from 'react-native';

export const Post = ({
  icon,
  title,
  data,
  name,
}) => {
  const updateData = data.slice(0, 10).split('-').join('.')

  return (
    <View style={styles.post}>
      
      <View>
        <Image
          style={styles.icon}
          source={{uri: icon}}
        />
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.data}>{updateData}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  post: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#595959',
    gap: 10,

  },
  details: {
    flex: 1,
    justifyContent: 'center',
  },
  name:{
    marginTop: 5,
    textAlign:'center',
    fontWeight: 'bold',
  },
  icon: {
    height: 60,
    width: 60,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    textTransform: 'uppercase',
  },
  data: {
    color: '#595959'
  },
})
