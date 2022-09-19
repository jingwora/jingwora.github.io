---
tags: [" #medroot"]
aliases: []
roots: [culex]
forms: [combining]
alphabet:: C
definition: [gnat]
---
>[!Note] DEFINITION of culex
>gnat
_____
>[!info]+ ETYMOLOGY of culex
>#latin culex
_____
>[!example]+ RELATED TERMS to culex
>
_____
>[!tip]+ DERIVATIONS of culex
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