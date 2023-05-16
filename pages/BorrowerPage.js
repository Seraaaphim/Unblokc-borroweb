import React from "react";
import {StyleSheet, Text, Linking, Button, ScrollView, View, 
    Image, TouchableOpacity,} from "react-native";
import AccountSetting from "./AccountSetting";
import { useNavigation, useRoute } from "@react-navigation/native";
import DonationKnowledge from "./DonationKnowledge";
import RequestKnowledge from "./RequestKnowledge";

export default function BorrowerPage() {
  const navigation = useNavigation();
  const route = useRoute();

return (

<ScrollView style={{paddingTop: 50, backgroundColor: "#fff",}}>
    <View style={{paddingHorizontal: 20}}>
        
        {/* Header */}
        <View style={{width: "100%", justifyContent: "space-between", flexDirection: "row"}}>
            <TouchableOpacity>
                <View style={styles.profcircle}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.profcircle}/>
            </TouchableOpacity>
        </View>

        <View style={{width:"100%", height: 30}}/>

        {/* Balance */}
        <View style={{width: "100%", height: 90, padding: 15, justifyContent: "center",
                  backgroundColor: "#F8FCF8", borderWidth: 0.2}}>
            <Text style={styles.font15}>Balance</Text>
            <Text style={styles.font25}>Php 20.12</Text>
        </View> 
        
        <View style={{width:"100%", height: 20}}/>
        
        {/* To pay */}
        <View style={{width: "100%", height: 90, padding: 15, justifyContent: "center",
                  backgroundColor: "#F8FCF8", borderWidth: 0.2}}>
            <Text style={styles.font15}>To pay</Text>
            <Text style={styles.font25}>Php 20.12</Text>
        </View> 
        
        <View style={{width:"100%", height: 20}}/>

        {/* Credit Score */}
        <View style={{width: "100%", height: 90, backgroundColor: "#F8FCF8", borderWidth: 0.2}}>
            <View style={{flexDirection: "row"}}>
                <View style={{width: "25%", height: 90, paddingLeft: 15, justifyContent: "center",}}>
                <View style={styles.progcircle}/>
                </View> 

                <View style={{width: "60%", height: 90, padding: 15, justifyContent: "center",}}>
                <Text style={styles.font15}>Credit Score</Text>
                <Text style={styles.font25}>60</Text>
                </View> 
            </View>
        </View>

        <View style={{width:"100%", height: 20}}/>


        {/* Knowledge Base */}
        <View style={{height: 100}}>
        <ScrollView horizontal={true}> 
            <View style={{width: 250, height: 100, marginRight: 15, padding: 15,
                  backgroundColor: "#F8FCF8", borderWidth: 0.2}}>
                <Text>Educational Content</Text>
            </View>    
            
            <View style={{width: 250, height: 100, marginRight: 10, padding: 15,
                  backgroundColor: "#F8FCF8", borderWidth: 0.2}}>
            </View> 
        </ScrollView>
        </View>
        
        <View style={{width:"100%", height: 20}}/>
          

        <View style={{width:"100%", height: 70}}/>
    </View>
</ScrollView>);
}

const styles = StyleSheet.create({
    centerall:{justifyContent: "center",alignItems: "center",},

    profcircle:{
        width: 50, 
        height: 50,
        borderRadius: 50/2,
        backgroundColor:"#969799",
    },

    progcircle:{
        width: 60, 
        height: 60,
        borderRadius: 60/2,
        backgroundColor:"#969799",
    },

    oxblue:{color: "#002147",},
    white:{color: "#fff",},
    safetyblue:{color: "#004479",},
    maccheese:{color: "#FFBA6C",},
    lightorange:{color: "#FFDEB8",},    
    gray: {color:"#969799"},

    font5:{fontSize: 5,},
    font10:{fontSize: 10,},
    font15:{fontSize: 15,},
    font20:{fontSize: 20,},
    font25:{fontSize: 25,},
    font30:{fontSize: 30,},
    bold:{fontWeight: "bold",},
});