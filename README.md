# Borderless Community Hackaton - CV Manager

Uma aplicação web criada para o hackaton da Borderless Community que gerencia as submissões de currículo. Nesta aplicação, o usuário pode:

- Registrar em quais empresas se candidatou
- Informar o nome da empresa, descrição da vaga, status atual da candidatura, link para a vaga e feedback recebido
- Utilizar uma página com um template pré-pronto de currículo com um editor de texto para alterar as informações e exportar o currículo para PDF.

---

## Tecnologias Utilizadas

- **Frontend**: TypeScript, React, Vite, Tailwind CSS, shadcn/ui, Zod  
- **Backend**: TypeScript, Node, Fastify, PostgreSQL, Docker  
- **Testes**: Vitest

---

## Funcionalidades

- **Gerenciador de Submissões de Currículo**  
  Permite ao usuário registrar e acompanhar as candidaturas às empresas. Cada registro inclui:
  - Nome da empresa
  - Descrição da vaga
  - Status da candidatura (applied, interviewing, offered, rejected, accepted)
  - Link para a vaga
  - Feedback recebido

- **Editor de Currículo e Exportação para PDF**  
  Uma página dedicada onde o usuário pode:
  - Editar um template pré-pronto de currículo utilizando um editor de texto (React Quill)
  - Personalizar com suas informações
  - Exportar o currículo para PDF

---

## Como rodar o projeto

Clone o repositório

``` bash
git clone https://github.com/ProgramadoresSemPatria/Time-5.git
```

Instale as dependências dentro da pasta de front e da pasta de back

``` bash
cd front 
npm install
cd ..
cd back
npm install
```

Suba um container docker para rodar o postgresql a partir do docke compose

``` bash
cd back
docker compose up
```

Rode as migrations do prisma

``` bash
npx prisma migrate dev
```

Inicie o servidor do backend e o vite

``` dentro da pasta front e back
npm run dev
```

## Desenvolvido por

- Thales Oliveira, Gustavo Bañares e Luam Ramlow
