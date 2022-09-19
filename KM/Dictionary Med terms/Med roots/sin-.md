---
tags: [" #medroot"]
aliases: [sinus-]
roots: [sin-, sinus-]
forms: [combining]
alphabet:: S
definition: [sinus]
---
>[!Note] DEFINITION of sin-
>sinus
_____
>[!info]+ ETYMOLOGY of sin-
>#latin sinus (curve, hollow)
_____
>[!example]+ RELATED TERMS to sin-
>
_____
>[!tip]+ DERIVATIONS of sin-
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