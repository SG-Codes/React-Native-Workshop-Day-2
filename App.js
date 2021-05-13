import React from 'react';
import {View, Dimensions, StyleSheet, Text, Image, TouchableOpacity, Linking} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class App extends React.Component {

  visitProfile = () => {
    Linking.openURL('https://github.com');
  }

  render() {
    return (
      <View>
        <View style={styles.upperSection}>
          <LinearGradient
            start={{x: 0, y: 0}}
            colors={['#ff0291', '#2d00f7']}
            style={styles.linearGradient}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
              }}
              style={styles.img}
            />
          </LinearGradient>
        </View>
        <View style={styles.bottomSection}>
          <Text style={styles.name}>Your Name</Text>
          <Text style={styles.job}>Job Title</Text>
          <Text style={styles.desc}>Dolor reprehenderit nisi veniam veniam consectetur laboris elit culpa elit deserunt et ad laboris. Qui sunt exercitation ut in excepteur. Enim mollit incididunt laborum officia aliquip mollit deserunt laboris et deserunt sunt amet nostrud. Ullamco occaecat eu cillum aliqua et. Excepteur cupidatat aliqua cupidatat aliqua in est ullamco mollit cupidatat irure ad. Deserunt do anim consequat cupidatat mollit nulla voluptate Lorem occaecat ullamco aliqua ex ipsum eiusmod. Tempor adipisicing commodo sit eu esse. Nulla reprehenderit culpa excepteur labore qui nostrud.</Text>
          <View>
            <TouchableOpacity onPress={this.visitProfile} style={styles.profileTouch}>
              <Text style={styles.profileText}>Visit Profile</Text>
            </TouchableOpacity>
          </View>
              <Text style={{ color: 'gray', fontSize: 13, marginTop: 15 }}>Created by: Name</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  upperSection: {
    width: deviceWidth,
    height: deviceHeight / 4,
  },
  bottomSection: {
    alignItems: 'center',
    width: deviceWidth,
    height: 3 * (deviceHeight / 4),
  },
  linearGradient: {
    flex: 1,
  },
  img: {
    height: 120,
    width: 120,
    borderRadius: 70,
    marginTop: 150,
    marginLeft: 170,
  },
  name: {
    marginTop: 70,
    fontSize: 22,
  },
  job: {
    marginTop: 5,
    fontSize: 22,
    color: '#2d00f7'
  },
  desc: {
    paddingLeft: 25,
    paddingRight: 25,
    marginTop: 22,
    fontSize: 19,
    textAlign: 'justify'
  },
  profileText: {
    fontSize: 22,

  },
  profileTouch: {
    borderWidth: 2, 
    borderColor: '#2d00f7', 
    padding: 13, 
    marginTop: 28, 
    borderRadius: 10
  }
});

export default App;
