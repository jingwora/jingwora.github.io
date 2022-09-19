---
tags: [" #medroot"]
aliases: []
roots: [vesic-]
forms: [combining]
alphabet:: V
definition: [bladder]
---
>[!Note] DEFINITION of vesic-
>(urinary) bladder
_____
>[!info]+ ETYMOLOGY of vesic-
>#latin vesica
_____
>[!example]+ RELATED TERMS to vesic-
>
>| [[vesic-]] | bladder |    -     |
|:----------:|:-------:|:--------:|
|  [[asc-]]  |   YES   | sac, bag |
| [[cyst-]]  |   YES   | cyst         |
_____
>[!tip]+ DERIVATIONS of vesic-
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