import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Perfil() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.perfil}>Perfil</Text>
      
      <View style={styles.perfilContainer}>
        <Image
          style={styles.avatar}
          resizeMode="cover"
          // Aqui estamos puxando a imagem local da pasta assets
          source={require("../../../assets/punpun.png")} 
        />
        
        <Text style={styles.text}>Nome: Punpun</Text>
        <Text style={styles.text}>Email: boanoite.punpun@gmail.com</Text>
        
        <TouchableOpacity style={styles.button} onPress={() => router.replace("/")}>
          <Text style={styles.btnTitle}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#19244B",
    alignItems: "center",
    paddingTop: 60, // Dá um espaço no topo da tela
  },
  perfil: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 40,
  },
  perfilContainer: {
    alignItems: "center",
    width: "100%",
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70, // Metade da largura/altura deixa a imagem perfeitamente redonda!
    borderWidth: 3,
    borderColor: "white",
    backgroundColor: "white", // Fundo branco útil caso a imagem seja transparente (PNG)
    marginBottom: 20,
  },
  text: {
    color: "white",
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "500",
  },
  button: {
    backgroundColor: "white",
    width: 250,
    height: 45,
    marginTop: 40,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTitle: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
});