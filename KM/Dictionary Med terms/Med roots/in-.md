---
tags: [" #medroot"]
aliases: [inos-]
roots: [in-, inos-]
forms: [combining]
alphabet:: I
definition: [fiber, muscle]
---
>[!Note] DEFINITION of in-
>fiber, muscle
_____
>[!info]+ ETYMOLOGY of in-
>#greek is, inos
_____
>[!example]+ RELATED TERMS to in-
>
>| [[in-]]  | fiber | muscle |
|:--------:|:-----:|:------:|
| [[mys-]] |   -   | YES       |
_____
>[!tip]+ DERIVATIONS of in-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
___
>[!faq]- Query
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]