---
tags: [" #medroot"]
aliases: [larynx]
roots: [laryng-, larynx]
forms: [combining]
alphabet:: L
definition: [larynx]
---
>[!Note] DEFINITION of laryng-
>larynx
_____
>[!info]+ ETYMOLOGY of laryng-
>#greek larynx, laryngos
_____
>[!example]+ RELATED TERMS to laryng-
>
_____
>[!tip]+ DERIVATIONS of laryng-
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