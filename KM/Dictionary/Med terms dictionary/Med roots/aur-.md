---
tags: [" #medroot"]
aliases: []
roots: [aur-]
forms: [combining]
alphabet:: A
definition: [ear]
---
>[!Note] DEFINITION of aur-
>ear (hear also: [[acou-]])
_____
>[!info]+ ETYMOLOGY of aur-
>#latin auris
_____
>[!example]+ RELATED TERMS to aur-
>
>| [[aur-]] | ear |
|:--------:|:---:|
| [[ot-]]  | YES |
_____
>[!tip]+ DERIVATIONS of aur-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]