import { MovieCard } from "@/components/movieCard";
import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Movies } from "@/services/movie";

export default function Dashboard() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Em Cartaz</Text>
      <FlatList 
        data={Movies} 
        renderItem={({ item }) => <MovieCard item={item} />} 
        keyExtractor={(item) => item.id} 
      />
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#19244B", padding: 8 },
  title: { color: "white", fontSize: 20, marginBottom: 15, marginTop: 10 },
});