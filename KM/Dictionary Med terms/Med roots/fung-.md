---
tags: [" #medroot"]
aliases: []
roots: [fung-]
forms: [combining]
alphabet:: F
definition: [fungus]
---
>[!Note] DEFINITION of fung-
>fungus
_____
>[!info]+ ETYMOLOGY of fung-
>#latin fungus (mushroom)
_____
>[!example]+ RELATED TERMS to fung-
>
>| [[fung-]] | fungus |
|:---------:|:------:|
| [[myc-]]  |  YES   |
_____
>[!tip]+ DERIVATIONS of fung-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
____
>[!faq]- Query
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]