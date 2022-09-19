---
tags: [" #medroot"]
aliases: []
roots: [esophag-]
forms: [combining]
alphabet:: E
definition: [esophagus]
---
>[!Note] DEFINITION of esophag-
>[[eso-]][[phag-]] - esophagus (swallow in)
_____
>[!info]+ ETYMOLOGY of esophag-
>#greek oisophagos
_____
>[!example]+ RELATED TERMS to esophag-
>
_____
>[!tip]+ DERIVATIONS of esophag-
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