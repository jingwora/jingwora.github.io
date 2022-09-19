---
tags: [" #medroot"]
aliases: []
roots: [alges-]
forms: [combining]
alphabet:: A
definition: [sensitivity to pain]
---
>[!Note] DEFINITION of alges-
>sensitivity to pain (see also [[alg-]])
_____
>[!info]+ ETYMOLOGY of alges-
>#greek algesis
_____
>[!example]+ RELATED TERMS to alges-
>
_____
>[!tip]+ DERIVATIONS of alges-
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