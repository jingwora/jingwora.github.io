---
tags: [" #medroot"]
aliases: [pont-]
roots: [pons, pont-]
forms: [combining]
alphabet:: P
definition: [pons]
---
>[!Note] DEFINITION of pons
>pons
_____
>[!info]+ ETYMOLOGY of pons
>#latin pons, pontis (bridge)
_____
>[!example]+ RELATED TERMS to pons
>
_____
>[!tip]+ DERIVATIONS of pons
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