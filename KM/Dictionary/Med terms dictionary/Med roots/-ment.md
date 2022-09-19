---
tags: [" #medroot"]
aliases: []
roots: [-ment]
forms: [suffix, noun]
alphabet:: M
definition: [agent, instrument]
---
>[!Note] DEFINITION of -ment
>forms nouns: agent, instrument
_____
>[!info]+ ETYMOLOGY of -ment
>#latin
_____
>[!example]+ RELATED TERMS to -ment
>
>| [[-ment]] |    agent    | instrument  |  -   |              -               |
|:---------:|:-----------:|:-----------:|:----:|:----------------------------:|
|  [[-ic]]  |     YES     |      -      | drug |        pertaining to         |
| [[-itic]] | YES, person |      -      | drug | pertaining to (inflammation) |
|  [[-or]]  |     YES     |     YES     |  -   |              -               |
| [[-ter]]  |      -      | YES, device |  -   |              -               |
| [[-tic]]  | YES, person |      -      | drug |        pertaining to         |
_____
>[!tip]+ DERIVATIONS of -ment
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