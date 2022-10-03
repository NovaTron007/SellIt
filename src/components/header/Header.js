import { useState } from "react"
import { View, Text, Pressable, Image } from "react-native"
import Input from "../input/Input"
import styles from "./styles"


const Header = ({ title, showBackBtn, showSearchBtn, showLogoutBtn, onLogout, onBackPress }) => {
    const [searchInput, setSearchInput] = useState(false)

    return (
        <>
            <View style={styles.container}>
                {showBackBtn ?
                    <Pressable hitSlop={20} onPress={onBackPress}>
                        <Image style={styles.image} source={require("../../assets/icons/back-arrow.png")} />
                    </Pressable>
                    : showSearchBtn ?
                        <Pressable hitSlop={20} onPress={() => setSearchInput(prev => !prev)}>
                            <Image style={styles.image} source={require("../../assets/icons/search.png")} />
                        </Pressable>
                        : <Text style={styles.space}></Text> // empty space as final fallback
                }

                <Text style={styles.title}>
                    {title}
                </Text>

                {showLogoutBtn ?
                    <Pressable hitStop={20} onPress={onLogout}>
                        <Image style={styles.image} source={require("../../assets/icons/logout.png")} />
                    </Pressable>
                    : <Text style={styles.space}></Text> // empty space
                }
            </View>
            {searchInput ? <Input placeHolder="Enter keywords..." /> : null}
        </>
    )
}

export default Header