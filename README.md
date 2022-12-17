# alura-web
A web project in order to learn React with Next.js

# Setup
npm install --save next react react-dom

# Github Logo
https://github.com/fapinheiro.png

# Banner
https://unsplash.com

# Aprendizados


## useState 
para armazenamento de estado de variaveis 

### downsides
- propagação das props para elementos filhos
- chamar o setState fora de um onClick ou onChange, dentro do body do component, por exemplo, gera efeito looping infinito

## _app.js 
- arquivo do Next.js para definições globais
- onde ficam os providers

## ThemeProvider 
para criação de temas globais.

## Wrapper 
a ideia é encapsulamento e carregamento antecipado de modo que os componentes filhos recebam o valor já setado

## useContext 
para variaveis de estado global similar ao Redux

## hooks 
useState é hook para gerenciamento de estado. cuidado pois cada atualizaçao prova rendering no componente

useForm exemplo de hook personalizado, no caso do formulario evita de ter que utilizar o useState para todos os campos. imagina um formulario com 10 campos? neste caso criar um hook ajuda

utilizar o useRef ao inves do useState quando for formulario simples sem ações de callback assincrono exemplo chamada ao um backend e depois ter que popular campos na tela

## next.js 
na parte de rotas tem toda uma estrutura baseada em conveções para o roteamento, diferentemente do react-router-dom,
- https://nextjs.org/docs/api-reference/next/router
- https://nextjs.org/docs/routing/introduction

## useEffect
para gerenciamento de 'efeitos colatereis'. Um efeito colateral é a reação a uma ação nao gerenciada. Ações gerenciadas são: onClick, onChange, etc... Ações não gerenciadas: API call