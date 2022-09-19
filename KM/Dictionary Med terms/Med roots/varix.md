---
tags: [" #medroot"]
aliases: [varic-]
roots: [varix, varic-]
forms: [combining]
alphabet:: V
definition: [dilated and twisted vein, varix]
---
>[!Note] DEFINITION of varix
>dilated and twisted vein, varix
_____
>[!info]+ ETYMOLOGY of varix
>#latin varix, varicis
_____
>[!example]+ RELATED TERMS to varix
>
>| [[varix]] | dilated and twisted vein | vari |
|:---------:|:------------------------:|:----:|
| [[cirs-]] |           YES            | YES     |
_____
>[!tip]+ DERIVATIONS of varix
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
___
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]