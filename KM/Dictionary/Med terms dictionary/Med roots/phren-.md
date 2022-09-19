---
tags: [" #medroot"]
aliases: []
roots: [phren-]
forms: [combining]
alphabet:: P
definition: [mind, diaphragm]
---
>[!Note] DEFINITION of phren-
>1. mind
>2. diaphragm
_____
>[!info]+ ETYMOLOGY of phren-
>#greek phren
_____
>[!example]+ RELATED TERMS to phren-
>
>| [[phren-]] | mind | diaphragm |               -                |
|:----------:|:----:|:---------:|:------------------------------:|
|  [[no-]]   | YES  |     -     | comprehension, mental activity |
| [[psych-]] | YES  |     -     |                                |
_____
>[!tip]+ DERIVATIONS of phren-
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