---
tags: [" #medroot"]
aliases: [multi-]
roots: [mult-, multi-]
forms: [prefix]
alphabet:: M
definition: [many, much, affecting many parts]
---
>[!Note] DEFINITION of mult-
>many, much, affecting many parts
_____
>[!info]+ ETYMOLOGY of mult-
>#latin
>- multi- (often)
_____
>[!example]+ RELATED TERMS to mult-
>
>| [[mult-]] | many | much | affecting many parts |     -     |
|:---------:|:----:|:----:|:--------------------:|:---------:|
| [[poly-]] | YES  |  -   |          -           | excessive | 
_____
>[!tip]+ DERIVATIONS of mult-
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