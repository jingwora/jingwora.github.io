---
tags: [" #medroot"]
aliases: []
roots: [sect-]
forms: [combining]
alphabet:: S
definition: [cut]
---
>[!Note] DEFINITION of sect-
>cut
_____
>[!info]+ ETYMOLOGY of sect-
>#latin secare, sectus
_____
>[!example]+ RELATED TERMS to sect-
>
>| [[sect-]] | cut | - |
| :---------: | :---: |: ---- :|
| [[-cid-]] | YES |kill-     |
_____
>[!tip]+ DERIVATIONS of sect-
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