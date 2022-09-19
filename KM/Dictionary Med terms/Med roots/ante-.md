---
tags: [" #medroot"]
aliases: []
forms: [prefix]
roots: [ante-]
alphabet:: A
definition: [before, forward]
---
>[!Note] DEFINITION of ante-
>1. Before
>2. Forward
_____
>[!info]+ ETYMOLOGY of ante-
>#latin
_____
>[!example]+ RELATED TERMS to ante-
>
>| [[ante-]] | before | forward | -           |
| --------- | ------ | ------- | ----------- |
| [[pre-]]  | YES    | -       | in front of |
| [[pro-]]  | YES    | YES     | in front            |
_____
>[!tip]+ DERIVATIONS of ante-
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