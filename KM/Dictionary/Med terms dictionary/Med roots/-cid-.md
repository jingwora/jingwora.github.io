---
tags: [" #medroot"]
aliases: [-cis-]
roots: [-cid-, -cis-]
forms: [combining]
alphabet:: C
definition: [cut, kill]
---
>[!Note] DEFINITION of -cid-
>cut, kill
_____
>[!info]+ ETYMOLOGY of -cid-
>#latin caedere, caesus
_____
>[!example]+ RELATED TERMS to -cid-
>
>| [[-cid-]] | cut | kill |
| :---------: | :---: |: ---- :|
| [[sect-]] | YES | -     |
_____
>[!tip]+ DERIVATIONS of -cid-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query function
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]