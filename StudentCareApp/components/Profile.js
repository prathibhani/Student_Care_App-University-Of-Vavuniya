export default  function Profile ({ route }){
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
        <View style={styles.studentInfoContainer}>
          <Image
            style={styles.profilePicContainer}
            source={studentdata.profile_pic}
          ></Image>
          <Text style={styles.studentName}>Name:{studentdata.username}</Text>
          <Text style={styles.studentDetails}>Age:{studentdata.age}</Text>
          <Text style={styles.studentDetails}>Gender:{studentdata.gender}</Text>
        </View>

        <View style={styles.contactInfoContainer}>
          <Text style={styles.contactTitle}>Contact Information</Text>
          <Text style={styles.contactDetails}>Email: {studentdata.email}</Text>
          <Text style={styles.contactDetails}>Phone: {studentdata.phone}</Text>
          <Text style={styles.contactDetails}>
            Address: {studentdata.address}
          </Text>
        </View>
        <Divider></Divider>
        <View style={styles.biologicalInfoContainer}>
          <Text style={styles.biologicalTitle}>Biological Information</Text>
          <Text style={styles.biologicalDetails}>
            Gender: {studentdata.gender}
          </Text>
          <Text style={styles.biologicalDetails}>Age: {studentdata.age}</Text>
          <Text style={styles.biologicalDetails}>
            Blood Group: {studentdata.blood_group}
          </Text>
        </View>

</ScrollView>
</PaperProvider>

    );
}
