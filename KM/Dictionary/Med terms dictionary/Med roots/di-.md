---
tags: [" #medroot"]
aliases: [dis-]
forms: [prefix]
roots: [di-, dis_-]
alphabet:: D
definition: [two, twice, double]
---
>[!Note] DEFINITION of di-
>two, twice, double
_____
>[!info]+ ETYMOLOGY of di-
>#greek
>- dis- (rarely occurs))
_____
>[!example]+ RELATED TERMS to di-
>
>|  [[di-]]   | two | twice | double |  -   |  
|:----------:|:---:|:-----:|:------:|:----:|
|  [[bi-]]   | YES |  YES  |  YES   | both |  
| [[diplo-]] |  -  |   -   |  YES   | twin     |     
_____
>[!tip]+ DERIVATIONS of di-
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