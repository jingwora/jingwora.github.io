---
tags: [" #medroot"]
aliases: []
roots: [poli-]
forms: [combining]
alphabet:: P
definition: [gray matter]
---
>[!Note] DEFINITION of poli-
>gray matter of brain and spinal cord
_____
>[!info]+ ETYMOLOGY of poli-
>#greek polios (gray)
_____
>[!example]+ RELATED TERMS to poli-
>
_____
>[!tip]+ DERIVATIONS of poli-
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