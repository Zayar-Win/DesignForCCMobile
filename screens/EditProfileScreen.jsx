import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { Image } from "react-native";
import Cross from "../assets/Cross Icon.svg";
import Camera from "../assets/Camera Icon.svg";
import Button from "../components/Button";

const EditProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          alignItems: "center",
          marginTop: 32,
        }}
      >
        <View
          style={{
            width: 136,
            height: 136,
            borderRadius: 200,
            backgroundColor: "#F5F5F5",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../assets/teacher-5.png")}
            style={{
              width: "90%",
              height: "90%",
              borderRadius: 200,
            }}
          />
          <View
            style={{
              width: 56,
              height: 56,
              borderRadius: 28,
              backgroundColor: "#FFFFFF",
              borderWidth: 1,
              borderColor: "#EBEBEB",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              bottom: -28,
              left: -8,
            }}
          >
            <Cross width={25} height={25} />
          </View>
          <View
            style={{
              width: 56,
              height: 56,
              borderRadius: 28,
              backgroundColor: "#FFFFFF",
              borderWidth: 1,
              borderColor: "#EBEBEB",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              bottom: -28,
              right: -8,
            }}
          >
            <Camera width={24} hegiht={22} />
          </View>
        </View>
        <View
          style={{
            marginTop: 32,
            flex: 1,
            width: "100%",
          }}
        >
          <View
            style={{
              padding: 20,
              borderBottomWidth: 1,
              borderBottomColor: "#EBEBEB",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 14,
                lineHeight: 17,
                fontWeight: 600,
                color: "#0092EF",
                paddingRight: 16,
              }}
            >
              Name :{" "}
            </Text>
            <View
              style={{
                flex: 1,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 19,
                  fontWeight: 500,
                  color: "#232425",
                }}
              >
                Min Naing
              </Text>
            </View>
          </View>
          <View
            style={{
              padding: 20,
              borderBottomWidth: 1,
              borderBottomColor: "#EBEBEB",
              flexDirection: "row",
              flex: 1,
              width: "100%",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 14,
                lineHeight: 17,
                fontWeight: 600,
                color: "#0092EF",
                paddingRight: 16,
              }}
            >
              Email :{" "}
            </Text>
            <View
              style={{
                flex: 1,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 19,
                  fontWeight: 500,
                  color: "#232425",
                }}
              >
                minmin.minnaing22@gmail.com
              </Text>
            </View>
          </View>
          <View
            style={{
              padding: 20,
              borderBottomWidth: 1,
              borderBottomColor: "#EBEBEB",
              flexDirection: "row",
              flex: 1,
              width: "100%",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 14,
                lineHeight: 17,
                fontWeight: 600,
                color: "#0092EF",
                paddingRight: 16,
              }}
            >
              Portfilio Url :{" "}
            </Text>
            <View
              style={{
                flex: 1,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 19,
                  fontWeight: 500,
                  color: "#232425",
                }}
              >
                behance.net/minnaing7
              </Text>
            </View>
          </View>
          <View
            style={{
              padding: 20,
              borderBottomWidth: 1,
              borderBottomColor: "#EBEBEB",
              flexDirection: "row",
              flex: 1,
              width: "100%",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 14,
                lineHeight: 17,
                fontWeight: 600,
                color: "#0092EF",
                paddingRight: 16,
              }}
            >
              Job :{" "}
            </Text>
            <View
              style={{
                flex: 1,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 19,
                  fontWeight: 500,
                  color: "#232425",
                }}
              >
                Graphic & UiUx Designer
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              padding: 20,
              borderBottomWidth: 1,
              borderBottomColor: "#EBEBEB",
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                fontSize: 14,
                lineHeight: 17,
                fontWeight: 600,
                color: "#0092EF",
                paddingRight: 16,
              }}
            >
              Bio :{" "}
            </Text>
            <View
              style={{
                flex: 1,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 19,
                  fontWeight: 500,
                  color: "#232425",
                }}
              >
                Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
                Voluptatibus omnis iste assumenda
                impedit possimus delectus
                necessitatibus voluptatum ipsam at
                culpa magni adipisci facere
                quisquam dolorum deleniti, cum
                quia nesciunt autem.
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            width: "100%",
            marginTop: 16,
          }}
        >
          <Button text={"Save Profile"} />
        </View>
      </View>
    </ScrollView>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
