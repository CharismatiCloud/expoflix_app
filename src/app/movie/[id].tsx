import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MovieDetails() {
  // 1. Pegamos o ID do filme que foi passado na URL pelo clique
  const { id } = useLocalSearchParams();
  const router = useRouter();
  
  // 2. Estado para guardar os detalhes do filme
  const [movieDetails, setMovieDetails] = useState<any>(null);

  // 3. Função para buscar o filme específico na API usando o ID
  const fetchMovieDetails = async () => {
    try {
      // Trocamos o process.env pelo link direto, usando o ID do filme e a sua chave real
      const url = `${process.env.EXPO_PUBLIC_MOVIE_URL}/movie/${id}?api_key=${process.env.EXPO_PUBLIC_API_KEY}&language=pt-BR`;
      
      const response = await fetch(url);
      const data = await response.json();
      setMovieDetails(data);
    } catch (error) {
      console.error("Erro ao buscar detalhes do filme:", error);
    }
  };
  useEffect(() => {
    if (id) {
      fetchMovieDetails();
    }
  }, [id]);

  // Enquanto a internet carrega os dados, mostramos um ícone de carregamento
  if (!movieDetails) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Botão de voltar */}
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backText}>{"< Voltar"}</Text>
      </TouchableOpacity>

      {/* Capa do Filme */}
      <Image 
        source={{ uri: `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}` }} 
        style={styles.poster}  resizeMode="contain"
      />

      {/* Título e Detalhes */}
      <Text style={styles.title}>{movieDetails.title}</Text>
      <Text style={styles.info}>
        {movieDetails.release_date} • {movieDetails.vote_average * 10}% Avaliação
      </Text>

      {/* Sinopse */}
      <Text style={styles.sinopseTitle}>Sinopse</Text>
      <Text style={styles.sinopseText}>{movieDetails.overview}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#19244B", padding: 16 },
  loadingContainer: { flex: 1, backgroundColor: "#19244B", justifyContent: "center", alignItems: "center" },
  backButton: { marginBottom: 16 },
  backText: { color: "white", fontSize: 16 },
  poster: { width: "100%", height: 300, borderRadius: 10, resizeMode: "cover", marginBottom: 16 },
  title: { color: "white", fontSize: 24, fontWeight: "bold", textAlign: "center" },
  info: { color: "#A0A0A0", fontSize: 14, textAlign: "center", marginBottom: 20 },
  sinopseTitle: { color: "white", fontSize: 18, fontWeight: "bold", marginBottom: 8 },
  sinopseText: { color: "#D0D0D0", fontSize: 14, lineHeight: 20 },
});