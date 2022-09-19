---
tags: [" #medroot"]
aliases: []
roots: [brady-]
forms: [combining]
alphabet:: B
definition: [slow]
---
>[!Note] DEFINITION of brady-
>slow
_____
>[!info]+ ETYMOLOGY of brady-
>#greek bradys
_____
>[!example]+ RELATED TERMS to brady-
>
_____
>[!tip]+ DERIVATIONS of brady-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]