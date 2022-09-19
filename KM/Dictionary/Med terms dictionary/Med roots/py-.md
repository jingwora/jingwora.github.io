---
tags: [" #medroot"]
aliases: []
roots: [py-]
forms: [combining]
alphabet:: P
definition: [pus]
---
>[!Note] DEFINITION of py-
>pus
_____
>[!info]+ ETYMOLOGY of py-
>#greek pyon
_____
>[!example]+ RELATED TERMS to py-
>
>| [[py-]] | pus |
|:--------:|:---:|
| [[pur-]]  | YES    |
_____
>[!tip]+ DERIVATIONS of py-
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