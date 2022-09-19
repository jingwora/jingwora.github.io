---
tags: [" #medroot"]
aliases: [suf-, sup-]
roots: [sub-, suf-, sup-]
forms: [prefix]
alphabet:: S
definition: [under]
---
>[!Note] DEFINITION of sub-
>under
_____
>[!info]+ ETYMOLOGY of sub-
>#latin
> - suf- before "f"
>- sup- before "p"
_____
>[!example]+ RELATED TERMS to sub-
>
>| [[sub-]]  | under |  -  |
|:---------:|:-----:|:---:|
| [[hypo-]] |  YES  | deficient, below normal, low    |
_____
>[!tip]+ DERIVATIONS of sub-
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