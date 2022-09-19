---
tags: [" #medroot"]
aliases: []
roots: [bi(os)-]
forms: [combining]
alphabet:: B
definition: [life]
---
>[!Note] DEFINITION of bi(os)-
>life
_____
>[!info]+ ETYMOLOGY of bi(os)-
>#greek bios
_____
>[!example]+ RELATED TERMS to bi(os)-
>
_____
>[!tip]+ DERIVATIONS of bi(os)-
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