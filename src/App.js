import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import SvgComponent from './component/svg/svg-component';
import Container from './component/Container.js';
import MaskedView from '@react-native-community/masked-view';

const App = () => {
  return (


    <Container style={{width:1170, height:2532}}>

      <MaskedView
        style={{ flex: 1, flexDirection: 'row', height: '100%' }}
        maskElement={
          <View
            style={{
              // Transparent background because mask is based off alpha channel.
              backgroundColor: 'transparent',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text
              style={{
                fontSize: 40,
                color: 'black',
                fontWeight: 'bold'
              }}
            >
              Basic Mask
            </Text>
          </View>
        }
      >
        {/* Shows behind the mask, you can put anything here, such as an image */}
        <View style={{ flex: 1, height: '100%', backgroundColor: '#784376' }} />
        <View style={{ flex: 1, height: '100%', backgroundColor: '#F5DD90' }} />
        <View style={{ flex: 1, height: '100%', backgroundColor: '#F76C5E' }} />
        <View style={{ flex: 1, height: '100%', backgroundColor: '#e1e1e1' }} />
      </MaskedView>


      <ScrollView style={{flex: 1}}>
        <Text style={{fontFamily: 'SFUIDisplay-Regular'}}>Some text</Text>
        <View style={{flex: 1}}>
          <Text style={{fontFamily: 'Notable-Regular'}}>Some more text</Text>
          <Text style={{fontFamily: 'SFUIDisplay-Semibold'}}>Some more text</Text>
        </View>
        <SvgComponent> </SvgComponent>
      </ScrollView>

    </Container>


  );
};
export default App;
