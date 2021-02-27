## Como contribuir para o Grupo 7
Ao participar deste projeto, você concorda em cumprir nosso [Código de conduta](https://github.com/fga-eps-mds/EPS-2020-2-G7/blob/main/CODE_OF_CONDUCT.md).
### Você encontrou um bug? 

*  Certifique-se de que o bug já não foi relatado pesquisando no GitHub em [Issues](https://github.com/fga-eps-mds/EPS-2020-2-G7/issues).

* Se você não conseguir encontrar um problema em aberto para resolver o problema, [abra um novo](https://github.com/fga-eps-mds/EPS-2020-2-G7/issues/new/choose) e adicione o rótulo do bug. Certifique-se de incluir um ** título e uma descrição clara **, o máximo de informações relevantes possível e um ** exemplo de código ** ou um ** caso de teste executável ** demonstrando o comportamento esperado que não está ocorrendo.

### Você pretende adicionar um novo recurso ou alterar um existente?

* ** Certifique-se de que não haja nenhum problema com a mesma finalidade ** pesquisando no GitHub em [Issues](https://github.com/fga-eps-mds/EPS-2020-2-G7/issues).
* Abra um novo problema ** descrevendo o que você deseja fazer ** e adicione os rótulos que fazem sentido com sua proposta.
* Após a validação do mantenedor, você provavelmente terá o endosso para trabalhar em sua ideia.

### Você tem dúvidas sobre o código-fonte?

* Você pode abrir um problema com o rótulo **pergunta** e descrever suas perguntas.

### Problemas

* Todos os problemas devem ter um **título descritivo** e um ** comentário com uma descrição completa de sua ideia **
* Todos os problemas devem ter **critérios de aceitação**
* Todos os problemas devem ser rotulados com pelo menos ** um rótulo **, se você acha que nenhum rótulo descreve bem o que você propõe, ** sinta-se à vontade ** para criar um novo rótulo.

### Solicitações pull

* Todas as solicitações pull devem ser **atribuídas a um problema**.
* O título do Pull Request deve ser o mais **descritivo possível** e deve ter ** um comentário ** com a palavra "Resolvido" seguido do ** número do problema **.
* Um comentário **descrevendo o que você fez** também deve ser feito.
 
 
 # Política de Branch

Para garantir um fluxo de trabalho contínuo e de forma padronizada possibilitando o rastreamento das funcionalidades desenvolvidas e facilitando a implementação de _pipelines_ de integração(CI) e entrega(CD) contínua, será utilizada a estratégia de Git Flow.

Os conceitos chave para implementação da estratégia de Git Flow:

- master: contém o nosso código de produção, todo o código que estamos desenvolvendo, em algum momento será “juntado” com essa branch
- develop: contém o código do nosso próximo deploy, isso significa que conforme as features vão sendo finalizadas elas vão sendo juntadas nessa branch para posteriormente passarem por mais uma etapa antes de ser juntada com a master
- feature/\*: são branches para o desenvolvimento de uma funcionalidade específica, por convenção elas tem o nome iniciado por feature/, por exemplo: feature/cadastro-usuarios. - - Importante ressaltar que essas branches são criadas sempre à partir da branch develop
- hotfix/\*: são branches responsáveis pela realização de alguma correção crítica encontrada em produção e por isso são criadas à partir da master. Importante ressaltar que essa branch deve ser juntada tanto com a master quanto com a develop
- release/\*: tem uma confiança maior que a branch develop e que se encontra em nível de preparação para ser juntada com a master e com a develop (caso alguma coisa tenha sido modificada na branch em questão)

Exemplo do fluxo de branches:

![](https://i.imgur.com/NRbk35f.png)

# Nomenclatura

Toda branch criada deve estar relacionada a uma funcionalidade ou correção, logo necessariamente deverá estar atrelada a uma Issue. O nome da branch deve ser em INGLÊS e deve seguir o padrão:

- feature/IssueID-USX#nome-da-issue: para Historias de Usuário;

- feature/IssueID-descrição-curta: para funcionalidades que não são Historias de Usuário.

- hotfix/IssueID-descrição-curta: para correções;



# Política de Commits

### _Commits_ atômicos

Sempre divida seu trabalho em _commits_ pequenos e significativos de forma que cada _commit_ implemente somente uma funcionalidade.
Comece sua mensagem de confirmação com o tipo. Escolha um dos seguintes:
`feat`, `fix`, `docs`, `style`, `refactor`, `test`,  `revert`, `add`, `remove`, `bump`, `update`, `release`


fix: um commit do tipo fix corrige um bug em sua base de código (isso se correlaciona com PATCH no controle de versão semântico).
feat: um commit do tipo feat introduz um novo recurso para a base de código (isso se correlaciona com MINOR no versionamento semântico).


### Regra 50/72

As mensagens devem ser escritas em 50 caracteres, caso seja necessário escrever uma mensagem maior, escreva um resumo em 50 caracteres, adicione um linha em branco, e descreva melhor o _commit_ em quantas linhas desejar, porém todas as linhas devem ter no máximo 72 caracteres. Caso não consiga descrever o seu _commit_ com essa regra, o seu commit provavelmente não é atômico.

## Commit

Referenciar as issues na ultima linha do commit (Issue #123);

```
fix: corrigir pequenos erros de digitação no código

Issue #133

```
### Assunto

- Máximo de 50 caracteres
- Tipo de escopo devem estar em letras minúsculas







# Referências

- A successful Git branching model. Vincent Driessen. Disponível em: <https://nvie.com/posts/a-successful-git-branching-model/>. Acessado em: 28 de agosto de 2019.

- FeatureBranch. Martin Fowler. Disponível em: <https://martinfowler.com/bliki/FeatureBranch.html>. Acessado em: 28 de agosto 2019.

- Git Feature Branch Workflow. Atlassian. Disponível em: <https://br.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow>. Acessado em: 28 de agosto de 2019.
