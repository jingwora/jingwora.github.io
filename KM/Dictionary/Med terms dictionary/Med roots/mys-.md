---
tags: [" #medroot"]
aliases: [my_-]
roots: [mys-, my_-]
forms: [combining]
alphabet:: M
definition: [muscle]
---
>[!Note] DEFINITION of mys-
>muscle
_____
>[!info]+ ETYMOLOGY of mys-
>#greek mys, myos
_____
>[!example]+ RELATED TERMS to mys-
>
>| [[mys-]] | muscle |  -  |
|:--------:|:------:|:---:|
| [[in-]]  |  YES   | fiber    |
_____
>[!tip]+ DERIVATIONS of mys-
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