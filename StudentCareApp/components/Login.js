import {ScrollView} from "react-native";
import {PaperProvider} from "react-native-paper";
import { students } from "../data/StudentsDb";
import { useNavigation } from "@react-navigation/native";

export default function Login(){
    return(
        <PaperProvider>
<ScrollView>
<View style={styles.header}>
          <Text style={styles.headerText}>UoV Student Care</Text>
        </View>
        <View style={styles.imagecontain}>
          <Image
            source={require("../assets/uovlogo.png")}
            style={styles.image}
          />
        </View>
</ScrollView>

            </PaperProvider>
    );
}