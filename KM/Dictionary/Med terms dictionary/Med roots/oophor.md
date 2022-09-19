---
tags: [" #medroot"]
aliases: []
roots: [oophor]
forms: [combining]
alphabet:: O
definition: [ovary]
---
>[!Note] DEFINITION of oophor
>ovary (egg-bearing)
_____
>[!info]+ ETYMOLOGY of oophor
>#greek oophoron
_____
>[!example]+ RELATED TERMS to oophor
>
>| [[oophor]] | ovary |
|:----------:|:-----:|
| [[ovari-]] |  YES  |
_____
>[!tip]+ DERIVATIONS of oophor
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