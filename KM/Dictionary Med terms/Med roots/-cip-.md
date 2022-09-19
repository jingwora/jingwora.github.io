---
tags: [" #medroot"]
aliases: []
roots: [-cip-]
forms: [combining]
alphabet:: C
definition: [take]
---
>[!Note] DEFINITION of -cip-
>take
_____
>[!info]+ ETYMOLOGY of -cip-
>#latin capere, captus
_____
>[!example]+ RELATED TERMS to -cip-
>
>| [[-cip-]] | take |
| :----------: | :----: |
| [[-cept-]]  | YES     |
_____
>[!tip]+ DERIVATIONS of -cip-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```


[[Med roots dictionary]]