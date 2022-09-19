---
tags: [" #medroot"]
aliases: []
roots: [ren-]
forms: [combining]
alphabet:: R
definition: [kidney]
---
>[!Note] DEFINITION of ren-
>kidney
_____
>[!info]+ ETYMOLOGY of ren-
>#latin ren, renis
_____
>[!example]+ RELATED TERMS to ren-
>
>|  [[ren-]]  | kidney |
|:----------:|:------:|
| [[nephr-]] | YES       |
_____
>[!tip]+ DERIVATIONS of ren-
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