---
tags: [" #medroot"]
aliases: []
roots: [poly-]
forms: [combining]
alphabet:: P
definition: [many, excessive]
---
>[!Note] DEFINITION of poly-
>many, excessive
_____
>[!info]+ ETYMOLOGY of poly-
>#greek polys
_____
>[!example]+ RELATED TERMS to poly-
>
>| [[poly-]]  | many | excessive |      -      |       -       |
|:----------:|:----:|:---------:|:-----------:|:-------------:|
| [[hyper-]] |  -   |    YES    | over, above | beyond normal |
| [[mult-]]  | YES  |     -     |    much     | affecting many parts              |
_____
>[!tip]+ DERIVATIONS of poly-
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