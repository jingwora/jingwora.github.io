---
tags: [" #medroot"]
aliases: [hepat-]
roots: [hepar-, hepat-]
forms: [combining]
alphabet:: H
definition: [liver]
---
>[!Note] DEFINITION of hepar-
>liver
_____
>[!info]+ ETYMOLOGY of hepar-
>#greek hepar, hapatos
_____
>[!example]+ RELATED TERMS to hepar-
>
_____
>[!tip]+ DERIVATIONS of hepar-
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