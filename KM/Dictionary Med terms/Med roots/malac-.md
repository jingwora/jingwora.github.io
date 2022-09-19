---
tags: [" #medroot"]
aliases: []
roots: [malac-]
forms: [combining]
alphabet:: M
definition: [soft]
---
>[!Note] DEFINITION of malac-
>soft
_____
>[!info]+ ETYMOLOGY of malac-
>#greek malakos
_____
>[!example]+ RELATED TERMS to malac-
>
_____
>[!tip]+ DERIVATIONS of malac-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
___
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]