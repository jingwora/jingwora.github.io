---
tags: [" #medroot"]
aliases: []
roots: [hypn-]
forms: [combining]
alphabet:: H
definition: [sleep]
---
>[!Note] DEFINITION of hypn-
>sleep
_____
>[!info]+ ETYMOLOGY of hypn-
>#greek hypnos
_____
>[!example]+ RELATED TERMS to hypn-
>
>| [[hypn-]] | sleep |
|:---------:|:-----:|
| [[somn-]] | YES      |
_____
>[!tip]+ DERIVATIONS of hypn-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
___
>[!faq]- Query
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]