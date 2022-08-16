import React, { Component } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { List, Text, Card, Avatar, TextInput } from 'react-native-paper'

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
                                <View>
                                    <View>
                                    <Text style={styles.title}>
                                        Title
                                    </Text>
                                    <TextInput mode='outlined' placeholder='Mr.' style={styles.input} />
                                    </View>
                                    <View>
                                    <Text style={styles.title}>
                                        Title
                                    </Text>
                                    <TextInput mode='outlined' placeholder='Mr.' style={styles.input} />
                                    </View>
                                    <View>
                                    <Text style={styles.title}>
                                        Title
                                    </Text>
                                    <TextInput mode='outlined' placeholder='Mr.' style={styles.input} />
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
});
export default Profile