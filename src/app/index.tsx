import { InputComponent } from "@/components/inputComponent";
import { useRouter, type Href } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isError, setIsError] = useState<string | false>(false);
  const router = useRouter();

  const handlerLogin = () => {
    setIsError(false);

    if (!email.trim() || !password.trim()) {
      return setIsError("Os campos não podem ficar vazios.");
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return setIsError("Email inválido.");
    }
    if (password.length < 6) {
      return setIsError("A senha deve ter no mínimo 6 caracteres.");
    }
    if (email !== "boanoite.punpun@gmail.com" || password !== "BoanoitePunpun") {
      return setIsError("Usuário ou senha incorretos.");
    }

    router.replace("/(tabs)/dashboard" as Href);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ExpoFlix</Text>
      
      <InputComponent label="Email" placeholder="Digite o Email" type="email-address" value={email} setValue={setEmail} />
      <InputComponent label="Senha" placeholder="Digite a Senha" type="default" value={password} setValue={setPassword} />

      {isError && <Text style={styles.errorMessage}>{isError}</Text>}

      <TouchableOpacity style={styles.button} onPress={handlerLogin}>
        <Text style={styles.buttonTitle}>Entrar</Text>
      </TouchableOpacity>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#19244B" },
  title: { color: "white", fontSize: 32, fontWeight: "600", marginBottom: 24 },
  errorMessage: { alignSelf: "center", color: "#F5482F", marginTop: 10 },
  button: { backgroundColor: "#86A16C", width: 300, height: 40, marginTop: 30, borderRadius: 8, justifyContent: "center", alignItems: "center" },
  buttonTitle: { color: "#fff", fontWeight: "400", fontSize: 16 },
});