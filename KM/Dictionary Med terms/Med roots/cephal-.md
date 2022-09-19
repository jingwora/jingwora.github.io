---
tags: [" #medroot"]
aliases: []
roots: [cephal-]
forms: [combining]
alphabet:: C
definition: [head]
---
>[!Note] DEFINITION of cephal-
>head
_____
>[!info]+ ETYMOLOGY of cephal-
>#greek kephale
_____
>[!example]+ RELATED TERMS to cephal-
>
>| [[cephal-]]  | head |
|:-----------:|:----:|
| [[capit-]] | YES  |
_____
>[!tip]+ DERIVATIONS of cephal-
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