import React from 'react'
import { View, Image, Text } from 'react-native'
import styles from "./styles"

const ProfileSettingsItem = ({title, content, image, onPress}) => {
  return (
    <View style={styles.container} onPress={onPress}>
        <View style={styles.content}>
          <Text style={content ? [styles.heading, {marginBottom: 8}] : styles.heading}>{title}</Text>
          { content ? 
            <Text style={styles.title}>{content}</Text>
          : null }
        </View>
        <Image source={require("../../../assets/icons/forward.png") } style={styles.icon} />
    </View>
  )
}

export default React.memo(ProfileSettingsItem)