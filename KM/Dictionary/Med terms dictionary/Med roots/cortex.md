---
tags: [" #medroot"]
aliases: [cortic-]
roots: [cortex, cortic-]
forms: [combining]
alphabet:: C
definition: [outer layer]
---
>[!Note] DEFINITION of cortex
>outer layer (of an organ)
_____
>[!info]+ ETYMOLOGY of cortex
>#latin cortex, corticis
_____
>[!example]+ RELATED TERMS to cortex
>
_____
>[!tip]+ DERIVATIONS of cortex
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]