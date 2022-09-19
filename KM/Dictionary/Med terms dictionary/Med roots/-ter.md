---
tags: [" #medroot"]
aliases: []
roots: [-ter]
forms: [suffix, noun]
alphabet:: T
definition: [instrument, device]
---
>[!Note] DEFINITION of -ter
>forms nouns: instrument, device
_____
>[!info]+ ETYMOLOGY of -ter
>#greek
_____
>[!example]+ RELATED TERMS to -ter
>
>| [[-ter]]  | instrument | device |   -   |
|:---------:|:----------:|:------:|:-----:|
| [[-ment]] |    YES     |   -    | agent |
|  [[-or]]  |    YES     |   -    | agent      |
_____
>[!tip]+ DERIVATIONS of -ter
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