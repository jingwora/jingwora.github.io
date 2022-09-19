---
tags: [" #medroot"]
aliases: []
forms: [prefix]
roots: [eso-]
alphabet:: E
definition: [within, inner, inward]
---
>[!Note] DEFINITION of eso-
>within, inner, inward
_____
>[!info]+ ETYMOLOGY of eso-
>#greek
_____
>[!example]+ RELATED TERMS to eso-
>
>|  [[eso-]]   | within | inner | inward |  -  |  
|:-----------:|:------:|:-----:|:------:|:---:|
|   [[en-]]   |  YES   |   -   |   -    | in, into  | 
|  [[endo-]]  |  YES   |   -   |   -    |  -  | 
| [[intern-]] |   -    |  YES  |   -    |  -  |  
| [[intra-]]  |  YES   |   -   |   -    | -    |      
_____
>[!tip]+ DERIVATIONS of eso-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
____
>[!faq]- Query
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]