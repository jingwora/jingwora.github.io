---
tags: [" #medroot"]
aliases: [-ulus, -ula, -ulum]
roots: [-ule, -ulus, -ula, -ulum]
forms: [suffix, diminutive]
alphabet:: U
definition: [small]
---
>[!Note] DEFINITION of -ule
>forms diminutives: small
_____
>[!info]+ ETYMOLOGY of -ule
>#latin
_____
>[!example]+ RELATED TERMS to -ule
>
>|  [[-ule]]  | small |         -         |
|:----------:| :-----: |:-----------------:|
| [[-cle]]  | YES   |         -         |
| [[micr-]] | YES   | - |
|  [[-ellus]]   | YES   |         -         |
|  [[-il]]  | YES   |         biological genera         |
|  [[-ole]]  | YES   |         -         |
_____
>[!tip]+ DERIVATIONS of -ule
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