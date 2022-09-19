---
tags: [" #medroot"]
aliases: [-ory(um)]
roots: [-orium, -ory(um)]
forms: [suffix, noun]
alphabet:: O
definition: [place for]
---
>[!Note] DEFINITION of -orium
 >forms nouns: place for (something)
_____
>[!info]+ ETYMOLOGY of -orium
>#latin
_____
>[!example]+ RELATED TERMS to -orium
>
>| [[-orium]] | place for |       -       |
|:----------:|:---------:|:-------------:|
|  [[-ary]]  |    YES    | pertaining to |
| [[-arium]] |    YES    |       -       |
|  [[-ory]]  |    YES    |       -       |
_____
>[!tip]+ DERIVATIONS of -orium
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