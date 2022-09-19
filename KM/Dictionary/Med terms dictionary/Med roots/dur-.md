---
tags: [" #medroot"]
aliases: []
roots: [dur-]
forms: [combining]
alphabet:: D
definition: [hard]
---
>[!Note] DEFINITION of dur-
>hard
_____
>[!info]+ ETYMOLOGY of dur-
>#latin
_____
>[!example]+ RELATED TERMS to dur-
>
|  [[dur-]]  | hard |  -  |
|:----------:|:----:|:---:|
| [[scler-]] | YES  |  -  |
| [[bary-]]  | YES  | heavy, dull    |
_____
>[!tip]+ DERIVATIONS of dur-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name !=[[]].file.name
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


