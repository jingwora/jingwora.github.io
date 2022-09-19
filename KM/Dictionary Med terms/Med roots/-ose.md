---
tags: [" #medroot"]
aliases: []
roots: [-ose]
forms: [suffix, adjective]
alphabet:: O
definition: [full of, resembling, chemical substance]
---
>[!Note] DEFINITION of -ose
>1. forms adjectives: full of, resembling
>2. forms nouns: chemical substance
_____
>[!info]+ ETYMOLOGY of -ose
>#latin
_____
>[!example]+ RELATED TERMS to -ose
>
>| [[-ose]]  | full of | resembling | chemical substance |         -          |        -         |
|:---------:|:-------:|:----------:|:------------------:|:------------------:|:----------------:|
| [[-ate]]  |    -    |     -      |        YES         | having the form of |    possessing    |
| [[-ide]]  |    -    |     -      |        YES         |         -          |        -         |
| [[-ite]]  |    -    |     -      |        YES         |         -          |        -         |
| [[-lent]] |   YES   |     -      |         -          |         -          |        -         |
| [[-oid]]  |    -    |    YES     |         -          |         -          |        -         |
| [[-one]]  |    -    |     -      |        YES         |         -          |        -         |
| [[-ous]]  |   YES   |     -      |         -          |   pertaining to    | characterized by |
_____
>[!tip]+ DERIVATIONS of -ose
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