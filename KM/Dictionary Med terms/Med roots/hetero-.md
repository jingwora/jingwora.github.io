---
tags: [" #medroot"]
aliases: [heter-]
forms: [prefix]
roots: [hetero-, heter-]
alphabet:: H
definition: [different, other, relationship to another]
---
>[!Note] DEFINITION of hetero-
>different, other, relationship to another
_____
>[!info]+ ETYMOLOGY of hetero-
>#greek
_____
>[!example]+ RELATED TERMS to hetero-
>
>| [[hetero-]] | different | other | relationship to another |  -  |
|:-----------:|:---------:|:-----:|:-----------------------:|:---:|
|  [[all-]]   |    YES    |   -   |            -            | divergence, difference from    |
_____
>[!tip]+ DERIVATIONS of hetero-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
___
>[!faq]- Query
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]