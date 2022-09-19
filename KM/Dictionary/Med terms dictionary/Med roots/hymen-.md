---
tags: [" #medroot"]
aliases: []
roots: [hymen-]
forms: [combining]
alphabet:: H
definition: [membrane, hymen]
---
>[!Note] DEFINITION of hymen-
>1. hymen
>2. membrane
_____
>[!info]+ ETYMOLOGY of hymen-
>#greek hymen
_____
>[!example]+ RELATED TERMS to hymen-
>
>| [[hymen-]] | membrane | hymen |         -         |  -  |
|:----------:|:--------:|:-----:|:-----------------:|:---:|
|  [[-ium]]  |   YES    |   -   | connective tissue |   body region  |
_____
>[!tip]+ DERIVATIONS of hymen-
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