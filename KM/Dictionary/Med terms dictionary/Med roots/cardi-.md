---
tags: [" #medroot"]
aliases: []
roots: [cardi-]
forms: [combining]
alphabet:: C
definition: [heart, cardia]
---
>[!Note] DEFINITION of cardi-
>heart, cardia
_____
>[!info]+ ETYMOLOGY of cardi-
>#greek kardia
_____
>[!example]+ RELATED TERMS to cardi-
>
>| [[cardi-]] | heart | cardia |
|:----------:|:-----:|:------:|
|  [[cor]]   |  YES  |   -    |
_____
>[!tip]+ DERIVATIONS of cardi-
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