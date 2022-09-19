---
tags: [" #medroot"]
aliases: []
roots: [-ty]
forms: [suffix, noun]
alphabet:: T
definition: [condition (of), state (of)]
---
>[!Note] DEFINITION of -ty
>forms nouns: condition (of), state (of)
_____
>[!info]+ ETYMOLOGY of -ty
>#latin
_____
>[!example]+ RELATED TERMS to -ty
>
>|   [[-ty]]   | condition (of) | state (of) |       -        |
|:----------:|:--------------:|:----------:|:--------------:|
|  [[-a]]  |      Yes       |    Yes     |       -        |
| [[-ema]]  |      Yes       |    Yes     |       -        |
|  [[-esis]]   |      Yes       |    Yes     |       -        |
|  [[-ism]]  |      Yes       |    Yes     |        quality (of)      |
| [[-ismus]] |      Yes       |    Yes     | muscular spasm |
|  [[-ia]]  |      Yes       |    Yes     |       -        |
|  [[-sis]]   |      Yes       |    Yes     |       -        |
|   [[-y]]   |      Yes       |    Yes     |       -        |
>
_____
>[!tip]+ DERIVATIONS of -ty
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!fa]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]