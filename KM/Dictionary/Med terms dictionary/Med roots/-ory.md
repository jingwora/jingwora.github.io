---
tags: [" #medroot"]
aliases: []
roots: [-ory]
forms: [suffix, adjective]
alphabet:: O
definition: [place for]
---
>[!Note] DEFINITION of -ory
 >forms adjectives: place for (something)
_____
>[!info]+ ETYMOLOGY of -ory
>#latin
_____
>[!example]+ RELATED TERMS to -ory
>
| [[-ory]] | place for |       -       |
|:----------:|:---------:|:-------------:|
|  [[-ary]]  |    YES    | pertaining to |
| [[-arium]] |    YES    |       -       |
|  [[-orium]]  |    YES    |       -       |
_____
>[!tip]+ DERIVATIONS of -ory
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
>>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]