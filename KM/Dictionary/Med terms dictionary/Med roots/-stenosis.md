---
tags: [" #medroot"]
aliases: []
roots: [-stenosis]
forms: [suffix form, noun]
alphabet:: S
definition: [narrowing]
---
>[!Note] DEFINITION of -stenosis
>forms nouns: [[sten-]][[-osis]] - narrowing (of a part of the body)
_____
>[!info]+ ETYMOLOGY of -stenosis
>
_____
>[!example]+ RELATED TERMS to -stenosis
>
_____
>[!tip]+ DERIVATIONS of -stenosis
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