import React from 'react';
import { View, Button } from 'react-native';

const about = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go to Details"
        onPress={alert('Atmosoft')}
      />
    </View>
  );
}

export default about;