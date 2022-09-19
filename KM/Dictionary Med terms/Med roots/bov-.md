---
tags: [" #medroot"]
aliases: []
roots: [bov-]
forms: [combining]
alphabet:: B
definition: [ox, bull, cow]
---
>[!Note] DEFINITION of bov-
>ox, bull, cow
_____
>[!info]+ ETYMOLOGY of bov-
>#latin bos, bovis
_____
>[!example]+ RELATED TERMS to bov-
>
>| [[bov-]]  | cow | ox, bull |
|:---------:|:---:|:--------:|
| [[vacc-]] | YES |    -     |
_____
>[!tip]+ DERIVATIONS of bov-
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