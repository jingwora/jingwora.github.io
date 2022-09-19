---
tags: [" #medroot"]
aliases: []
roots: [-ism]
forms: [suffix, noun]
alphabet:: I
definition: [condition (of), state (of), quality (of)]
---
>[!Note] DEFINITION of -ism
>forms abstract nouns: condition (of), state (of), quality (of)
_____
>[!info]+ ETYMOLOGY of -ism
>#greek
_____
>[!example]+ RELATED TERMS to -ism
>
|  [[-ism]]  | condition (of) | state (of) | quality (of) |       -        |
|:----------:|:--------------:|:----------:|:------------:|:--------------:|
|   [[-a]]   |      Yes       |    Yes     |      -       |       -        |
|  [[-ema]]  |      Yes       |    Yes     |      -       |       -        |
| [[-esis]]  |      Yes       |    Yes     |      -       |       -        |
|  [[-ia]]   |      Yes       |    Yes     |      -       |       -        |
| [[-ismus]] |      Yes       |    Yes     |      -       | muscular spasm |
|  [[-sis]]  |      Yes       |    Yes     |      -       |       -        |
|  [[-ty]]   |      Yes       |    Yes     |      -       |       -        |
|   [[-y]]   |      Yes       |    Yes     |      -       |       -        |
>
_____
>[!tip]+ DERIVATIONS of -ism
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