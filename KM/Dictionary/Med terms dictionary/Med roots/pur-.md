---
tags: [" #medroot"]
aliases: []
roots: [pur-]
forms: [combining]
alphabet:: P
definition: [pus]
---
>[!Note] DEFINITION of pur-
>pus
_____
>[!info]+ ETYMOLOGY of pur-
>#latin pus, puris
_____
>[!example]+ RELATED TERMS to pur-
>
>| [[pur-]] | pus |
|:--------:|:---:|
| [[py-]]  | YES    |
_____
>[!tip]+ DERIVATIONS of pur-
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