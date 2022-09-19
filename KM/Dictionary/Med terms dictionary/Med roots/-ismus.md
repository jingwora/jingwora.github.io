---
tags: [" #medroot"]
aliases: []
roots: [-ismus]
forms: [suffix, noun]
alphabet:: I
definition: [condition (of), state (of), muscular spasm]
---
>[!Note] DEFINITION of -ismus
>1. forms nouns: condition (of), state (of)
>2. forms nouns: muscular spasm
_____
>[!info]+ ETYMOLOGY of -ismus
>#greek
_____
>[!example]+ RELATED TERMS to -ismus
>
|  [[-ismus]]  | condition (of) | state (of) | muscular spasm |       -        |
|:----------:|:--------------:|:----------:|:------------:|:--------------:|
|   [[-a]]   |      Yes       |    Yes     |      -       |       -        |
|  [[-ema]]  |      Yes       |    Yes     |      -       |       -        |
| [[-esis]]  |      Yes       |    Yes     |      -       |       -        |
|  [[-ia]]   |      Yes       |    Yes     |      -       |       -        |
| [[-ism]] |      Yes       |    Yes     |      -       | quality (of) |
|  [[-sis]]  |      Yes       |    Yes     |      -       |       -        |
|  [[-ty]]   |      Yes       |    Yes     |      -       |       -        |
|   [[-y]]   |      Yes       |    Yes     |      -       |       -        |
>
_____
>[!tip]+ DERIVATIONS of -ismus
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]