---
tags: [" #medroot"]
aliases: []
roots: [coni-]
forms: [combining]
alphabet:: C
definition: [dust]
---
>[!Note] DEFINITION of coni-
>dust
>*see also: [[koni]] (dust)*
_____
>[!info]+ ETYMOLOGY of coni-
>#greek konis
_____
>[!example]+ RELATED TERMS to coni-
>
_____
>[!tip]+ DERIVATIONS of coni-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!FAQ]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]