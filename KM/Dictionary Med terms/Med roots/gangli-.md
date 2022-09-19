---
tags: [" #medroot"]
aliases: []
roots: [gangli-]
forms: [combining]
alphabet:: G
definition: [ganglion]
---
>[!Note] DEFINITION of gangli-
>ganglion (nerve cell cluster)
_____
>[!info]+ ETYMOLOGY of gangli-
>#greek ganglion (knot)
_____
>[!example]+ RELATED TERMS to gangli-
>
_____
>[!tip]+ DERIVATIONS of gangli-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
____
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]