import React, { useState } from "react"
import { View, Text, Pressable, Image } from "react-native"
import Input from "../input/Input"
import styles from "./styles"


const Header = ({ title, showBackBtn, showSearchBtn, showLogoutBtn, onLogoutCb, onPressCb, keyword, setKeyword }) => {
    // show search input
    const [showSearchInput, setShowSearchInput] = useState(false)

    return (
        <>
            <View style={styles.container}>
                {showBackBtn ?
                    <Pressable hitSlop={20} onPress={onPressCb}>
                        <Image style={styles.image} source={require("../../assets/icons/back-arrow.png")} />
                    </Pressable>
                    : showSearchBtn ?
                        <Pressable hitSlop={20} onPress={() => setShowSearchInput(prev => !prev)}>
                            <Image style={styles.image} source={require("../../assets/icons/search.png")} />
                        </Pressable>
                        : <Text style={styles.space}></Text> // empty space as final fallback
                }

                <Text style={styles.title}>
                    {title}
                </Text>

                {showLogoutBtn ?
                    <Pressable hitStop={20} onPress={onLogoutCb}>
                        <Image style={styles.image} source={require("../../assets/icons/logout.png")} />
                    </Pressable>
                    : <Text style={styles.space}></Text> // empty space
                }
            </View>
            {/* show search input */}
            { showSearchInput ? 
                <>
                    <View style={styles.searchContainer}>
                        <Input 
                            placeHolder="Enter keyword..." 
                            value={keyword} 
                            onChange={setKeyword}
                        /> 
                    </View>
                </>
            : null }
        </>
    )
}

export default React.memo(Header)