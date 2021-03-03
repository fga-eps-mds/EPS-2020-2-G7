<h1 align="center">
	Universidade de Brasília<br>
	Métodos de Desenvolvimento de Software<br>
	2020/2 - Grupo 7
</h1>

# Documento de Arquitetura de Software

## Histórico de Revisão

Data|Versão|Descrição|Autor
-|-|-|-
27/02|0.1|Abertura do Documento de Arquitetura|Jefferson
03/03|0.2|Adicionado Finalidade(1.1)|Jefferson| <!-- Adicionar novos históricos -->

## Sumário
1. [Introdução](#1-introdução)<br>
    1.1 [Finalidade](#11-finalidade)<br>
    1.2 [Escopo](#12-escopo)<br>
    1.3 [Definições, Acrônimos e Abreviações](#13-definições-acrônimos-e-abreviações)<br>
    1.4 [Referências](#14-referências)<br>
    1.5 [Visão Geral](#15-visão-geral)<br>
2. [Representação da Arquitetura](#2-representação-da-arquitetura)<br>
3. [Metas e Restrições de Arquitetura](#3-metas-e-restrições-de-arquitetura)<br>
4. [Visão de Casos de Uso](#4-visão-de-casos-de-uso)<br>
    4.1 [Realizações de Casos de Uso](#41-realizações-de-casos-de-uso)<br>
5. [Visão Lógica](#5-visão-lógica)<br>
    5.1 [Visão Geral](#51-visão-geral)<br>
    5.2 [Pacotes de Design Significativos do Ponto de Vista da Arquitetura](#52-pacotes-de-design-significativos-do-ponto-de-vista-da-arquitetura)<br>
6. [Visão de Processos](#6-visão-de-processos)<br>
7. [Visão de Implantação](#7-visão-de-implantação)<br>
8. [Visão de Implementação](#8-visão-de-implementação)<br>
    8.1 [Visão Geral](#81-visão-geral)<br>
    8.2 [Camadas](#82-camadas)<br>
9. [Visão de Dados (opcional)](#9-visão-de-dados-opcional)<br>
10. [Tamanho e Desempenho](#10-tamanho-e-desempenho)<br>
11. [Qualidade](#11-qualidade)<br>

<hr>

## 1. Introdução

### 1.1 Finalidade

<p align="justify">Este documento tem como objetivo apresentar as decisões arquiteturais tomadas em relação à aplicação e demonstrar detalhes do modelo de arquitetura de software utilizado.</p>

### 1.2 Escopo

*[Faça uma breve descrição da aplicação do Documento de Arquitetura de Software; o que é afetado ou influenciado por este documento.]*

### 1.3 Definições, Acrônimos e Abreviações

*[Esta subseção deve apresentar as definições de todos os termos, acrônimos e abreviações necessários para a correta interpretação do Documento de Arquitetura de Software. Essas informações podem ser fornecidas mediante referência ao Glossário do projeto.]*

### 1.4 Referências

*[Esta subseção deve apresentar uma lista completa de todos os documentos mencionados no Documento de Arquitetura de Software. Cada documento deve ser identificado por título, número de relatório (se aplicável), data e organização responsável pela publicação. Especifique as fontes das quais é possível obter referências. Essas informações podem ser fornecidas por um anexo ou outro documento.]*

### 1.5 Visão Geral

*[Esta subseção deve descrever o conteúdo restante do Documento de Arquitetura de Software e explicar como o Documento de Arquitetura de Software está organizado.]*

<hr>

## 2. Representação da Arquitetura

*[Esta seção descreve qual é a arquitetura de software do sistema atual e como ela é representada. Nas Visões de Casos de Uso, Lógica, do Processo, de Implantação e de Implementação, este documento enumera as visões necessárias e, para cada uma delas, explica os tipos de elementos do modelo que contém.]*

<hr>

## 3. Metas e Restrições de Arquitetura

*[Esta seção descreve os requisitos de software e os objetivos que têm um impacto significativo na arquitetura, como proteção, segurança, privacidade, uso de um produto desenvolvido internamente e adquirido pronto para ser usado, portabilidade, distribuição e reutilização. Ela também captura as restrições especiais que podem ser aplicáveis: estratégia de design e implementação, ferramentas de desenvolvimento, estrutura das equipes, cronograma, código-fonte legado e assim por diante.]*

<hr>

## 4. Visão de Casos de Uso

*[Esta seção lista os casos de uso ou cenários do modelo de casos de uso se eles representam uma funcionalidade central e significativa do sistema final ou se têm uma ampla cobertura de arquitetura, ou seja, se experimentam muitos elementos arquiteturais ou se enfatizam ou ilustram um determinado ponto frágil da arquitetura.]*

### 4.1 Realizações de Casos de Uso

*[Esta seção ilustra o funcionamento do software, apresentando algumas realizações (ou cenários) de casos de uso selecionadas e explica como os diversos elementos do modelo de design contribuem para a respectiva funcionalidade.]*

<hr>

## 5. Visão Lógica

*[Esta seção descreve as partes significativas do ponto de vista da arquitetura do modelo de design, como sua divisão em subsistemas e pacotes. Além disso, para cada pacote significativo, ela mostra sua divisão em classes e utilitários de classe. Apresente as classes significativas do ponto de vista da arquitetura e descreva suas responsabilidades, bem como alguns relacionamentos, operações e atributos de grande importância.]*

### 5.1 Visão Geral

[Esta subseção descreve toda a decomposição do modelo de design em termos de camadas e de hierarquia de pacotes.]

### 5.2 Pacotes de Design Significativos do Ponto de Vista da Arquitetura

*[Para cada pacote significativo, inclua uma subseção com o respectivo nome, uma breve descrição e um diagrama com todos os pacotes e classes significativos nele contidos.

Para cada classe significativa no pacote, inclua o respectivo nome, uma breve descrição e, opcionalmente, uma descrição de algumas de suas responsabilidades, operações e atributos mais importantes.]*

<hr>

## 6. Visão de Processos

*[Esta seção descreve a decomposição do sistema em processos leves (threads simples de controle) e processos pesados (agrupamentos de processos leves). Organize a seção em grupos de processos que se comunicam ou interagem. Descreva os modos principais de comunicação entre processos, como transmissão de mensagens e interrupções.]*

<hr>

## 7. Visão de Implantação

*[Esta seção descreve uma ou mais configurações da rede física (hardware) na qual o software é implantado e executado. Ela é uma visão do Modelo de Implantação. Para cada configuração, ela deve indicar no mínimo os nós físicos (computadores, CPUs) que executam o software e as respectivas interconexões (barramento, LAN, ponto a ponto e assim por diante.) Inclua também um mapeamento dos processos da Visão de Processos nos nós físicos.]*

<hr>

## 8. Visão de Implementação

*[Esta seção descreve a estrutura geral do modelo de implementação, a divisão do software em camadas e subsistemas no modelo de implementação e todos os componentes significativos do ponto de vista da arquitetura.]*

### 8.1 Visão Geral

*[Esta subseção nomeia e define as diversas camadas e o seu conteúdo, as regras que determinam a inclusão em uma camada específica e as fronteiras entre as camadas. Inclua um diagrama de componentes que mostre os relacionamentos entre as camadas.]*

### 8.2 Camadas

*[Para cada camada, inclua uma subseção com o respectivo nome, uma lista dos subsistemas localizados na camada e um diagrama de componentes.]*

<hr>

## 9. Visão de Dados (opcional)

*[Uma descrição da perspectiva de armazenamento de dados persistentes do sistema. Esta seção será opcional se os dados persistentes forem poucos ou inexistentes ou se a conversão entre o Modelo de Design e o Modelo de Dados for trivial.]*

<hr>

## 10. Tamanho e Desempenho

*[Uma descrição das principais características de dimensionamento do software que têm um impacto na arquitetura, bem como as restrições do desempenho desejado.]*

<hr>

## 11. Qualidade

*[Uma descrição de como a arquitetura do software contribui para todos os recursos (exceto a funcionalidade) do sistema: extensibilidade, confiabilidade, portabilidade e assim por diante. Se essas características tiverem significado especial, como, por exemplo, implicações de proteção, segurança ou privacidade, elas devem ser claramente delineadas.]*