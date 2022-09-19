---
tags: [" #medroot"]
aliases: [thele-]
roots: [thel-, thele-]
forms: [combining]
alphabet:: T
definition: [nipple]
---
>[!Note] DEFINITION of thel-
>nipple
_____
>[!info]+ ETYMOLOGY of thel-
>#greek thele
_____
>[!example]+ RELATED TERMS to thel-
>
_____
>[!tip]+ DERIVATIONS of thel-
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