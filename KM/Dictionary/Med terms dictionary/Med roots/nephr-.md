---
tags: [" #medroot"]
aliases: []
roots: [nephr-]
forms: [combining]
alphabet:: N
definition: [kidney]
---
>[!Note] DEFINITION of nephr-
>kidney
_____
>[!info]+ ETYMOLOGY of nephr-
>#greek nephros
_____
>[!example]+ RELATED TERMS to nephr-
>
>| [[nephr-]] | kidney |
|:----------:|:------:|
|  [[ren-]]  | YES       |
_____
>[!tip]+ DERIVATIONS of nephr-
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