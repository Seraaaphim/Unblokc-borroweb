import React from "react";
import {StyleSheet, Text, Linking, Button, ScrollView, View, 
    Image, TouchableOpacity,} from "react-native";
import AccountSetting from "./AccountSetting";
import { useNavigation, useRoute } from "@react-navigation/native";
import DonationKnowledge from "./DonationKnowledge";
import RequestKnowledge from "./RequestKnowledge";

export default function LenderPage() {
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

        {/* Earnings */}
        <Text style={[styles.font25, styles.bold]}>Earnings</Text>
        <View style={{width:"100%", height: 20}}/>
        
        <View style={{height: 100}}>
        <ScrollView horizontal={true}> 
            <View style={{width: 250, height: 100, marginRight: 15,
                  backgroundColor: "#F8FCF8", borderWidth: 0.2}}>
            </View>    
            
            <View style={{width: 250, height: 100, marginRight: 10,
                  backgroundColor: "#F8FCF8", borderWidth: 0.2}}>
            </View> 
        </ScrollView>
        </View>
        
        <View style={{width:"100%", height: 20}}/>

        {/* Active Loans */}
        <Text style={[styles.font25, styles.bold]}>Active Loans</Text>
        <View style={{width:"100%", height: 20}}/>
        
        <View style={{width: "100%", height: 150, marginBottom: 15, padding: 10,
            backgroundColor: "#F8FCF8", borderWidth: 0.2}}>
            <Text style={styles.font15}>Name Name</Text>
            <Text style={styles.font15}>Total loan amount: 0 000</Text>
            <View style={{width:"100%", height: 10}}/>
            {/*For separation*/}
            <View style={{flexDirection: "row"}}>
                <View style={{width: "25%", height: 70, justifyContent: "center"}}>
                    <View style={styles.progcircle}/>
                </View>

                <View style={{width: "25%", height: 70}}>
                    <Text style={styles.font10}>Paid amount</Text>
                    <Text style={styles.font20}>1500 / 25000</Text>
                </View>

                <View style={{width: "25%", height: 70, justifyContent: "center"}}>
                    <View style={styles.progcircle}/>
                </View>

                <View style={{width: "25%", height: 70}}>
                    <Text style={styles.font15}>3 days remaining</Text>
                    <Text style={styles.font10}>Until Jan. 1, 2023</Text>
                </View>
            </View>
        </View>    
            
        <View style={{width: "100%", height: 150, marginBottom: 15, padding: 10,
            backgroundColor: "#F8FCF8", borderWidth: 0.2}}>
            <Text style={styles.font15}>Name Name</Text>
            <Text style={styles.font15}>Total loan amount: 0 000</Text>
            <View style={{width:"100%", height: 10}}/>
            {/*For separation*/}
            <View style={{flexDirection: "row"}}>
                <View style={{width: "25%", height: 70, justifyContent: "center"}}>
                    <View style={styles.progcircle}/>
                </View>

                <View style={{width: "25%", height: 70}}>
                    <Text style={styles.font10}>Paid amount</Text>
                    <Text style={styles.font20}>1500 / 25000</Text>
                </View>

                <View style={{width: "25%", height: 70, justifyContent: "center"}}>
                    <View style={styles.progcircle}/>
                </View>

                <View style={{width: "25%", height: 70}}>
                    <Text style={styles.font15}>3 days remaining</Text>
                    <Text style={styles.font10}>Until Jan. 1, 2023</Text>
                </View>
            </View>
        </View> 

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