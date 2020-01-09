# BEM

- Los bloques (block) son la única raíz del componente para los elementos individuales que pueden ser replicados y están solos.
>  block

- Los elementos (elements) son siempre una parte componente del bloque.
>  block__element-name

- Los modificadores (modifiers) Una variante o extensión que modifican ligeramente la apariencia de un bloque o elemento.
>  --modifier


´´´´´´´
.block{
    &__element-name{
        &--modifier-name{
        }
    }
}
´´´´´´´


# Sistema ITCSS

@link:
- https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/
- https://csswizardry.com/
- https://specificity.keegan.st/

----- ITCSS - Estructura de carpetas y archivos

## Settings 
– Variables y métodos de preprocesadores

## Tools 
- Mixins y funciones

## Generic 
– Resets de CSS que podrían incluir el reset de Eric Meyer, Normalize.css, o tu propio bloque de código

## Elements 
- Selectores de elementos HTML individuales sin clases

## Objects 
- Clases para la estructura de la página, normalmente siguiendo la metodología OOCSS

## Components 
- Clases estéticas para dar estilo a cualquier o todos los elementos de una página

## Trumps 
- Estilos más específicos que permitan neutralizar cualquier otra cosa del triángulo


# Settings
# Tools
# Generic
# Tags
# Objects
# Componets
# Utilities


----- ITCSS - Pseudoclases y pseudoelementos

´´´´´´´
.block{
    &__element-name{
        &:hover{
        }
    }
    @media (max-width:320px){

    }
}
´´´´´´´



# BEM + IT = Nomenclatura BEMIT

