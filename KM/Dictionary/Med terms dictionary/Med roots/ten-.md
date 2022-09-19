---
tags: [" #medroot"]
aliases: [tenon-, tenont-]
roots: [ten-, tenon-, tenont-]
forms: [combining]
alphabet:: T
definition: [tendon]
---
>[!Note] DEFINITION of ten-
>tendon
_____
>[!info]+ ETYMOLOGY of ten-
>#greek tenon, tenontos
_____
>[!example]+ RELATED TERMS to ten-
>
_____
>[!tip]+ DERIVATIONS of ten-
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

