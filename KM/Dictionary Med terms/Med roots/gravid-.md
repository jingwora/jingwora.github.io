---
tags: [" #medroot"]
aliases: []
roots: [gravid-]
forms: [combining]
alphabet:: G
definition: [pregnant]
---
>[!Note] DEFINITION of gravid-
>pregnant
_____
>[!info]+ ETYMOLOGY of gravid-
>#latin gravidus
_____
>[!example]+ RELATED TERMS to gravid-
>
_____
>[!tip]+ DERIVATIONS of gravid-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
____
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]