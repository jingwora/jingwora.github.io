---
tags: [" #medroot"]
aliases: [stabl-]
roots: [stabil-]
forms: [combining]
alphabet:: S
definition: [stable, fixed]
---
>[!Note] DEFINITION of stabil-
>stable, fixed
_____
>[!info]+ ETYMOLOGY of stabil-
>#latin stabilis
_____
>[!example]+ RELATED TERMS to stabil-
>```dataview
>TABLE definition AS Definition
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!tip]+ DERIVATIONS of stabil-
>```dataview
>TABLE definition AS Definition 
>FROM #medterm 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0
>SORT file.name ASC
>```

[[Med roots dictionary]]