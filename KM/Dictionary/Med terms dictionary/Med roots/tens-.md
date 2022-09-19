---
tags: [" #medroot"]
aliases: [tenont-]
roots: [tens-, tenont(s)-]
forms: [combining]
alphabet:: T
definition: [stretch]
---
>[!Note] DEFINITION of tens-
>stretch
_____
>[!info]+ ETYMOLOGY of tens-
>#latin tendere, tensus
_____
>[!example]+ RELATED TERMS to tens-
>
_____
>[!tip]+ DERIVATIONS of tens-
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