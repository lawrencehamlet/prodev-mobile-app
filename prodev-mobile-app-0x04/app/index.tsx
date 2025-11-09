import { ImageBackground, Pressable, Text, View } from "react-native";
import { styles } from "@/styles/_mainstyle";
import { BACKGROUNDIMAGE, HEROLOGO } from "@/constants";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={BACKGROUNDIMAGE}
        style={styles.backgroundImageContainer}
        resizeMode="cover"
      >
        <View style={styles.logoContainer}>
          <ImageBackground source={HEROLOGO} style={{ width: 87, height: 91 }} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Welcome to ProDev</Text>
          <View style={styles.titleSubTextContainer}>
            <Text style={styles.titleSubText}>
              Your Gateway to Homeownership
            </Text>
          </View>
        </View>
        <View style={{ position: "absolute", bottom: 107, left: 0, right: 0 }}>
          <View style={styles.buttonGroup}>
            <Link href="/join" asChild>
              <Pressable style={styles.buttonPrimary}>
                <Text style={styles.buttonPrimaryText}>Join</Text>
              </Pressable>
            </Link>
            <Link href="/signin" asChild>
              <Pressable style={styles.buttonSecondary}>
                <Text style={styles.buttonSecondaryText}>Sign In</Text>
              </Pressable>
            </Link>
          </View>
          <View style={styles.buttonGroupSubText}>
            <Text style={[styles.buttonSecondaryText, { fontSize: 12 }]}>
              Or
            </Text>
            <Text style={[styles.buttonSecondaryText, { fontSize: 12 }]}>
              Continue as Guest
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
