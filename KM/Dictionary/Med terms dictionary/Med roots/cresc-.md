---
tags: [" #medroot"]
aliases: [-cret-]
roots: [cresc-, -cret-]
forms: [combining]
alphabet:: C
definition: [grow]
---
>[!Note] DEFINITION of cresc-
>(begin to) grow
_____
>[!info]+ ETYMOLOGY of cresc-
>#latin crescere, cretus
_____
>[!example]+ RELATED TERMS to cresc-
>
>|  [[cresc-]]  | grow | -  |
|:----------:|:----:|:--------:|
| [[aux-]] | YES  |    increase     |
_____
>[!tip]+ DERIVATIONS of cresc-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]