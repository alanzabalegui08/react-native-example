import * as React from 'react';
import { Button, View } from 'react-native';

export default HomeScreen = (props) =>{
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}