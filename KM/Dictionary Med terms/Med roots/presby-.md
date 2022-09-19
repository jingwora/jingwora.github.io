---
tags: [" #medroot"]
aliases: []
roots: [presby-]
forms: [combining]
alphabet:: P
definition: [old, old age]
---
>[!Note] DEFINITION of presby-
>old, old age
_____
>[!info]+ ETYMOLOGY of presby-
>#greek presbys
_____
>[!example]+ RELATED TERMS to presby-
>
>| [[presby-]] | old | old age |
|:-----------:|:---:|:-------:|
|  [[ger-]]   | YES | -        |
_____
>[!tip]+ DERIVATIONS of presby-
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