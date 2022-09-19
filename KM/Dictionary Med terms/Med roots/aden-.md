---
tags: [" #medroot"]
aliases: []
roots: [aden-]
forms: [combining]
alphabet:: A
definition: [gland]
---
>[!Note] DEFINITION of aden-
>gland
_____
>[!info]+ ETYMOLOGY of aden-
>#greek aden
_____
>[!example]+ RELATED TERMS to aden-
>
_____
>[!tip]+ DERIVATIONS of aden-
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