---
tags: [" #medroot"]
aliases: [-in(e)]
roots: [-in]
forms: [suffix]
alphabet:: I 
definition: [substance]
---
>[!Note] DEFINITION of -in
>forms name of substance
>Not to be confused with [[-ine]] (pertaining to)
_____
>[!info]+ ETYMOLOGY of -in
>#greek
_____
>[!example]+ RELATED TERMS to -in
>
>| [[-in]] | substance |              -              |
|:-------:|:---------:|:---------------------------:|
| [[-ma]] |    YES    | abnormal/diseased condition |
_____
>[!tip]+ DERIVATIONS of -in
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
______
>[!faq]- Query
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]