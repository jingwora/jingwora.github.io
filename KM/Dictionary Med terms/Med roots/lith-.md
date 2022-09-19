---
tags: [" #medroot"]
aliases: []
roots: [lith-]
forms: [combining]
alphabet:: L
definition: [stone, calculus]
---
>[!Note] DEFINITION of lith-
>stone, calculus
_____
>[!info]+ ETYMOLOGY of lith-
>#greek lithos
_____
>[!example]+ RELATED TERMS to lith-
>
>| [[lith-]] | stone | calculus |  -  |
|:---------:|:-----:|:--------:|:---:|
| [[calc-]] |  YES  |    -     | calcium, lime    |
_____
>[!tip]+ DERIVATIONS of lith-
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