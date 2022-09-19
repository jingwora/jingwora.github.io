---
tags: [" #medroot"]
aliases: []
roots: [intern-]
forms: [combining]
alphabet:: I
definition: [inner]
---
>[!Note] DEFINITION of intern-
>inner
_____
>[!info]+ ETYMOLOGY of intern-
>#latin internus
_____
>[!example]+ RELATED TERMS to intern-
>
>| [[intern-]] | inner |  -  |
|:-----------:|:-----:|:---:|
|  [[eso-]]   |  YES  | within, inward    |
_____
>[!tip]+ DERIVATIONS of intern-
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