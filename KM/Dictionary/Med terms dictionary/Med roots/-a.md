---
tags: [" #medroot"]
aliases: []
roots: [-a]
forms: [suffix, noun]
alphabet:: A
definition: [condition (of),state (of)]
---
>[!Note] DEFINITION of -a
>forms nouns: condition (of), state (of)
_____
>[!info]+ ETYMOLOGY of -a
>#greek
_____ 
>[!example]+ RELATED TERMS to -a
>
|   [[-a]]   | condition (of) | state (of) |       -        |
|:----------:|:--------------:|:----------:|:--------------:|
|  [[-ema]]  |      Yes       |    Yes     |       -        |
| [[-esis]]  |      Yes       |    Yes     |       -        |
|  [[-ia]]   |      Yes       |    Yes     |       -        |
|  [[-ism]]  |      Yes       |    Yes     |       quality of        |
| [[-ismus]] |      Yes       |    Yes     | muscular spasm |
|  [[-sis]]  |      Yes       |    Yes     |       -        |
|  [[-ty]]   |      Yes       |    Yes     |       -        |
|   [[-y]]   |      Yes       |    Yes     |       -        |
_____
>[!tip]+ DERIVATIONS of -a
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>``` 
_____
>[!faq]- Query functionality (default defines synonyms)
>````dataview
>TABLE aliases AS Aliases, definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>````

[[Med roots dictionary]]



