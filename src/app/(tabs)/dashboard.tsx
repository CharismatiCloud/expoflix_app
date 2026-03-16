import { MovieCard } from "@/components/movieCard";
import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from "react";
import { useRouter } from "expo-router";

export default function Dashboard() {
  // 1. Criamos um estado (variável) para guardar os filmes que vêm da internet
  const [movies, setMovies] = useState<any[]>([]);
  const router = useRouter();

  // 2. Criamos a função que vai buscar os filmes reais na API do TMDB
const fetchMovies = async () => {
    try {
      // 1. Coloque a sua chave da API (aquela gigante do site TMDB) diretamente aqui onde diz SUA_CHAVE_AQUI
      const url = `${process.env.EXPO_PUBLIC_MOVIE_URL}/movie/popular?api_key=${process.env.EXPO_PUBLIC_API_KEY}&language=pt-BR`;
      
      // 2. Este console.log vai mostrar no terminal do computador exatamente o link que está a ser chamado
      console.log("URL QUE ESTOU A TESTAR:", url);

      const response = await fetch(url);
      const data = await response.json();
      
      // 3. Verifica se a API devolveu um erro do TMDB (ex: chave inválida)
      if (data.success === false) {
        console.log("Erro do TMDB:", data.status_message);
      }

      setMovies(data.results);
    } catch (error) {
      console.error("Erro ao buscar filmes na API:", error);
    }
  };

  // 3. O useEffect chama a função fetchMovies assim que a tela abre
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Em Cartaz</Text>
      
      <FlatList 
        data={movies} // <-- Agora usamos a variável 'movies' (com dados reais)
        keyExtractor={(item) => item.id.toString()} 
        renderItem={({ item }) => (
          // 4. Envolvemos o MovieCard num TouchableOpacity para ele ser clicável!
          <TouchableOpacity onPress={() => router.push(`/movie/${item.id}`)}>
            <MovieCard item={item} />
          </TouchableOpacity>
        )} 
      />
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#19244B", padding: 8 },
  title: { color: "white", fontSize: 20, marginBottom: 15, marginTop: 10 },
});