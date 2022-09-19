---
tags: [" #medroot"]
aliases: [-illus, -illa, -illum]
roots: [-il, -illus, -illa, -illum]
forms: [suffix, diminutive]
alphabet:: I
definition: [small]
---
>[!Note] DEFINITION of -il
>forms diminutives: small
_____
>[!info]+ ETYMOLOGY of -il
>#latin
_____
>[!example]+ RELATED TERMS to -il
>
>|  [[-il]]  | small |         biological genera         |
|:----------:| :-----: |:-----------------:|
| [[-cle]]  | YES   |         -         |
| [[micr-]] | YES   | - |
|  [[-ellus]]   | YES   |         -         |
|  [[-ole]]  | YES   |         -         |
|  [[-ule]]  | YES   |         -         |
_____
>[!tip]+ DERIVATIONS of -il
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