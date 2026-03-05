import { Movie } from "@/types/movie.type";
import { View, Text, StyleSheet, Image } from "react-native";

type Props = {
  item: Movie;
};

export const MovieCard = ({ item }: Props) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.poster }} style={styles.image} resizeMode="contain" />
      <View>
        <Text style={styles.titleMovie}>{item.title}</Text>
        <Text style={{ color: "white" }}>{item.release_date}</Text>
        <Text style={{ color: "white" }}>Lang: {item.language}</Text>
        <View style={styles.rank}>
          <Text style={{ color: "white" }}>Rank:</Text>
          <Text style={{ color: "yellow" }}>{item.rank}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { width: "100%", backgroundColor: "#5C668B", marginBottom: 8, borderRadius: 8, padding: 8, flexDirection: "row", gap: 8 },
  titleMovie: { fontWeight: "500", fontSize: 16, color: "white" },
  image: { width: 80, height: 110 },
  rank: { flexDirection: "row", gap: 4 },
});