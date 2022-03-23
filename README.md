#  Redux
Esse é um projeto bonus do bootcamp Ignite da Rockseat para ensinar como o Redux
é utilizado em aplicações React.

É uma aplicação simples para simular as ações de um carrinho de compras em um ‘e-commerce’.

## Como inicializar o projeto
Foi utilizado o [json-server](https://www.npmjs.com/package/json-server) para simular o banco de dados a partir do arquivo [server.json](https://github.com/FelipeSD/basic_redux/blob/master/server.json)

Para inicializar o servidor, basta executar o comando: 
```
yarn server
```
Em seguida, em outro terminal, execute o comando:
```
yarn start
```

## Arquitetura Flux
Para o consumo dos dados globais da aplicação armazenados em um estado do Redux,
é necessário indicar para o 'Provider' qual será o 'store' que será utilizado.

[Provider foi inicializado aqui.](https://github.com/FelipeSD/basic_redux/blob/c690fb24d716656bc06368c4fb901f4e7862d0f7/src/App.tsx#L9)

### 1. Store
O 'store' é um objeto que armazena todo estado da aplicação.
[O store foi criado aqui.](https://github.com/FelipeSD/basic_redux/blob/c690fb24d716656bc06368c4fb901f4e7862d0f7/src/store/index.ts#L18)

A única forma de alterar o estado é disparando uma 'ação'.

### 2. Actions
Para manter boas práticas e deixar a aplicação escalável, foi criado os módulos e implementado as 'actions', 'reducers' e 'sagas' do módulo de carrinho.

Para alterar os dados do estado, é necessário dar um *_dispatch_* na action (adicionar ou remover um produto do carrinho, por exemplo). 
As actions contém as informações do *_payload_*, que seria a nova informação do estado e o *_type_*, que é o nome da ação.

### 3. Reducers
- No reducer é onde acontece a lógica de alteração do estado. 
- Nele é definido o que acontece quando uma ação é disparada.
- Recebe como parâmetro o estado anterior e a action disparada (que contém o payload e o type).

## Redux Saga
- É um módulo que permite que a aplicação seja executada em paralelo, como um middleware.
- Na aplicação ele foi utilizado para fazer a checagem de estoque do produto adicionado ao carrinho.




