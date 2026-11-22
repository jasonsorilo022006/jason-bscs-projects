import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
  source={require("../../assets/profile.jpg")}
  style={styles.profileImage}
/>

        <Text style={styles.name}>Jason Sorilo</Text>

        <Text style={styles.role}>BSCS Student</Text>

        <Text style={styles.description}>
          Computer Science student interested in programming,
          mobile application development, and technology.
        </Text>
      </View>

      {/* Information Card */}
      <View style={styles.card}>

        <Text style={styles.cardTitle}>Personal Information</Text>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Course</Text>
          <Text style={styles.value}>BS Computer Science</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Year Level</Text>
          <Text style={styles.value}>3rd Year</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>University</Text>
          <Text style={styles.value}>
            Northwest Samar State University
          </Text>
        </View>

      </View>

      {/* Skills */}
      <View style={styles.card}>

        <Text style={styles.cardTitle}>Skills</Text>

        <View style={styles.skillsContainer}>
          <Text style={styles.skill}>Cooking</Text>
          <Text style={styles.skill}>Playing Sepaktakraw</Text>
          <Text style={styles.skill}>Dancing</Text>
          <Text style={styles.skill}>Programming</Text>
        </View>

      </View>

      {/* Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>View Profile</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
  },

  header: {
    backgroundColor: "#2e86de",
    padding: 20,
    alignItems: "center",
  },

  headerTitle: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
  },

  profileSection: {
    alignItems: "center",
    padding: 20,
  },

  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 12,
  },

  name: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#222",
  },

  role: {
    fontSize: 17,
    color: "#2e86de",
    marginTop: 5,
  },

  description: {
    textAlign: "center",
    color: "#666",
    fontSize: 14,
    marginTop: 10,
    paddingHorizontal: 20,
  },

  card: {
    backgroundColor: "#ffffff",
    marginHorizontal: 20,
    marginBottom: 15,
    padding: 18,
    borderRadius: 12,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#222",
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#eeeeee",
  },

  label: {
    color: "#777",
    fontSize: 14,
  },

  value: {
    color: "#222",
    fontSize: 14,
    fontWeight: "500",
    maxWidth: "60%",
    textAlign: "right",
  },

  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },

  skill: {
    backgroundColor: "#e8f1ff",
    color: "#2e86de",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    overflow: "hidden",
  },

  button: {
    backgroundColor: "#2e86de",
    marginHorizontal: 20,
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});