---
tags: [" #medroot"]
aliases: []
roots: [cyt-]
forms: [combining]
alphabet:: C
definition: [cell]
---
>[!Note] DEFINITION of cyt-
>cell
_____
>[!info]+ ETYMOLOGY of cyt-
>#greek kytos (hollow container)
_____
>[!example]+ RELATED TERMS to cyt-
>
_____
>[!tip]+ DERIVATIONS of cyt-
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