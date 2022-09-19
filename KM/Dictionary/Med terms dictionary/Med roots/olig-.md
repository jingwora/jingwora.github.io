---
tags: [" #medroot"]
aliases: []
roots: [olig-]
forms: [combining]
alphabet:: O
definition: [few, deficient]
---
>[!Note] DEFINITION of olig-
>few, deficient
_____
>[!info]+ ETYMOLOGY of olig-
>#greek oligos
_____
>[!example]+ RELATED TERMS to olig-
>
>| [[olig-]] | few | deficient |  -  |        -         |
|:---------:|:---:|:---------:|:---:|:----------------:|
|  [[a-]]   |  -  |    YES    | not | without, lacking |
| [[hypo-]] |  -  |    YES    | low | below normal, under                 |
_____
>[!tip]+ DERIVATIONS of olig-
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