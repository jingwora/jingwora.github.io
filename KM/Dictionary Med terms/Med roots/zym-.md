---
tags: [" #medroot"]
aliases: []
roots: [zym-]
forms: [combining]
alphabet:: V
definition: [ferment, enzyme, fermentation]
---
>[!Note] DEFINITION of zym-
>1. ferment, fermentation
>2. enzyme
>*see also: [[-ase]]*
_____
>[!info]+ ETYMOLOGY of zym-
>
_____
>[!example]+ RELATED TERMS to zym-
>
>| [[zym-]] | enzyme | ferment | fermentation |
|:--------:|:------:| ------- |:------------:|
| [[-ase]] |  YES   | -       | -             |
_____
>[!tip]+ DERIVATIONS of zym-
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