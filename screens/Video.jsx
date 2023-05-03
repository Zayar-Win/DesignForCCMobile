import {
  useState,
  useRef,
  useEffect,
} from "react";
import { ResizeMode, Video } from "expo-av";
import {
  View,
  TouchableOpacity,
} from "react-native";
import { StyleSheet } from "react-native";
import VideoPlayer from "expo-video-player";

export default function VideoScreen() {
  const [currentTime, setCurrentTime] =
    useState(0);
  const [duration, setDuration] = useState(0);
  const [preloadedData, setPreloadedData] =
    useState(0);
  const videoRef = useRef(null);

  const handlePress = (event) => {
    const position = event.nativeEvent.locationX;
    const progress = position / 250;
    const seekTime = progress * duration;
    videoRef.current.setPositionAsync(seekTime);
  };

  const handleLoad = ({ duration }) => {
    setDuration(duration);
  };

  const handleProgress = ({
    currentTime,
    playableDuration,
  }) => {
    setCurrentTime(currentTime);
    setPreloadedData(playableDuration);
  };

  // useEffect(() => {
  //   videoRef.current.playAsync();
  // }, []);

  return (
    <VideoPlayer
      videoProps={{
        shouldPlay: true,
        resizeMode: ResizeMode.CONTAIN,
        // ❗ source is required https://docs.expo.io/versions/latest/sdk/video/#props
        source: {
          uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        },
      }}
    />
    // <View style={styles.container}>
    //   <Video
    //     ref={videoRef}
    //     source={{
    //       uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    //     }}
    //     onLoad={handleLoad}
    //     onProgress={handleProgress}
    //     style={styles.video}
    //   />
    //   <TouchableOpacity
    //     style={styles.progressBarContainer}
    //     onPress={handlePress}
    //   >
    //     <View
    //       style={[
    //         styles.progressBar,
    //         {
    //           width: `${
    //             (preloadedData / duration) * 100
    //           }%`,
    //           backgroundColor: "blue",
    //         },
    //       ]}
    //     />
    //     <View
    //       style={[
    //         styles.progressBar,
    //         {
    //           width: `${
    //             (currentTime / duration) * 100
    //           }%`,
    //           backgroundColor: "#F44336",
    //         },
    //       ]}
    //     />
    //     <View
    //       style={[
    //         styles.progressBarThumb,
    //         {
    //           left: `${
    //             (currentTime / duration) * 100
    //           }%`,
    //         },
    //       ]}
    //     />
    //   </TouchableOpacity>
    // </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  video: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
  progressBarContainer: {
    height: 10,
    width: "80%",
    backgroundColor: "#eee",
    borderRadius: 5,
    overflow: "hidden",
    marginTop: 10,
  },
  progressBar: {
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  progressBarThumb: {
    position: "absolute",
    top: -5,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#F44336",
    transform: [{ translateX: -10 }],
  },
});
