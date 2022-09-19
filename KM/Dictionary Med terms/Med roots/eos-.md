---
tags: [" #medroot"]
aliases: []
roots: [eos-]
forms: [combining]
alphabet:: E
definition: [red]
---
>[!Note] DEFINITION of eos-
>red (stain); refers to dye
_____
>[!info]+ ETYMOLOGY of eos-
>#greek eos
_____
>[!example]+ RELATED TERMS to eos-
>
>|  [[eos-]]   | red |  -  |
|:-----------:|:---:|:---:|
| [[erythr-]] | YES | red blood cell    |
_____
>[!tip]+ DERIVATIONS of eos-
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