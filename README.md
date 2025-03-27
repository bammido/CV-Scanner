# CV-Scanner

<div align="center">

<img src="https://raw.githubusercontent.com/bammido/cv-scanner/main/.gitassets/CV-Scanner-logo.png">

<div>
    <img src="https://img.shields.io/badge/nestjs-E0234E?style=for-the-badge&logo=nestjs&logoColor=white">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
    <img src="https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white">
    <img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white">
    <img src="https://img.shields.io/badge/Google%20Gemini-8E75B2?style=for-the-badge&logo=googlegemini&logoColor=white">
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white">
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">
</div>
</div>

CV-Scanner é uma aplicação inovadora que analisa currículos e fornece sugestões de melhorias com base no modelo ATS (Applicant Tracking System). Utilizando inteligência artificial, a plataforma avalia a estrutura, palavras-chave e formatação do documento para garantir maior compatibilidade com sistemas automatizados de recrutamento. Com um feedback detalhado, o CV-Scanner ajuda candidatos a otimizar seus currículos e aumentar suas chances de serem selecionados para entrevistas.

## ⚙️ Como rodar?

### Pré-requisitos:

* Ter o docker e o docker-compose instalado e configurado
* Chave api do gemini da google

### Passos:

1. criar .env na pasta CV-Scanner-API:

``` GEMINI_API_KEY = [sua chave gemini] ```

2. na raiz do projeto rode o comando:

```  docker compose up ```

O projeto deve estar disponível em thhp://localhost:80

## 🛠️ Features

✅ Envio de currículo para análise com IA  
✅ Feedbacks sobre pontos de melhoria  
✅ Notas para cada um dos critérios e uma nota geral

## 💻 Tecnologias

* Nest
* React
* Gemini
* Docker

## Links Úteis

* [docker](https://www.docker.com/)
* [gemini api](https://ai.google.dev/gemini-api/docs/api-key?hl=pt-br)