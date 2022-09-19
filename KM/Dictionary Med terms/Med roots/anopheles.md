---
tags: [" #medroot"]
aliases: []
roots: [anopheles]
forms: [combining]
alphabet:: A
definition: [useless, harmful]
---
>[!Note] DEFINITION of anopheles
>useless, harmful
_____
>[!info]+ ETYMOLOGY of anopheles
>#greek anopheles
_____
>[!example]+ RELATED TERMS to anopheles
>
_____
>[!tip]+ DERIVATIONS of anopheles
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