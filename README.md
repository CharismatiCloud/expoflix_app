# ExpoFlix 🎬

Uma aplicação móvel desenvolvida com React Native e Expo, focada na apresentação e listagem de filmes. Este projeto serve como uma excelente base de aprendizagem para navegação avançada, validação de formulários e renderização de listas dinâmicas.

## 🚀 Funcionalidades

* **Autenticação Simulada:** Ecrã de login com validação estrita de credenciais, formato de e-mail e tamanho mínimo de palavra-passe.
* **Navegação por Separadores (Tab Navigation):** Utilização do Expo Router para uma navegação fluida entre as áreas da aplicação.
* **Catálogo de Filmes:** Um *dashboard* que apresenta uma lista de filmes em cartaz, construído com `FlatList` e componentes visuais personalizados (Cards).
* **Perfil do Utilizador:** Ecrã de perfil contendo uma imagem de avatar local e a funcionalidade de terminar sessão (*logout*).
* **UI/UX Moderna:** Interface estilizada nativamente com foco num tema escuro elegante (Dark Mode).

## 🛠️ Tecnologias e Bibliotecas

* [React Native](https://reactnative.dev/)
* [Expo](https://expo.dev/) & [Expo Router](https://docs.expo.dev/router/introduction/)
* [TypeScript](https://www.typescriptlang.org/)
* `@expo/vector-icons` (Para a iconografia)
* `react-native-safe-area-context` (Para gestão segura das margens dos dispositivos)

## 📦 Como executar o projeto no seu computador

### Pré-requisitos
Certifique-se de que tem o [Node.js](https://nodejs.org/) instalado no seu computador. Para testar no telemóvel, instale a aplicação **Expo Go** (disponível para iOS e Android).

### Passos para a Instalação

1. Clone este repositório:
```
git clone [https://github.com/CharismatiCloud/expoflix_app.git](https://github.com/CharismatiCloud/expoflix_app.git)
```
2. Aceda ao diretório do projeto:
```
cd expoflix_app
```
Instale as dependências necessárias:
```
npm install
```
Inicie o servidor de desenvolvimento:
```
npx expo start
```
🔐 Credenciais de Acesso (Login)
Uma vez que a aplicação utiliza um sistema de validação de dados estáticos (Mock) para fins de demonstração, deverá utilizar as seguintes credenciais para aceder ao catálogo de filmes:

E-mail: boanoite.punpun@gmail.com

Senha: Boanoite Punpun

📂 Estrutura do Projeto
A arquitetura do projeto está organizada da seguinte forma:

src/app/ - Gestão de rotas e ecrãs principais (Login, Dashboard, Perfil).

src/components/ - Componentes visuais reutilizáveis (como o InputComponent e o MovieCard).

src/services/ - Ficheiros de dados estáticos (Mock dos filmes).

src/types/ - Tipagens globais do TypeScript.

assets/ - Ficheiros estáticos como imagens locais e ícones.
