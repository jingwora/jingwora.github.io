---
tags: [" #medroot"]
aliases: [-olus, -ola, -olum]
roots: [-ole]
forms: [suffix, diminutive]
alphabet:: O
definition: [small]
---
>[!Note] DEFINITION of -ole
>forms diminutives: small
_____
>[!info]+ ETYMOLOGY of -ole
>#latin
_____
>[!example]+ RELATED TERMS to -ole
>
>|  [[-ole]]  | small |         -         |
|:----------:| :-----: |:-----------------:|
| [[-cle]]  | YES   |         -         |
| [[micr-]] | YES   | - |
|  [[-ellus]]   | YES   |         -         |
|  [[-il]]  | YES   |         biological genera         |
|  [[-ule]]  | YES   |         -         |
_____
>[!tip]+ DERIVATIONS of -ole
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