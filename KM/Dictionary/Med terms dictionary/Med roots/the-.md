---
tags: [" #medroot"]
aliases: []
roots: [the-]
forms: [combining]
alphabet:: T
definition: [place, put]
---
>[!Note] DEFINITION of the-
>place, put
_____
>[!info]+ ETYMOLOGY of the-
>#greek tithenai
_____
>[!example]+ RELATED TERMS to the-
>
_____
>[!tip]+ DERIVATIONS of the-
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