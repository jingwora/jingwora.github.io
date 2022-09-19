---
tags: [" #medroot"]
aliases: []
roots: [-cept-]
forms: [combining]
alphabet:: C
definition: [take]
---
>[!Note] DEFINITION of -cept-
>take
_____
>[!info]+ ETYMOLOGY of -cept-
>#latin capere, captus
_____
>[!example]+ RELATED TERMS to -cept-
>
>| [[-cept-]] | take |
| :----------: |: ---- :|
| [[-cip-]]  | YES     |
_____
>[!tip]+ DERIVATIONS of -cept-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query functionality
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]