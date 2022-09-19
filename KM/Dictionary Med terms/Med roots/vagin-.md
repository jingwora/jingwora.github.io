---
tags: [" #medroot"]
aliases: []
roots: [vagin-]
forms: [combining]
alphabet:: V
definition: [vagina]
---
>[!Note] DEFINITION of vagin-
>vagina
_____
>[!info]+ ETYMOLOGY of vagin-
>#latin vagina (sheath)
_____
>[!example]+ RELATED TERMS to vagin-
>
>| [[colp-]]  | vagina |
| ---------- | ------ |
| [[vagin-]] | YES       |
_____
>[!tip]+ DERIVATIONS of vagin-
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