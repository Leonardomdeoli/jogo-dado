# Projeto E-Commerc HackaFpu
![extreme go horse](http://helio.loureiro.eng.br/images/stories/2013/extreme-go-horse-xgh.png)

Este projeto está sendo desenvolvido utilizando metodologia ágio
[extreme go horse.](http://www.gohorseprocess.com.br/extreme-go-horse-(xgh) "Clique e acesse agora!" )

##### Como baixar o projeto.
git clone https://gitlab.com/leonardo.rsil/HackaFpu.git

##### Atualizar seu repositório local
git pull

##### Verificar alterações no repositório
git status

##### Adicionar mudanças ao Index para commit
git add *

##### Fazer um commit
 git comm it -m "comentários das alterações"

##### Criar um novo branch chamado "funcionalidade-x"
git checkout -b funcionalidade-x

##### Apagar a branch.
git branch -d funcionalidade-x

##### Enviando o branch para seu repositório remoto
git push origin funcionalidade_x

##### Enviando a master para seu repositório remoto
git push origin master

##### Retorne para o master usando
git checkout master

##### Retorne para a brach funcionalidade_x
git checkout funcionalidade_x

##### Fazer merge de um outro branch ao seu branch ativo (ex. master)
git merge funcionalidade_x

##### Verd diferença entre branch
git diff branch_origem branch_destino

##### Remover todas as alterações e commits locais, recupere o histórico mais recente do servidor
git fetch origin
git reset --hard origin/master
