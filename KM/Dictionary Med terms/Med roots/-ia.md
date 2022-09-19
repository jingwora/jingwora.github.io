---
tags: [" #medroot"]
aliases: [-asia, -asis, -sia]
forms: [suffix, noun]
roots: [-ia, -asia, -asis, -sia]
alphabet:: I
definition: [condition (of), state (of)]
---
>[!Note] Definition of -ia
>forms nouns: condition (of), state (of)
_____
>[!info]+ Etymology of -ia
>#greek
>#latin
_____
>[!example]+ Related terms to -ia
>
>|   [[-ia]]   | condition (of) | state (of) |       -        |
|:----------:|:--------------:|:----------:|:--------------:|
|  [[-a]]  |      Yes       |    Yes     |       -        |
| [[-ema]]  |      Yes       |    Yes     |       -        |
|  [[-esis]]   |      Yes       |    Yes     |       -        |
|  [[-ism]]  |      Yes       |    Yes     |        quality (of)      |
| [[-ismus]] |      Yes       |    Yes     | muscular spasm |
|  [[-sis]]  |      Yes       |    Yes     |       -        |
|  [[-ty]]   |      Yes       |    Yes     |       -        |
|   [[-y]]   |      Yes       |    Yes     |       -        |
>
_____
>[!tip]+ Derivations
>```dataview
TABLE definition AS Definition 
WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
SORT file.name ASC
>```
_____
>[!faq]- Query
>```dataview
>TABLE aliases AS Aliases, definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]