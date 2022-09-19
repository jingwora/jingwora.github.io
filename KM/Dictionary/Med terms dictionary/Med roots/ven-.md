---
tags: [" #medroot"]
aliases: []
roots: [ven-]
forms: [combining]
alphabet:: V
definition: [vein]
---
>[!Note] DEFINITION of ven-
>vein
_____
>[!info]+ ETYMOLOGY of ven-
>#latin vena
_____
>[!example]+ RELATED TERMS to ven-
>
>| [[ven-]] | vein |
|:----------:|:----:|
|  [[phleb-]]  | YES     |
_____
>[!tip]+ DERIVATIONS of ven-
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