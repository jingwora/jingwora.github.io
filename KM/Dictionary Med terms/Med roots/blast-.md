---
tags: [" #medroot"]
aliases: []
roots: [blast-]
forms: [combining]
alphabet:: B
definition: [primitive cell]
---
>[!Note] DEFINITION of blast-
>primitive cell 
>*see also: [[kary-]]**
_____
>[!info]+ ETYMOLOGY of blast-
>#greek blastos (bud, germ)
_____
>[!example]+ RELATED TERMS to blast-
>
_____
>[!tip]+ DERIVATIONS of blast-
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