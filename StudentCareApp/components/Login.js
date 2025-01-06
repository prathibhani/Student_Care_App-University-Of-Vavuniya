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
        <View style={styles.container}>
          <Text style={styles.loginText}>Student Login</Text>
          <Divider />
        </View>
        <View style={styles.formcontainer}>
          <TextInput label="Username" mode="outlined" onChangeText={setName} />
          <TextInput
            label="Password"
            mode="outlined"
            secureTextEntry
            onChangeText={setPassword}
          />
          <View style={styles.buttoncontainer}>
            <Button mode="contained" onPress={handlebutton}>
              Login
            </Button>
</ScrollView>

            </PaperProvider>
    );
}