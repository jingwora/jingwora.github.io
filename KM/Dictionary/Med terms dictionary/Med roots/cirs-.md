---
tags: [" #medroot"]
aliases: []
roots: [cirs-]
forms: [combining]
alphabet:: C
definition: [dilated and twisted vein, varix]
---
>[!Note] DEFINITION of cirs-
>dilated and twisted vein, [[varix]]
_____
>[!info]+ ETYMOLOGY of cirs-
> #greek kirsos
_____
>[!example]+ RELATED TERMS to cirs-
>
>| [[cirs-]] | dilated and twisted vein |
|:---------:|:------------------------:|
| [[varix]] |           YES            |
_____
>[!tip]+ DERIVATIONS of cirs-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]