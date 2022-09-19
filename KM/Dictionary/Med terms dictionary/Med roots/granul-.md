---
tags: [" #medroot"]
aliases: []
roots: [granul-]
forms: [combining]
alphabet:: G
definition: [granule]
---
>[!Note] DEFINITION of granul-
>granule
_____
>[!info]+ ETYMOLOGY of granul-
>#latin granulum
_____
>[!example]+ RELATED TERMS to granul-
>
_____
>[!tip]+ DERIVATIONS of granul-
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