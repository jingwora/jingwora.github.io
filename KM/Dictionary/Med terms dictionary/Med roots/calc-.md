---
tags: [" #medroot"]
aliases: []
roots: [calc-]
forms: [combining]
alphabet:: C
definition: [stone, calcium, lime]
---
>[!Note] DEFINITION of calc-
>stone, calcium, lime (salts)
_____
>[!info]+ ETYMOLOGY of calc-
>#latin calx, calcis
_____
>[!example]+ RELATED TERMS to calc-
>
| [[calc-]] | stone | calcium | lime |    -     |
|:---------:|:-----:|:-------:|:----:|:--------:|
| [[lith-]] |  YES  |    -    |  -   | calculus |
_____
>[!tip]+ DERIVATIONS of calc-
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