---
tags: [" #medroot"]
aliases: []
roots: [toc-]
forms: [combining]
alphabet:: T
definition: [childbirth, labor]
---
>[!Note] DEFINITION of toc-
>childbirth, labor
_____
>[!info]+ ETYMOLOGY of toc-
>#greek tokos
_____
>[!example]+ RELATED TERMS to toc-
>
_____
>[!tip]+ DERIVATIONS of toc-
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