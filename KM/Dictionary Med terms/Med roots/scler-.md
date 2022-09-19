---
tags: [" #medroot"]
aliases: []
roots: [scler-]
forms: [combining]
alphabet:: S
definition: [hard]
---
>[!Note] DEFINITION of scler-
>hard
_____
>[!info]+ ETYMOLOGY of scler-
>#greek skleros
_____
>[!example]+ RELATED TERMS to scler-
>
>| [[scler-]] | hard |  -  |
|:----------:|:----:|:---:|
| [[bary-]] | YES  | dull, heavy    |
_____
>[!tip]+ DERIVATIONS of scler-
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