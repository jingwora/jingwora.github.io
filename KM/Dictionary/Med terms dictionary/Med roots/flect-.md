---
tags: [" #medroot"]
aliases: [flex-]
roots: [flect-, flex-]
forms: [combining]
alphabet:: F
definition: [bend]
---
>[!Note] DEFINITION of flect-
>bend
_____
>[!info]+ ETYMOLOGY of flect-
>#latin flectere, flexus
_____
>[!example]+ RELATED TERMS to flect-
>
_____
>[!tip]+ DERIVATIONS of flect-
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