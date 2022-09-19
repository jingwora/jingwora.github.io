---
tags: [" #medroot"]
aliases: []
roots: [vag-]
forms: [combining]
alphabet:: V
definition: [vagus nerve]
---
>[!Note] DEFINITION of vag-
>vagus nerve
_____
>[!info]+ ETYMOLOGY of vag-
>#latin vagus (wandering)
_____
>[!example]+ RELATED TERMS to vag-
>
_____
>[!tip]+ DERIVATIONS of vag-
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