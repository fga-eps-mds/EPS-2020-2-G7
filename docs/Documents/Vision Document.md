<h1 align="center">
	Universidade de Brasília<br>
	Métodos de Desenvolvimento de Software<br>
	2020/2 - Grupo 7
</h1>

# Documento de Visão

## Histórico de Revisão

| Data  | Versão | Descrição                                                           | Autor     |
| ----- | ------ | ------------------------------------------------------------------- | --------- |
| 24/02 | 0.1    | Abertura do Documento de Visão, criação dos tópicos e do sumário    | Jefferson |
| 27/02 | 0.2    | Adicionados Oportunidade de Negocio e Descricao do problema         | Gabriel   |
| 01/03 | 0.3    | Adicionado o Propósito                                              | Nicolas   |
| 01/03 | 0.4    | Adicionada Cliente e descrição do usuário (seção 3)                 | Eric      |
| 12/03 | 0.5    | Adicionado as funcionalidades (seção 5) e atualização dos registros | Jefferson |
| 13/03 | 0.6    | Adicionadas e editadas seções 1.1, 1.2, 1.3, 4.1 e 4.2              | Eric      |

<!-- Adicionar novos históricos -->

## Sumário

1. [Introdução](#1)<br>
   1.1 [Propósito](#1_1)<br>
   1.2 [Escopo](#1_2)<br>
   1.3 [Referências](#1_3)<br>
   1.4 [Visão geral](#1_4)<br>
2. [Posicionamento](#2)<br>
   2.1 [Oportunidade de negócio](#2_1)<br>
   2.2 [Descrição do problema](#2_2)<br>
   2.3 [Posicionamento do produto](#2_3)<br>
3. [Cliente e descrição do usuário](#3)<br>
   3.1 [Mercado e público alvo](#3_1)<br>
   3.2 [Perfis de usuários](#3_2)<br>
   3.3 [Ambientes dos usuários](#3_3)<br>
4. [Visão geral do produto](#4)<br>
   4.1 [Perspectiva do produto](#4_1)<br>
   4.2 [Tecnologias](#4_2)<br>
   &nbsp;&nbsp;&nbsp;&nbsp;4.2.1 [Front-End](#4_2_1)<br>
   &nbsp;&nbsp;&nbsp;&nbsp;4.2.2 [Back-End](#4_2_2)<br>
5. [Funcionalidades do produto](#5)<br>
   5.1 [Funcionalidades do usuário pescador](#5_1)<br>
   5.2 [Funcionalidades do usuário pesquisador](#5_2)<br>


<hr>

## 1. <a div id='1'>Introdução</a>

### 1.1 <a div id='1_1'>Propósito</a>

<p align="justify">O Plano de ação para a conservação das espécies ameaçadas de extinção do Território Cerrado Tocantins, surgiu no âmbito do projeto Pró-Espécies: Todos contra a extinção, com o principal objetivo de reduzir as extinções de espécies. Nesse contexto, e levando em consideração sobretudo o Território Cerrado Tocantins, o projeto tem como principais finalidades:</p>
  
1. Fornecer uma plataforma que possa ser utilizada com facilidade por pescadores que tenham interesse em registrar espécies de peixe pescadas na base de dados
2. Fornecer um mapeamento de espécies de peixes de água doce, por meio da base de dados do aplicativo
3. Fornecer um meio para que pesquisadores possam extrair os dados acerca do mapeamento, afim de fomentar a pesquisa científica, e o projeto de preservação das espécies ameaçadas de extinção

### 1.2 <a div id='1_2'>Escopo</a>

<p align="justify">A abrangência desejada para o aplicativo, é garantir a utilização do aplicativo para pescadores principalmente nos locais em que praticam a pesca com o objetivo de registrar espécies, e fornecimento dos dados para pesquisadores.</p>

### 1.3 <a div id='1_3'>Referências</a>

(Listagem das referências que são utilizadas neste documento de visão.)

<p align="left">Plano de Ação Territorial para Conservação de Espécies Ameaçadas de Extinção do Território Cerrado Tocantins, Disponível em: https://www.exemplo.com. Acesso em: 13/03/2021;</p>

### 1.4 <a div id='1_4'>Visão geral</a>

<p align="justify">Este documento é dividido em 6 tópicos descrevendo os detalhes sobre o software
relatado. Sendo dividido em:</p>

- **Introdução:** no qual é introduzido os detalhes gerais sobre a visão do projeto;
- **Posicionamento:** descreve o problema ao qual o projeto está endereçado e a oportunidade de negócio;
- **Cliente e descrição do usuário:** descreve o perfil das partes interessadas no projeto e segmento do mercado no qual busca atuar;
- **Visão geral do produto:** descreve as tecnologias utilizadas no produto e a sua perspectiva;
- **Funcionalidades do produto:** fornece uma visualização detalhada das funcionalidades do produto;


<hr>

## 2. <a div id='2'>Posicionamento</a>

### 2.1 <a div id='2_1'>Oportunidade de negócio</a>

<p align="justify">O Território Cerrado Tocantins foi considerado prioritário para a conservação de espécies ameaçadas, compreendendo 22 municípios. O produto tem como objetivo mapear espécies da fauna de Tocantins ameaçadas em extinção e, através de um aplicativo remoto, ajudar o Governo a registrar a localidade dessas espécies. </p>

### 2.2 <a div id='2_2'>Descrição do problema</a>

| **Questão**               | **Informações do Produto**                                                   |
| :------------------------ | :--------------------------------------------------------------------------- |
| **O Problema é**          | Aumento das atividades agropecuárias e de mineração                          |
| **Que afeta**             | Fauna e flora                                                                |
| **Cujo impacto é**        | Espécies ameaçadas de extinção                                               |
| **Uma boa solução seria** | Registrar, mapear e incentivar o registro de espécies na região de tocantins |

### 2.3 <a div id='2_3'>Posicionamento do produto</a>

<p align="justify">A aplicação, quando desenvolvida, se posicionará no mercado como um aplicativo mobile que pode ser usado facilmente em regiões remotas. Isso proporcionará que os pescadores realizem seus registros de forma eficiente e rápida, possibilitando que seus dados sejam usados como auxílio no controle de peixes.</p>

<hr>

## 3. <a div id='3'>Cliente e descrição do usuário</a>

<p align="justify">Com a finalidade de construir a base de dados que mapeia as espécies de peixes de água doce no Território Cerrado Tocantins, é necessária a interação dos usuários do aplicativo, que consistem principalmente em praticantes da pesca na região, e pesquisadores interessados nas informações geradas.</p>

### 3.1 <a div id='3_1'>Mercado e público alvo</a>

<p align="justify">O aplicativo terá como nicho de mercado, a área da pesca, e como público alvo, principalmente pescadores de peixes de água doce e pesquisadores, de forma a gerar um mapeamento de espécies, de onde possam ser retiradas informações acerca da distribuição de determinadas espécies em determinada área.</p>

### 3.2 <a div id='3_2'>Perfis de usuários</a>

| **Nome**| **Perfil**| **Utilização**|
|:-|:-|:-|
| Pescadores | Pescadores buscando encontrar e/ou registrar especies de peixes encontradas, e o local de pesca | Utilizar o aplicativo para registrar suas experiências de pesca, de modo a suprir a base de dados com informações sobre espécies encontradas e a localização | <!-- Adicionar novos clientes --> |
| Pesquisadores | Profissionais envolvidos com a pesquisa acerca de espécies ameaçadas de extinção, ou cuja pesquisa se beneficie do mapeamento de espécies gerado | Consultar/obter as informações extraídas da base de dados do aplicativo, de forma a enriquecer a pesquisa científica e a conservação de espécies ameaçadas de extinção |
| Usuários interessados | Possíveis pessoas interessadas em utilizar o aplicativo para registrar espécies de peixes encontradas em experiências próprias | Registrar no aplicativo descobertas pessoais de espécies de peixe, fomentando a base de dados e o mapeamento das espécies |                                              |

### 3.3 <a div id='3_3'>Ambientes dos usuários</a>

<p align="justify">Tendo em vista que o principal objetivo do aplicativo é contruir um mapeamento de espécies de peixes da região, o ambiente de atuação do aplicativo consiste principalmente em locais de pesca de peixes de água doce. Isso se deve também ao público alvo, pescadores com esse perfil de pesca, que atuam em locais de água doce.</p>

<hr>

## 4. <a div id='4'>Visão geral do produto</a>

### 4.1 <a div id='4_1'>Perspectiva do produto</a>

<p align="justify">Garantir uma boa usabilidade do aplicativo, com o intuito de que pescadores possam facilmente realizar os registros dos peixes, e que pesquisadores possam extrair os dados acerca do mapeamento de espécies.</p>


### 4.2 <a div id='4_2'>Tecnologias</a>

#### 4.2.1 <a div id='4_2_1'>Front-End</a>

<p align="justify">

1. React Native
    - Framework baseado em React, focado na construção de interfaces de usuário 
2. CSS
    - Linguagem para aplicação de estilos à documentos HTML
3. HTML
    - Linguagem de marcação amplamente utilizada na construção de páginas web
</p>

#### 4.2.2 <a div id='4_2_2'>Back-End</a>

<p align="justify">
1. JavaScript
    - Linguagem de programação interpretada, utilizada com a finalidade de garantir interatividade nos sistemas
2. SQL
    - Linguagem de Consulta Estruturada, linguagem de pesquisa declarativa padrão para banco de dados relacional
3. PostgreeSQL 
    - Sistema gerenciador de banco de dados objeto relacional, de código aberto

</p>

<hr>

## 5. <a div id='5'>Funcionalidades do produto</a>

O sistema dispõe das seguintes funcionalidades:<br />

### 5.1 <a div id='5_1'>Funcionalidades do usuário pescador</a>

<p align="justify">
O usuário pescador, após realizar seu cadastro e login, terá acesso as seguintes funcionalidades:

1. Adicionar fotos e localização dos peixes
2. Visualizar uma lista de peixes comuns
3. Receber notificações push
4. Receber dados de uma base real
5. Visualizar um mapa com a localização dos peixes comuns
6. Alterar dados nas configurações
7. Visualizar notícias atualizadas
8. Visualizar o ranking atualizado
9. Adicionar o tamanho, de forma opcional, ao registro dos peixes
10. Usar comandos de voz dentro do app
11. Fazer check-in da própria localização no mapa

</p>

### 5.2 <a div id='5_2'>Funcionalidades do usuário pesquisador</a>

<p align="justify">
O usuário pesquisador, após realizar seu cadastro e login, terá acesso as funcionalidades do usuário pescador e das seguintes funcionalidades extras:

1. Visualizar uma lista de peixes comuns e raros
2. Gerar um relatório completo dos peixes
3. Visualizar um mapa com a localização dos peixes comuns e raros
4. Adicionar características extras aos registros dos peixes

</p>

<hr>

