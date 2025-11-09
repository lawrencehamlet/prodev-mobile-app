import { View, Text, ImageBackground, TextInput, Pressable, ScrollView } from "react-native";
import { styles } from "@/styles/_join";
import { MaterialIcons } from "@expo/vector-icons";
import { GOOGLELOGO, FACEBOOKLOGO, HEROLOGOGREEN } from "@/constants";
import { useState } from "react";
import { Link, router } from "expo-router";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.iconsection}>
          <Pressable onPress={() => router.back()}>
            <MaterialIcons name="arrow-back" size={24} color="black" />
          </Pressable>
          <ImageBackground source={HEROLOGOGREEN} style={{ width: 50, height: 52 }} />
          <View style={{ width: 24 }} />
        </View>
        <View style={styles.titleTextGroup}>
          <Text style={styles.titleText}>Hello Again!</Text>
          <Text style={styles.subText}>Welcome back, you've been missed</Text>
        </View>
        <View style={styles.formGroup}>
          <View>
            <Text style={styles.formLabel}>Email Address</Text>
            <TextInput
              style={styles.formControl}
              placeholder="Enter email address"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <View>
            <Text style={styles.formLabel}>Password</Text>
            <View style={styles.formPasswordControl}>
              <TextInput
                style={styles.passwordControl}
                placeholder="Enter password"
                secureTextEntry={!showPassword}
                autoCapitalize="none"
              />
              <Pressable onPress={() => setShowPassword(!showPassword)}>
                <MaterialIcons
                  name={showPassword ? "visibility" : "visibility-off"}
                  size={24}
                  color="#7B7B7B"
                />
              </Pressable>
            </View>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </View>
        </View>
        <Pressable style={styles.primaryButton}>
          <Text style={styles.buttonText}>Sign In</Text>
        </Pressable>
        <View style={styles.dividerGroup}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>Or</Text>
          <View style={styles.divider} />
        </View>
        <View style={styles.secondaryButtonGroup}>
          <Pressable style={styles.secondaryButton}>
            <ImageBackground source={GOOGLELOGO} style={{ width: 24, height: 24 }} />
            <Text style={styles.secondaryButtonText}>Continue with Google</Text>
          </Pressable>
          <Pressable style={styles.secondaryButton}>
            <ImageBackground source={FACEBOOKLOGO} style={{ width: 24, height: 24 }} />
            <Text style={styles.secondaryButtonText}>Continue with Facebook</Text>
          </Pressable>
        </View>
      </ScrollView>
      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Don't have an account? </Text>
        <Link href="/join">
          <Text style={styles.signupSubTitleText}>Sign Up</Text>
        </Link>
      </View>
    </View>
  );
}
