---
tags: [" #medroot"]
aliases: [mon(o)-]
forms: [prefix]
roots: [mono-, mon(o)-]
alphabet:: M
definition: [one, single]
---
>[!Note] DEFINITION of mono-
>one, single
_____
>[!info]+ ETYMOLOGY of mono-
>#greek
>- mon- before "h" or {vowel}
_____
>[!example]+ RELATED TERMS to mono-
>
>| [[mono-]]  | single |  one  |
|:---------:|:------:|:---:|
| [[mon-]] |  YES   | YES    |
_____
>[!tip]+ DERIVATIONS of mono-
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