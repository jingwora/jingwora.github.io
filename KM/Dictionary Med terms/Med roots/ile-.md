---
tags: [" #medroot"]
aliases: []
roots: [ile-]
forms: [combining]
alphabet:: I
definition: [ileum]
---
>[!Note] DEFINITION of ile-
>ileum
>*see also: [[enter-]] (small intestine), [[duoden-]], [[jejun-]]*
_____
>[!info]+ ETYMOLOGY of ile-
>#latin ileum
_____
>[!example]+ RELATED TERMS to ile-
>
_____
>[!tip]+ DERIVATIONS of ile-
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