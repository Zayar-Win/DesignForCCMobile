import { useEffect, useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/Home";
import LoginScreen from "./screens/Login";
import SignupScreen from "./screens/Signup";
import CoursesScreen from "./screens/Courses";
import BlogScreen from "./screens/Blog";
import Login from "./screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  SafeAreaProvider,
  SafeAreaView,
} from "react-native-safe-area-context";
import VideoScreen from "./screens/Video";
import SlidableView from "./screens/SlidableView";
import VideoPlayers from "./screens/VideoPlayers";
import Intro from "./screens/Intro";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Profile from "./screens/Profile";
import MyCourses from "./screens/MyCourses";
import { Pressable } from "react-native";
import Left from "./assets/Left.svg";
import CertificateBlack from "./assets/CertificateBlack.svg";
import Header from "./components/Header";
import MyCertificates from "./screens/MyCertificates";
import MyActivities from "./screens/MyActivities";
import EditProfileScreen from "./screens/EditProfileScreen";
import SocialProfiles from "./screens/SocialProfiles";
import ChangePassword from "./screens/ChangePassword";
import Invoices from "./screens/Invoices";
import Subscription from "./screens/Subscription";
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const ProfileStack = createStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator initialRouteName='StackProfile'>
      <ProfileStack.Screen
        options={{ headerShown: false }}
        name='StackProfile'
        component={Profile}
      />
      <ProfileStack.Screen
        name='MyCourses'
        component={MyCourses}
        options={{
          header: ({ navigation }) => (
            <Header
              navigation={navigation}
              headerTitle={"Learning Progress"}
            >
              <CertificateBlack
                width={35}
                height={30}
              />
            </Header>
          ),
        }}
      />
      <ProfileStack.Screen
        name='MyCertificates'
        component={MyCertificates}
        options={{
          header: ({ navigation }) => (
            <Header
              navigation={navigation}
              headerTitle={"My Certificates"}
            >
              <CertificateBlack
                width={35}
                height={30}
              />
            </Header>
          ),
        }}
      />
      <ProfileStack.Screen
        name='MyActivities'
        component={MyActivities}
        options={{
          header: ({ navigation }) => (
            <Header
              navigation={navigation}
              headerTitle={"My Activites"}
            >
              <View></View>
            </Header>
          ),
        }}
      />
      <ProfileStack.Screen
        name='EditProfile'
        component={EditProfileScreen}
        options={{
          header: ({ navigation }) => (
            <Header
              navigation={navigation}
              headerTitle={"Edit Profile"}
            >
              <View></View>
            </Header>
          ),
        }}
      />
      <ProfileStack.Screen
        name='SocialProfiles'
        component={SocialProfiles}
        options={{
          header: ({ navigation }) => (
            <Header
              navigation={navigation}
              headerTitle={"Edit Profile"}
            >
              <View></View>
            </Header>
          ),
        }}
      />
      <ProfileStack.Screen
        name='ChangePassword'
        component={ChangePassword}
        options={{
          header: ({ navigation }) => (
            <Header
              navigation={navigation}
              headerTitle={"Password"}
            >
              <View></View>
            </Header>
          ),
        }}
      />
      <ProfileStack.Screen
        name='Invoices'
        component={Invoices}
        options={{
          header: ({ navigation }) => (
            <Header
              navigation={navigation}
              headerTitle={"Invoices"}
            >
              <View></View>
            </Header>
          ),
        }}
      />
      <ProfileStack.Screen
        name='Subscription'
        component={Subscription}
        options={{
          header: ({ navigation }) => (
            <Header
              navigation={navigation}
              headerTitle={"Subscription"}
            >
              <View></View>
            </Header>
          ),
        }}
      />
    </ProfileStack.Navigator>
  );
}

export default function App() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState({
    name: "zayarwin",
  });
  const [isLoading, setIsLoading] =
    useState(false);
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const data = await fetch(
        "http://12700.sharedwithexpose.com/api"
      );
      const json = await data.json();
      setIsLoading(false);
      setData(json);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <TailwindProvider utilities={utilities}>
      <SafeAreaProvider style={styles.container}>
        <SafeAreaView
          style={styles.androidSafeArea}
        >
          <NavigationContainer>
            {user ? (
              <Tab.Navigator
                screenOptions={{
                  activeTintColor: "#0092EF",
                  inactiveTintColor:
                    "rgba(35, 36, 37, 0.5)",
                  tabBarStyle: {
                    paddingBottom: 23,
                    paddingTop: 23,
                    height: 88,
                    alignItems: "center",
                  },
                  tabBarItemStyle: {
                    alignItems: "center",
                  },
                  tabBarIconStyle: {
                    marginBottom: 8,
                  },
                  tabBarLabelStyle: {
                    color:
                      "rgba(35, 36, 37, 0.5)",
                    fontSize: 10,
                    lineHeight: 12,
                    fontWeight: 600,
                  },
                }}
              >
                <Tab.Screen
                  name='Home'
                  component={HomeScreen}
                  options={{
                    headerShown: false,
                    tabBarIcon: ({
                      color,
                      size,
                    }) => (
                      <Entypo
                        name='home'
                        color={color}
                        size={size}
                      />
                    ),
                  }}
                />
                <Tab.Screen
                  name='Courses'
                  component={CoursesScreen}
                  options={{
                    tabBarIcon: ({
                      color,
                      size,
                    }) => (
                      <FontAwesome5
                        name='graduation-cap'
                        color={color}
                        size={size}
                      />
                    ),
                  }}
                />
                <Tab.Screen
                  name='Blogs'
                  component={BlogScreen}
                  options={{
                    tabBarIcon: ({
                      color,
                      size,
                    }) => (
                      <MaterialCommunityIcons
                        name='newspaper-variant-multiple-outline'
                        size={size}
                        color={color}
                      />
                    ),
                  }}
                />
                <Tab.Screen
                  name='Profile'
                  component={ProfileStackScreen}
                  options={{
                    headerShown: false,
                    tabBarIcon: ({
                      color,
                      size,
                    }) => (
                      <FontAwesome
                        name='user-circle-o'
                        size={size}
                        color={color}
                      />
                    ),
                  }}
                />
              </Tab.Navigator>
            ) : (
              <Stack.Navigator initialRouteName='VideoPlayer'>
                <Stack.Screen
                  name='Login'
                  component={LoginScreen}
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name='Signup'
                  component={SignupScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name='MyCourses'
                  component={MyCourses}
                />
                <Stack.Screen
                  name='VideoPlayer'
                  component={VideoPlayers}
                />
              </Stack.Navigator>
            )}
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </TailwindProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    height: "100%",
  },
  androidSafeArea: {
    flex: 1,
  },
});
