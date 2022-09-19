---
tags: [" #medroot"]
aliases: [plast-]
roots: [plas-, plast-]
forms: [combining]
alphabet:: P
definition: [form, develop]
---
>[!Note] DEFINITION of plas-
>form, develop
_____
>[!info]+ ETYMOLOGY of plas-
>#greek plassein
_____
>[!example]+ RELATED TERMS to plas-
>
>| [[plas-]]  | form | develop |  -  |
|:----------:|:----:|:-------:|:---:|
| [[morph-]] | YES  |    -    | shape    |
_____
>[!tip]+ DERIVATIONS of plas-
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