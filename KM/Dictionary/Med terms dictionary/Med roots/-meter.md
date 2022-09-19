---
tags: [" #medroot"]
aliases: []
roots: [-meter]
forms: [combining]
alphabet:: M
definition: [instrument for measuring]
---
>[!Note] DEFINITION of -meter
>instru[[-ment]] for measuring
_____
>[!info]+ ETYMOLOGY of -meter
>#greek metron
_____
>[!example]+ RELATED TERMS to -meter
>
_____
>[!tip]+ DERIVATIONS of -meter
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