---
tags: [" #medroot"]
aliases: [mycet-]
roots: [myc-, mycet-]
forms: [combining]
alphabet:: M
definition: [fungus]
---
>[!Note] DEFINITION of myc-
>fungus
_____
>[!info]+ ETYMOLOGY of myc-
>#greek mykes, myketos (mushroom)
_____
>[!example]+ RELATED TERMS to myc-
>| [[fung-]] | fungus |
|:---------:|:------:|
| [[myc-]]  |  YES   |
_____
>[!tip]+ DERIVATIONS of myc-
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