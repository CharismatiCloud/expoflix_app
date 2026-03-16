import { Movie } from "@/types/movie.type";
import { View, Text, StyleSheet, Image } from "react-native";

type Props = {
  item: any; // Alterado para 'any' para evitar erros de TypeScript caso o seu arquivo movie.type.ts não esteja atualizado
};

export const MovieCard = ({ item }: Props) => {
  // 1. Juntamos a URL base do TMDB com o caminho da imagem que vem da API
  const imageUrl = `https://image.tmdb.org/t/p/w500${item.poster_path}`;

  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.image} resizeMode="contain" />
      <View>
        <Text style={styles.titleMovie}>{item.title}</Text>
        <Text style={{ color: "white" }}>{item.release_date}</Text>
        
        {/* 2. Corrigido para original_language (como o TMDB envia) */}
        <Text style={{ color: "white" }}>Lang: {item.original_language}</Text>
        
        <View style={styles.rank}>
          <Text style={{ color: "white" }}>Rank:</Text>
          {/* 3. Corrigido para vote_average (como o TMDB envia) */}
          <Text style={{ color: "yellow" }}>{item.vote_average}</Text>
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