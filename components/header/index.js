import React, {useState} from 'react';
import { View, Text, Image} from 'react-native';
import Styles from "./styles";

/* imports ext */
import {Picker} from '@react-native-picker/picker';

const Header = () => {

    const [city, setCity] = useState('LoS Angeles');

    return (
        <View style={Styles.bodyHeader}>
            {/* left */}
            <View style={Styles.leftHeader} >
                 <Image 
                    source={require('../../assets/images/1.png')}
                />
            </View>
            {/* center */}
            <View style={Styles.centerHeader}>

                <Text>header</Text>
            </View>

            {/* right */}
            <View style={Styles.rightHeader}>
                <Picker
                    selectedValue={city}
                    onValueChange={(itemValue, itemIndex) =>
                        setCity(itemValue)
                    }>
                     <Picker.Item
                        label='Los Angeles'
                        value= "Los Angeles"
                        style={{fontWeight:"bold"}}
                    />
                    <Picker.Item
                        label='Martinique'
                        value= "Martinique"
                        style={{fontWeight:"bold"}}
                    />
                    <Picker.Item
                        label='France'
                        value= "France"
                        style={{fontWeight:"bold"}}
                    />
                </Picker>
            </View>
            
        </View>
    )
}

export default Header