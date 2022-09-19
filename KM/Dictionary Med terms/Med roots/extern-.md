---
tags: [" #medroot"]
aliases: []
roots: [extern-]
forms: [combining]
alphabet:: E
definition: [outer]
---
>[!Note] DEFINITION of extern-
>outer
>*see also: [[ex-]] (out of)*
_____
>[!info]+ ETYMOLOGY of extern-
>#latin externus
_____
>[!example]+ RELATED TERMS to extern-
>```dataview
>TABLE definition AS Definition
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!tip]+ DERIVATIONS of extern-
>```dataview
>TABLE definition AS Definition 
>FROM #medterm 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0
>SORT file.name ASC
>```

[[Med roots dictionary]]