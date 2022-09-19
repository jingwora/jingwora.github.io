---
tags: [" #medroot"]
aliases: [radic-, radix-]
roots: [rad-, radic-, radix-]
forms: [combining]
alphabet:: R
definition: [root]
---
>[!Note] DEFINITION of rad-
>root
_____
>[!info]+ ETYMOLOGY of rad-
>#latin radix, radicis
_____
>[!example]+ RELATED TERMS to rad-
>
_____
>[!tip]+ DERIVATIONS of rad-
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