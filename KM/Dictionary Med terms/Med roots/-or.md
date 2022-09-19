---
tags: [" #medroot"]
aliases: []
roots: [-or]
forms: [suffix, noun]
alphabet:: O
definition: [agent, instrument]
---
>[!Note] DEFINITION of -or
>forms abstract nouns: agent, instrument
_____
>[!info]+ ETYMOLOGY of -or
>#latin
_____
>[!example]+ RELATED TERMS to -or
>
>| [[-or]] |    agent    | instrument  |  -   |              -               |
|:---------:|:-----------:|:-----------:|:----:|:----------------------------:|
|  [[-ic]]  |     YES     |      -      | drug |        pertaining to         |
| [[-itic]] | YES, person |      -      | drug | pertaining to (inflammation) |
|  [[-ment]]  |     YES     |     YES     |  -   |              -               |
| [[-ter]]  |      -      | YES, device |  -   |              -               |
| [[-tic]]  | YES, person |      -      | drug |        pertaining to         |
_____
>[!tip]+ DERIVATIONS of -or
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