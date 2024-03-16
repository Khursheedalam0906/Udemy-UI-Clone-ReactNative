import {View, Text} from 'react-native';
import React from 'react';
import Video from 'react-native-video';

const VideoScreens = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <Video
        controls
        source={require('../images/Introduction.mp4')} // Can be a URL or a local file.
        onBuffer={() => {}} // Callback when remote video is buffering
        onError={() => {}} // Callback when video cannot be loaded
        style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}
      />
    </View>
  );
};

export default VideoScreens;
