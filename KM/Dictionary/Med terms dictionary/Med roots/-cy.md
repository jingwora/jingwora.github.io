---
tags: [" #medroot"]
aliases: []
roots: [-cy]
forms: [suffix, nouns]
alphabet:: C
definition: [the act of (being), the state of (being)]
---
>[!Note] DEFINITION of -cy
>forms nouns: the act of (being), the state of (being)
_____
>[!info]+ ETYMOLOGY of -cy
>#latin
_____
>[!example]+ RELATED TERMS to -cy
>
>|  [[-cy]]   | the act of (being) | the state of (being) |           -           |         -         |
|:----------:|:------------------:|:--------------------:|:---------------------:|:-----------------:|
| [[-ation]] |        YES         |          -           | the result of (being) | something that is |
|  [[-ce]]   |        YES         |         YES          |           -           | -                  |
_____
>[!tip]+ DERIVATIONS of -cy
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