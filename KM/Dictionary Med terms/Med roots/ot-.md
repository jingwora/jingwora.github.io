---
tags: [" #medroot"]
aliases: []
roots: [ot-]
forms: [combining]
alphabet:: O
definition: [ear]
---
>[!Note] DEFINITION of ot-
>ear
_____
>[!info]+ ETYMOLOGY of ot-
>#greek ous, otos
_____
>[!example]+ RELATED TERMS to ot-
>
>| [[ot-]] | ear |
|:--------:|:---:|
| [[aur-]]  | YES |
_____
>[!tip]+ DERIVATIONS of ot-
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