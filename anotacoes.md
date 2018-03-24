Criar novo projeto 
ng new primeiro-projeto

Criar novo componente
ng g c meu-primeiro2

Criar modulos de funcionalidades
ng g m nome-modulo

Criar componente dentro de modulos
ng g c modulo/nome-componente

Criar serviço
ng g s cursos/cursos

Servir aplicação
ng serve --open

Compilar (transpilar) arquivo TS
tsc nome-arquivo.ts

interpolação
live reload
ecmascript 2015 (utilizado pelo typescript)
Visual Studio Code plugin autoimport 

component
    selector: nome do componente
    template: html do template. Pode ser arquivo ou literal (string com o código html, template inline)
    
Componente deve ser exportado para ser importado.
export class

Adicionar componente, serviços etc... no módulo
Importar componente, serviços etc...

Site de novidades do ES 2015
es6-features.org

Transpiladores para transformar código ecmascript em javascript puro
Typescript compiler
Babel

Estrutura de modulo raiz

Importacoes padroes
Two way databind (FormsModule)
Fazer requisições ajax (HttpModule)

Importacoes de componentes e servicos

Anotação
    Metadados
        Declaração
        Importação
        Providers (Servicos disponiveis para componentes de declarados)
        Bootstrap (Componente que deve ser instanciado no statup da aplicação. Componente container. Componente principal)
        Exports (Componentes a serem importados em outros modulos)
        
Templates
    Pode ser usado um arquivo html templateUrl, ou inline (recomendado até três linhas) delimitado por crase (`).
    
Injeção de Dependência

Utilizar o decorator @Injectable() na definição da classe.
Quando for uitlizar a dependência deve ser declarado no contrutor com um modificar para não ter que utilizar o this.
Deve ser informado como provider na definição do modulo utilizado.

Interpolação  ({{valor}})
Saída do valor da propriedade no template

Property Binding

Exibir valor de propriedade no template
[propriedade]="valor"

Escutar eventos do template
(evento)="handler"

Two way databinding
[(ngModel)]="propriedade"

Style Guide: Documento com boas práticas

Lorenpixel: Site com imagens aleatórias para serem utilizados em site de exemplo
Documentação de eventos para HTML: https://developer.mozilla.org/en-US/docs/Web/Events

Class e Style Binding