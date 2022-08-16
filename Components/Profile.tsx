import React, { Component } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { List, Text, Card, Avatar, TextInput,Button } from 'react-native-paper'

export class Profile extends Component {
    render() {
        return (
            <View style={{ padding: 15, backgroundColor: '#FFFFFF',flex:1 }}>
                <ScrollView>
                <View style={{ paddingVertical: 10 }}><Text style={{ fontWeight: 'bold', fontSize: 16 }}>Dr. Profile</Text></View>
                <View style={{ position: 'relative' }}>
                    <View>
                        <Card style={{ backgroundColor: '#58C2CD', height: 160, paddingTop: 17 }}>
                            <Avatar.Image style={{ alignSelf: 'center' }} size={88} source={require('../images/sample.webp')} />
                            <Text style={{ textAlign: 'center', color: '#FFFFFF', fontSize: 16, marginTop: 10 }}>Dr. Sharmila Rajkumar</Text>
                        </Card>
                    </View>
                    <View style={{ position: 'absolute', alignSelf: 'center', bottom: -30 }}>
                        <Card style={{ backgroundColor: '#FFFFFF', width: 287, height: 50 }}>
                        </Card>
                    </View>
                </View>
                <View style={{ marginVertical: 40 }}>
                    <View style={{ paddingVertical: 20 }}><Text style={{ textAlign: 'center', color: '#959393', fontSize: 12 }}>10% In Progress</Text></View>
                    <Card style={styles.shadowProp}>
                        <List.AccordionGroup>
                            <List.Accordion id={1} style={styles.accordian}
                                title="Personal Information"
                                titleStyle={styles.accordianTitle}>
                                <View style={{paddingTop:20}}>
                                    <View  style={styles.inputFields}>
                                    <Text style={styles.title}>
                                        Title
                                    </Text>
                                    <TextInput mode='outlined' placeholder='Mr.' style={styles.input} />
                                    </View>
                                    <View  style={styles.inputFields}>
                                    <Text style={styles.title}>
                                    First Name
                                    </Text>
                                    <TextInput mode='outlined' placeholder='Mr.' style={styles.input} />
                                    </View>
                                    <View  style={styles.inputFields}>
                                    <Text style={styles.title}>
                                    Last Name
                                    </Text>
                                    <TextInput mode='outlined' placeholder='Mr.' style={styles.input} />
                                    </View>
                                    <View  style={styles.inputFields}>
                                    <Text style={styles.title}>
                                    Gender
                                    </Text>
                                    <TextInput mode='outlined' placeholder='Mr.' style={styles.input} />
                                    </View>
                                    <View  style={styles.inputFields}>
                                    <Text style={styles.title}>
                                    Date of Birth
                                    </Text>
                                    <TextInput mode='outlined' placeholder='Mr.' style={styles.input} />
                                    </View>
                                    <View  style={styles.inputFields}>
                                    <Text style={styles.title}>
                                    Email ID
                                    </Text>
                                    <TextInput mode='outlined' placeholder='Mr.' style={styles.input} />
                                    </View>
                                    <View  style={styles.inputFields}>
                                    <Text style={styles.title}>
                                    House No & Name
                                    </Text>
                                    <TextInput mode='outlined' placeholder='Mr.' style={styles.input} />
                                    </View>
                                    <View  style={styles.inputFields}>
                                    <Text style={styles.title}>
                                    Street Address / Locality
                                    </Text>
                                    <TextInput mode='outlined' placeholder='Mr.' style={styles.input} />
                                    </View>
                                    <View  style={styles.inputFields}>
                                    <Text style={styles.title}>
                                    Land Mark
                                    </Text>
                                    <TextInput mode='outlined' placeholder='Mr.' style={styles.input} />
                                    </View>
                                    <View  style={styles.inputFields}>
                                    <Text style={styles.title}>
                                    State
                                    </Text>
                                    <TextInput mode='outlined' placeholder='Mr.' style={styles.input} />
                                    </View>
                                    <View  style={styles.inputFields}>
                                    <Text style={styles.title}>
                                    City
                                    </Text>
                                    <TextInput mode='outlined' placeholder='Mr.' style={styles.input} />
                                    </View>
                                    <View  style={styles.inputFields}>
                                    <Text style={styles.title}>
                                    Pin Code
                                    </Text>
                                    <TextInput mode='outlined' placeholder='Mr.' style={styles.input} />
                                    </View>
                                    <View  style={styles.inputFields}>
                                    <Text style={styles.title}>
                                    Contact Number
                                    </Text>
                                    <TextInput mode='outlined' placeholder='Mr.' style={styles.input} />
                                    </View>
                                    <View  style={styles.inputFields}>
                                    <Text style={styles.title}>
                                    Languages Known
                                    </Text>
                                    <TextInput mode='outlined' placeholder='Mr.' style={styles.input} />
                                    </View>
                                    <View  style={styles.inputFields}>
                                    <Text style={styles.title}>
                                    Short Description
                                    </Text>
                                    <TextInput mode='outlined' placeholder='Mr.' style={styles.input} />
                                    </View>
                                    <View>
                                        <Button style={styles.btnProfile} color="#FFFFFF">
                                            NEXT
                                        </Button>
                                    </View>
                                    </View>
                            </List.Accordion>
                            <List.Accordion id={2} style={styles.accordian}
                                title="Education"
                                titleStyle={styles.accordianTitle}
                               
                            >
                               <View><Text>Hello</Text></View>
                            </List.Accordion>
                            
                        </List.AccordionGroup>
                    </Card>

                </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    title: {
        fontSize: 12,
        color: '#9C9B9B',
    },
    input: {
        height: 40,
        backgroundColor: '#FFFFFF'
    },
    accordian:{
         backgroundColor: '#FFFFFF',
          borderBottomColor: '#D4D4D4',
           borderBottomWidth: 1 
        },
        accordianTitle:{
             color: '#58C2CD',
             fontSize:12,
             fontWeight:'bold'
            },
    shadowProp: {
        shadowOffset: { width: 4, height: 4 },
        shadowColor: 'red',
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    inputFields:{
        marginBottom:20
    },
    btnProfile:{
        backgroundColor:'#16656F',
        fontSize:16,
        marginBottom:20
    }
});
export default Profile