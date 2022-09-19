---
tags: [" #medroot"]
aliases: []
roots: [colp-]
forms: [combining]
alphabet:: C
definition: [vagina]
---
>[!Note] DEFINITION of colp-
>vagina
_____
>[!info]+ ETYMOLOGY of colp-
>#greek kolpos
_____
>[!example]+ RELATED TERMS to colp-
>
>| [[colp-]]  | vagina |
| ---------- | ------ |
| [[vagin-]] | YES       |
_____
>[!tip]+ DERIVATIONS of colp-
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