---
tags: [" #medroot"]
aliases: []
roots: [non-]
forms: [prefix]
alphabet:: N
definition: [not]
---
>[!Note] DEFINITION of non-
>not
_____
>[!info]+ ETYMOLOGY of non-
>#latin
_____
>[!example]+ RELATED TERMS to non-
>
>| [[non-]] | not |              -              |
|:------------:|:---:|:---------------------------:|
|    [[a-]]    | YES | without, lacking, deficient |
|   [[in(not)-]]   | YES | -                            |
_____
>[!tip]+ DERIVATIONS of non-
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