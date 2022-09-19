---
tags: [" #medroot"]
aliases: []
roots: [duoden-]
forms: [combining]
alphabet:: D
definition: [duodenum]
---
>[!Note] DEFINITION of duoden-
>duodenum
>*see also: [[enter-]] (small intestine), [[jejun-]], [[ile-]]*
_____
>[!info]+ ETYMOLOGY of duoden-
>#latin duodeni (twelve)
_____
>[!example]+ RELATED TERMS to duoden-
>
_____
>[!tip]+ DERIVATIONS of duoden-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
____
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]