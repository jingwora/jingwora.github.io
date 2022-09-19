---
tags: [" #medroot"]
aliases: []
roots: [-ema]
forms: [suffix, noun]
alphabet:: E
definition: [condition (of), state (of)]
---
>[!Note] DEFINITION of -ema
>forms abstract nouns: condition (of), state (of)
_____
>[!info]+ ETYMOLOGY of -ema
>#greek
_____
>[!example]+ RELATED TERMS to -ema
>
>|   [[-ema]]   | condition (of) | state (of) |       -        |
|:----------:|:--------------:|:----------:|:--------------:|
|  [[-a]]  |      Yes       |    Yes     |       -        |
| [[-esis]]  |      Yes       |    Yes     |       -        |
|  [[-ia]]   |      Yes       |    Yes     |       -        |
|  [[-ism]]  |      Yes       |    Yes     |       quality of       |
| [[-ismus]] |      Yes       |    Yes     | muscular spasm |
|  [[-sis]]  |      Yes       |    Yes     |       -        |
|  [[-ty]]   |      Yes       |    Yes     |       -        |
|   [[-y]]   |      Yes       |    Yes     |       -        |
_____
>[!tip]+ DERIVATIONS of -ema
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