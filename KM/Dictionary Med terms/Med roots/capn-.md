---
tags: [" #medroot"]
aliases: []
roots: [capn-]
forms: [combining]
alphabet:: C
definition: [carbon dioxide]
---
>[!Note] DEFINITION of capn-
>carbon dioxide
_____
>[!info]+ ETYMOLOGY of capn-
>#greek kapnos
_____
>[!example]+ RELATED TERMS to capn-
>
_____
>[!tip]+ DERIVATIONS of capn-
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