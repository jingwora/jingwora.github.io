---
tags: [" #medroot"]
aliases: []
roots: [-toxin]
forms: [compound suffix form]
alphabet:: T
definition: [poisonous substance]
---
>[!Note] DEFINITION of -toxin
>[[tox-]][[-in]] - a substance poisonous to (a part of the body)
_____
>[!info]+ ETYMOLOGY of -toxin
>
_____
>[!example]+ RELATED TERMS to -toxin
>
_____
>[!tip]+ DERIVATIONS of -toxin
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