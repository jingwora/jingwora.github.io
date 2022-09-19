---
tags: [" #medroot"]
aliases: [schist-, schiz-]
roots: [-schisis, schist-, schiz-]
forms: [combining]
alphabet:: S
definition: [split, cleft, fissure]
---
>[!Note] DEFINITION of -schisis
>split, cleft, fissure
_____
>[!info]+ ETYMOLOGY of -schisis
>#greek schizein
_____
>[!example]+ RELATED TERMS to -schisis
>
_____
>[!tip]+ DERIVATIONS of -schisis
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