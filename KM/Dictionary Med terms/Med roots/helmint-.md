---
tags: [" #medroot"]
aliases: [helminth-]
roots: [helmint-, helminth-]
forms: [combining]
alphabet:: H
definition: [worm]
---
>[!Note] DEFINITION of helmint-
>(intestinal) worm
_____
>[!info]+ ETYMOLOGY of helmint-
>#greek helmins, helminthos
_____
>[!example]+ RELATED TERMS to helmint-
>
_____
>[!tip]+ DERIVATIONS of helmint-
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