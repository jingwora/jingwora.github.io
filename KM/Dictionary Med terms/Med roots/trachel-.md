---
tags: [" #medroot"]
aliases: []
roots: [trachel-]
forms: [combining]
alphabet:: T
definition: [neck, cervix]
---
>[!Note] DEFINITION of trachel-
>neck, cervix
>*see also: [[trach-]] (trachea)*
_____
>[!info]+ ETYMOLOGY of trachel-
>#greek trachelos
_____
>[!example]+ RELATED TERMS to trachel-
>
>| [[trachel-]] | neck | cervix |
|:------------:|:----:|:------:|
| [[cervic-]]  | YES  | -       |
_____
>[!tip]+ DERIVATIONS of trachel-
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