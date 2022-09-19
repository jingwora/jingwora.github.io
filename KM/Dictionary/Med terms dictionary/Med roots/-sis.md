---
tags: [" #medroot"]
aliases: []
roots: [-sis]
forms: [suffix, noun]
alphabet:: S
definition: [condition (of), state (of)]
---
>[!Note] DEFINITION of -sis
>forms nouns: condition (of), state (of)
_____
>[!info]+ ETYMOLOGY of -sis
>#greek
_____
>[!example]+ RELATED TERMS to -sis
>
>|   [[-sis]]   | condition (of) | state (of) |       -        |
|:----------:|:--------------:|:----------:|:--------------:|
|  [[-a]]  |      Yes       |    Yes     |       -        |
| [[-ema]]  |      Yes       |    Yes     |       -        |
|  [[-esis]]   |      Yes       |    Yes     |       -        |
|  [[-ism]]  |      Yes       |    Yes     |        quality (of)      |
| [[-ismus]] |      Yes       |    Yes     | muscular spasm |
|  [[-ia]]  |      Yes       |    Yes     |       -        |
|  [[-ty]]   |      Yes       |    Yes     |       -        |
|   [[-y]]   |      Yes       |    Yes     |       -        |
>
_____
>[!tip]+ DERIVATIONS of -sis
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