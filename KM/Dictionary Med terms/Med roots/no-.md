---
tags: [" #medroot"]
aliases: []
roots: [no-]
forms: [combining]
alphabet:: N
definition: [mind, mental activity, comprehension]
---
>[!Note] DEFINITION of no-
>mind, mental activity, comprehension
>*see also: [[gno-]]*
_____
>[!info]+ ETYMOLOGY of no-
>#greek nous
_____
>[!example]+ RELATED TERMS to no-
>
>|  [[no-]]   | mind | mental activity | comprehension |     -      |
|:----------:|:----:|:---------------:|:-------------:|:----------:|
| [[phren-]] | YES  |        -        |       -       | diaphgragm |
| [[psych-]] | YES  |        -        |       -       | -           |
_____
>[!tip]+ DERIVATIONS of no-
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