---
tags: [" #medroot"]
aliases: []
roots: [-arium]
forms: [suffix, noun]
alphabet:: A
definition: [denotes a place for something, place for]
---
>[!Note] DEFINITION of -arium
>forms nouns: denotes a place for something, place for
_____
>[!info]+ ETYMOLOGY of -arium
>#latin
_____
>[!example]+ RELATED TERMS to -arium
>
| [[-arium]] | place for |       -       |
|:----------:|:---------:|:-------------:|
|  [[-ary]]  |    YES    | pertaining to |
| [[-orium]] |    YES    |       -       |
|  [[-ory]]  |    YES    |       -       |
_____
>[!tip]+ DERIVATIONS of -arium
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query functionality
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```


[[Med roots dictionary]]