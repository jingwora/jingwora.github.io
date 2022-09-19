---
tags: [" #medroot"]
aliases: []
roots: [rhabd-]
forms: [combining]
alphabet:: R
definition: [rod]
---
>[!Note] DEFINITION of rhabd-
>rod
_____
>[!info]+ ETYMOLOGY of rhabd-
>#greek rhabdos
_____
>[!example]+ RELATED TERMS to rhabd-
>
>| [[rhabd-]]  | rod |  -  |
|:-----------:|:---:|:---:|
| [[bacill-]] | YES | staff, bacillus    |
_____
>[!tip]+ DERIVATIONS of rhabd-
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