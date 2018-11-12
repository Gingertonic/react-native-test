import React, {Component} from 'react';
import { Alert, Button, Text, Image } from 'react-native';
import welcomeStyles from '../assets/css/welcome'

class Welcome extends Component {
  _onPressButton(color) {
    Alert.alert(`Hey, I asked you
    not to do that...

  Patience is a virtue`)
  }

  render = () => {
    let img={uri: "https://www.alambassociates.com/wp-content/uploads/2016/10/maxresdefault.jpg"};
    return(
      <React.Fragment>
        <Text style={welcomeStyles.basicText}>{
        `Magical things in progress!
      Please standby`
        }
        </Text>
        <Image source={img} style={welcomeStyles.mainImage}/>
        <Button
            onPress={this._onPressButton}
            title="Do not press this button"
            color="#FF0000"
          />
      </React.Fragment>
    )
  }
}

export default Welcome
