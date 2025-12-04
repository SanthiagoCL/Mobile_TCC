# 📱 Mobile TCC

Este repositório contém o código-fonte do aplicativo desenvolvido como Trabalho de Conclusão de Curso (TCC). O projeto foi construído sobre uma arquitetura modular utilizando **React Native**, **Expo** e **TypeScript**, com foco na separação de responsabilidades e escalabilidade.

![Badge Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![Badge React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Badge TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## 📖 Sobre o Projeto

O diferencial técnico deste projeto reside na sua **organização de código**. A aplicação não é monolítica; ela utiliza o **Expo Router** para roteamento baseado em arquivos e separa estritamente a interface (UI), a lógica de estado (Hooks) e as configurações (Constants).

## 🏗 Arquitetura e Estrutura

O projeto segue o princípio de **Separação de Responsabilidades (SoC)**. Abaixo está o detalhamento de como "tudo está separado" para facilitar a manutenção:


Mobile_TCC/
├── 📂 app/              # Camada de Roteamento e Telas (Screens)
│   ├── (tabs)/          # Layouts de navegação em abas
│   ├── _layout.tsx      # Configuração global de navegação
│   └── index.tsx        # Ponto de entrada
│
├── 📂 components/       # Camada de Apresentação (UI Dummy Components)
│   # Componentes puros e reutilizáveis, sem lógica de negócio complexa.
│
├── 📂 hooks/            # Camada de Lógica (Custom Hooks)
│   # Toda a lógica de estado, efeitos e chamadas de API ficam isoladas aqui.
│
├── 📂 constants/        # Camada de Configuração
│   # Cores, temas, tokens de API e strings estáticas.
│
├── 📂 assets/           # Recursos Estáticos (Imagens e Fontes)
│
└── 📂 scripts/          # Automação e utilitários de desenvolvimento

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

-   **[React Native](https://reactnative.dev/)**
-   **[Expo](https://expo.dev/)**
-   **[TypeScript](https://www.typescriptlang.org/)**
-   **[Expo Router](https://docs.expo.dev/router/introduction/)** (Gerenciamento de rotas)

👨‍💻 Autor
Desenvolvido por SanthiagoCL.
