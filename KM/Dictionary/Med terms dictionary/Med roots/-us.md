---
tags: [" #medroot"]
aliases: []
roots: [-us]
forms: [suffix, noun]
alphabet:: U
definition: [condition, person]
---
>[!Note] DEFINITION of -us
>1. forms nouns: condition
>2. forms nouns: person
_____
>[!info]+ ETYMOLOGY of -us
>#latin
_____
>[!example]+ RELATED TERMS to -us
>
>| [[-us]]  | condition |   person   |       -       |  -   |
|:--------:|:---------:|:----------:|:-------------:|:----:|
| [[-tic]] |     -     | YES, agent | pertaining to | drug |
_____
>[!tip]+ DERIVATIONS of -us
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