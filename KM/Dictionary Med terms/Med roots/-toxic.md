---
tags: [" #medroot"]
aliases: []
roots: [-toxic]
forms: [suffix form]
alphabet:: T
definition: [poisonous]
---
>[!Note] DEFINITION of -toxic
>[[tox-]][[-ic]] - poisonous (to an organ)
_____
>[!info]+ ETYMOLOGY of -toxic
>
_____
>[!example]+ RELATED TERMS to -toxic
>
_____
>[!tip]+ DERIVATIONS of -toxic
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]