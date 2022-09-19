---
tags: [" #medroot"]
aliases: []
roots: [carcin-]
forms: [combining]
alphabet:: C
definition: [carcinoma, cancer]
---
>[!Note] DEFINITION of carcin-
>cancer, [[carcin-]][[-oma]]
_____
>[!info]+ ETYMOLOGY of carcin-
>#greek karkinos (crab)
_____
>[!example]+ RELATED TERMS to carcin-
>
_____
>[!tip]+ DERIVATIONS of carcin-
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