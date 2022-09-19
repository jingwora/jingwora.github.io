---
tags: [" #medroot"]
aliases: []
roots: [ovari-]
forms: [combining]
alphabet:: O
definition: [ovary]
---
>[!Note] DEFINITION of ovari-
>ovary
_____
>[!info]+ ETYMOLOGY of ovari-
>#latin ovarium
_____
>[!example]+ RELATED TERMS to ovari-
>
>| [[ovari-]] | ovary |
|:----------:|:-----:|
| [[oophor]] |  YES  |
_____
>[!tip]+ DERIVATIONS of ovari-
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