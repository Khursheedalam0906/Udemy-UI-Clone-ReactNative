import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';

const User = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          width: '100%',
          height: 55,
          borderBottomWidth: 0.2,
          borderColor: '#8e8e8e',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: '#000', fontSize: 18}}>Account</Text>
      </View>
      <Text style={{marginLeft: 15, marginTop: 30, fontSize: 16}}>Support</Text>
      <View>
        <FlatList
          data={[
            {title: 'About Udemy', isIcon: true},
            {title: 'About Udemy Business', isIcon: true},
            {title: 'Help and Support', isIcon: false},
            {title: 'Share Udemy App', isIcon: false},
          ]}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={{
                  width: '100%',
                  height: 50,
                  borderBottomWidth: 0.5,
                  borderColor: '#8e8e8e',
                }}>
                <View
                  style={{
                    width: '100%',
                    height: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text style={{marginLeft: 15, fontSize: 17, color: 'black'}}>
                    {item.title}
                  </Text>
                  {item.isIcon ? (
                    <Image
                      source={require('../images/next-arrow.png')}
                      style={{width: 16, height: 16, marginRight: 20}}
                    />
                  ) : null}
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <Text
        style={{
          alignSelf: 'center',
          color: '#8000ff',
          fontSize: 20,
          color: 'purple',
          fontWeight: 700,
          marginTop: 30,
        }}>
        Sign In
      </Text>
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 14,
          marginTop: 15,
          color: 'black',
        }}>
        Udemy v.2337.44
      </Text>
    </View>
  );
};

export default User;
