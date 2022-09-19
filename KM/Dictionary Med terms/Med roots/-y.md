---
tags: [" #medroot"]
aliases: []
roots: [-y]
forms: [suffix, noun]
alphabet:: Y
definition: [condition (of), state (of)]
---
>[!Note] DEFINITION of -y
>forms abstract nouns: condition (of), state (of)
_____
>[!info]+ ETYMOLOGY of -y
>#greek
>#latin
_____
>[!example]+ RELATED TERMS to -y
>
>|   [[-y]]   | condition (of) | state (of) |       -        |
|:----------:|:--------------:|:----------:|:--------------:|
|  [[-a]]  |      Yes       |    Yes     |       -        |
| [[-ema]]  |      Yes       |    Yes     |       -        |
|  [[-esis]]   |      Yes       |    Yes     |       -        |
|  [[-ism]]  |      Yes       |    Yes     |        quality (of)      |
| [[-ismus]] |      Yes       |    Yes     | muscular spasm |
|  [[-ia]]  |      Yes       |    Yes     |       -        |
|  [[-sis]]   |      Yes       |    Yes     |       -        |
|   [[-ty]]   |      Yes       |    Yes     |       -        |
_____
>[!tip]+ DERIVATIONS of -y
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