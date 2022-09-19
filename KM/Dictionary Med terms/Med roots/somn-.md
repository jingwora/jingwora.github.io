---
tags: [" #medroot"]
aliases: []
roots: [somn-]
forms: [combining]
alphabet:: S
definition: [sleep]
---
>[!Note] DEFINITION of somn-
>sleep
_____
>[!info]+ ETYMOLOGY of somn-
>#latin somnus
_____
>[!example]+ RELATED TERMS to somn-
>
>| [[somn-]] | sleep |
|:---------:|:-----:|
| [[hypn-]] | YES      |
_____
>[!tip]+ DERIVATIONS of somn-
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