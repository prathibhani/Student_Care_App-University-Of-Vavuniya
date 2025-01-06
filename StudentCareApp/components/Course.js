export default function Course() {
/**/ 



    return(
<PaperProvider>
<ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>UoV Student Care</Text>
        </View>
        <View style={styles.imagecontain}>
          <Image
            source={require("../assets/uovlogo.png")}
            style={styles.image}
          />
        </View>
        <View style={styles.courseInfoContainer}>
          <Text style={styles.title}>Course Information</Text>
          </View>
          </ScrollView>
</PaperProvider>

    );
}