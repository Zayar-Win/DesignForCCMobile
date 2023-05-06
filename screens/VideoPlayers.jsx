import React, { useState, useRef } from "react";
import { Video, Audio } from "expo-av";
import {
  View,
  TouchableOpacity,
  Text,
} from "react-native";

const VIDEO_URI = "your_video_url_here";

export default VideoPlayers = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] =
    useState(false);
  const [playbackSpeed, setPlaybackSpeed] =
    useState(1.0);
  const [currentPosition, setCurrentPosition] =
    useState(167061);

  const handlePlayPause = async () => {
    if (videoRef.current) {
      if (isPlaying) {
        await videoRef.current.pauseAsync();
        setIsPlaying(false);
      } else {
        await videoRef.current.playAsync();
        setIsPlaying(true);
      }
    }
  };

  const handleAudioVolume = async (type) => {
    try {
      if (videoRef.current) {
        const videoStatus =
          await videoRef.current.getStatusAsync();
        const currentVolume = videoStatus.volume;
        if (type === "increase") {
          if (currentVolume <= 0.9) {
            await videoRef.current.setVolumeAsync(
              currentVolume + 0.1
            );
          } else if (currentVolume === 1) {
            return;
          } else {
            await videoRef.current.setVolumeAsync(
              1
            );
          }
        } else if (type === "reduce") {
          if (currentVolume > 0.1) {
            await videoRef.current.setVolumeAsync(
              currentVolume - 0.1
            );
          } else {
            await videoRef.current.setVolumeAsync(
              0
            );
          }
        }
      }
    } catch (error) {
      console.log(
        "Error in handleAudioVolume:",
        error
      );
    }
  };

  const handleSeek = async (type) => {
    try {
      if (videoRef.current) {
        const videoStatus =
          await videoRef.current.getStatusAsync();
        const currentPosition =
          videoStatus.positionMillis;
        const newPosition =
          type === "forward"
            ? currentPosition + 15000
            : currentPosition - 15000;
        await videoRef.current.setPositionAsync(
          newPosition
        );
      }
    } catch (e) {
      console.log("Error in handleSeek:", e);
    }
  };

  const handlePlaybackStatusUpdate = (
    playbackStatus
  ) => {
    if (playbackStatus.didJustFinish) {
      setIsPlaying(false);
      videoRef.current.replayAsync();
    }
  };

  const handlePlaybackSpeed = async (type) => {
    try {
      if (videoRef.current) {
        const videoStatus =
          await videoRef.current.getStatusAsync();
        console.log(videoStatus);
        const currentSpeed = videoStatus.rate;
        const currentPosition =
          videoStatus.positionMillis;
        if (type === "increase") {
          await videoRef.current.setRateAsync(
            currentSpeed + 0.25,
            true
          );
          setPlaybackSpeed(currentSpeed + 0.25);
          await videoRef.current.setPositionAsync(
            currentPosition
          );
          setCurrentPosition(currentPosition);
        } else if (type === "reduce") {
          await videoRef.current.setRateAsync(
            currentSpeed - 0.25,
            true
          );
          setPlaybackSpeed(currentSpeed - 0.25);
          await videoRef.current.setPositionAsync(
            currentPosition
          );
          setCurrentPosition(currentPosition);
        }
      }
    } catch (e) {
      console.log(
        "Error in handlePlaybackSpeed : ",
        e
      );
    }
  };

  return (
    <View>
      <Video
        ref={videoRef}
        source={{
          uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        }}
        positionMillis={currentPosition} // set the video to start at 5 seconds
        isMuted={false}
        style={{
          width: 400,
          height: 200,
        }}
        resizeMode='contain'
        onPlaybackStatusUpdate={
          handlePlaybackStatusUpdate
        }
        shouldPlay={true}
        rate={playbackSpeed}
      />

      <TouchableOpacity onPress={handlePlayPause}>
        {isPlaying ? (
          <Text>Pause</Text>
        ) : (
          <Text>Play</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          handleAudioVolume("increase")
        }
      >
        <Text>Increase Volume</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          handleAudioVolume("reduce")
        }
      >
        <Text>Reduce Volume</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleSeek("backward")}
      >
        <Text>Backward 15s</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleSeek("forward")}
      >
        <Text>Forward 15s</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          handlePlaybackSpeed("reduce")
        }
      >
        <Text>Decrease Playback Speed</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          handlePlaybackSpeed("increase")
        }
      >
        <Text>Increase Playback speed</Text>
      </TouchableOpacity>
    </View>
  );
};
