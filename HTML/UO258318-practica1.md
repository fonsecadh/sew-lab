---
title: "SEW - Informe sobre la práctica de HTML5"
author: "Hugo Fonseca Díaz (UO258318)"
email: "UO258318@uniovi.es"
lang: "es-ES"
---
# Estructura de los archivos que componen el sitio web

El sitio web está compuesto por los siguientes archivos:

## Documentos HTML5

Hay un total de 9 documentos HTML5 que componen el sitio web. Aquí se enumeran:

- **index.html**: Es el documento principal del sitio. Muestra una introducción a la serie *Los Soprano* y una serie de enlaces sobre la misma a otros sitios web.
- **apertura.html**: habla sobre el *opening* o secuencia de apertura de la serie, mostrándolo además en forma de vídeo.
- **argumento.html**: explica la trama de *Los Soprano*.
- **concepcion.html**: cuenta la historia de cómo David Chase (el autor de la serie) planteó y llevó su obra a la televisión de la mano de HBO.
- **escenarios_localizaciones.html**: habla sobre la localización real de los escenarios más icónicos de la serie y la relación de los productores con los dueños de alguno de los escenarios.
- **personajes_reparto.html**: describe los personajes de la serie y los relaciona con sus actores.
- **premios.html**: enumera los premios obtenidos por *Los Soprano*.
- **temas.html**: explica brevemente los temas que desarrolla la serie y los compara con otras obras televisivas o cinematográficas.
- **temporadas.html**: muestra una tabla con información sobre las temporadas de *Los Soprano*.

## Documento CSS

El sitio web cuenta con una hoja de estilos CSS **estilo.css** proporcionada por los profesores de la asignatura.


# Estructura semántica de los documentos HTML5 del sitio web

Hay dos estructuras semánticas diferentes en el sitio web.

## Index

Para el documento **index.html** se ha definido una estructura diferente al resto de los documentos, ya que cuenta con un *aside* que el resto no contiene.

Su estructura es la siguiente (Ver figura 1):

- **Cabeza del documento**: Contiene diversos metadatos que dan información sobre el index, como el *charset*, el autor, una descripción y la hoja de estilos enlazada.
- **Cuerpo del documento**.
    - **Cabecera**: en este caso muestra un título con el texto *Los Soprano*.
    - **Nav**: menú del sitio web con enlaces a los otros documentos HTML5.
    - **Main**: contiene una sección con el contenido principal del index.
    - **Aside**: contiene enlaces a otros sitios web que hablan de la serie *Los Soprano*.
    - **Footer**: muestra dos logos que enlazan a los validadores HTML y CSS del W3C.

![Estructura del documento *index.html*](report_multimedia/layout-index.png){height=350px}

## Resto de documentos

El resto de documentos comparten la misma estructura semántica, que es la siguiente (Ver figura 2):

- **Cabeza del documento**: Contiene diversos metadatos que dan información sobre el documento en cuestión, como el *charset*, el autor, una descripción y la hoja de estilos enlazada.
- **Cuerpo del documento**.
    - **Cabecera**: en este caso muestra un título con el texto que identifica al documento.
    - **Nav**: menú del sitio web con enlaces a los otros documentos HTML5.
    - **Main**: contiene una o varias secciones con el contenido principal del documento.
    - **Footer**: muestra dos logos que enlazan a los validadores HTML y CSS del W3C. 

![Estructura del resto de documentos](report_multimedia/layout-other.png){height=350px}


# Resultado de las herramientas de validación y verificación de accesibilidad y adaptabilidad

## Validador de HTML5 del W3C

Como podemos observar en las figuras 3-11, el validador de HTML5 del W3C no muestra ningún error ni advertencia.

![Validador HTML5 del W3C: *index.html*](report_multimedia/w3c-index.png){height=350px}

![Validador HTML5 del W3C: *apertura.html*](report_multimedia/w3c-apertura.png){height=350px}

![Validador HTML5 del W3C: *argumento.html*](report_multimedia/w3c-argumento.png){height=350px}

![Validador HTML5 del W3C: *concepcion.html*](report_multimedia/w3c-concepcion.png){height=350px}

![Validador HTML5 del W3C: *escenarios_localizaciones.html*](report_multimedia/w3c-escenarios_localizaciones.png){height=350px}

![Validador HTML5 del W3C: *personajes_reparto.html*](report_multimedia/w3c-personajes_reparto.png){height=350px}

![Validador HTML5 del W3C: *premios.html*](report_multimedia/w3c-premios.png){height=350px}

![Validador HTML5 del W3C: *temas.html*](report_multimedia/w3c-temas.png){height=350px}

![Validador HTML5 del W3C: *temporadas.html*](report_multimedia/w3c-temporadas.png){height=350px}

## Herramienta TAW

La herramienta TAW muestra varias advertencias en cada documento HTML (Ver figuras 12-20). Estas advertencias están relacionadas con el contenido del documento y son difíciles de detectar por una máquina, por lo que TAW recomienda revisarlas manualmente para observar si se cumplen o no.

Estas advertencias son:

- **Contenido no textual**: se refiere a si los elementos no textuales del documento HTML tienen un texto alternativo explicando el contenido mostrado.
- **Páginas tituladas**: se refiere a si los documentos tienen algún título que defina su tema o propósito.
- **Encabezados y etiquetas**: se refiere a si los encabezados o etiquetas del documento describen el tema o propósito.
- **Información y relaciones**: se refiere a si la información, estructura o relaciones pueden ser determinadas de forma programática o están disponibles de forma textual.

![Herramienta TAW: *index.html*](report_multimedia/taw-index.png){height=350px}

![Herramienta TAW: *apertura.html*](report_multimedia/taw-apertura.png){height=350px}

![Herramienta TAW: *argumento.html*](report_multimedia/taw-argumento.png){height=350px}

![Herramienta TAW: *concepcion.html*](report_multimedia/taw-concepcion.png){height=350px}

![Herramienta TAW: *escenarios_localizaciones.html*](report_multimedia/taw-escenarios_localizaciones.png){height=350px}

![Herramienta TAW: *personajes_reparto.html*](report_multimedia/taw-personajes_reparto.png){height=350px}

![Herramienta TAW: *premios.html*](report_multimedia/taw-premios.png){height=350px}

![Herramienta TAW: *temas.html*](report_multimedia/taw-temas.png){height=350px}

![Herramienta TAW: *temporadas.html*](report_multimedia/taw-temporadas.png){height=350px}

## Herramienta Google Mobile Friendly

Debido a que el sitio web tiene contenido principalmente textual y una hoja de estilos bastante básica, *Google Mobile-Friendly* concluye que la mayoría de las páginas son accessibles para dispositivos móviles. Sin embargo, los documentos *escenarios_localizaciones.html* y *temporadas.html* no son accesibles ya que hay problemas con la hoja de estilos. 

En el caso de *escenarios_localizaciones.html* el problema viene dado por una imagen mostrada cuyo tamaño es superior al resto de la página, lo que provoca que no se vea adecuadamente. Esto se arreglaría modificando la hoja de estilos css para corregir el tamaño de dicha imagen en relación al resto de la página.

En el otro caso, el de *temporadas.html*, el error viene dado por el tamaño de letra de las columnas de la tabla mostrada en ese documento. Como en el anterior, el error se solventaría modificando el tamaño de letra de las columnas de dicha tabla.

 (Ver figuras 21-29).

![Google Mobile-Friendly: *index.html*](report_multimedia/gmf-index.png){height=350px}

![Google Mobile-Friendly: *apertura.html*](report_multimedia/gmf-apertura.png){height=350px}

![Google Mobile-Friendly: *argumento.html*](report_multimedia/gmf-argumento.png){height=350px}

![Google Mobile-Friendly: *concepcion.html*](report_multimedia/gmf-concepcion.png){height=350px}

![Google Mobile-Friendly: *escenarios_localizaciones.html*](report_multimedia/gmf-escenarios_localizaciones.png){height=350px}

![Google Mobile-Friendly: *personajes_reparto.html*](report_multimedia/gmf-personajes_reparto.png){height=350px}

![Google Mobile-Friendly: *premios.html*](report_multimedia/gmf-premios.png){height=350px}

![Google Mobile-Friendly: *temas.html*](report_multimedia/gmf-temas.png){height=350px}

![Google Mobile-Friendly: *temporadas.html*](report_multimedia/gmf-temporadas.png){height=350px}

