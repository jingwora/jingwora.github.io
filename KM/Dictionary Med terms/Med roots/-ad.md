---
tags: [" #medroot"]
aliases: []
roots: [-ad]
forms: [suffix, adverb]
alphabet:: A
definition: [indicates direction toward a part of the body, toward]
---
>[!Note] DEFINITION of -ad
>forms adverbs: indicates direction toward a part of the body, toward
_____
>[!info]+ ETYMOLOGY of -ad
>#latin
_____
>[!example]+ RELATED TERMS to -ad
> 
| [[-ad]] | toward |    -    |        -         |
|:-------:|:------:|:-------:|:----------------:|
| [[ad-]] | YES|   to    |        -         |
| [[ob-]] |  YES   | against | very, thoroughly |
_____
>[!tip]+ DERIVATIONS of -ad
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query functionality
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]