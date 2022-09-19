---
tags: [" #medroot"]
aliases: []
roots: [-able]
forms: [suffix, adjective]
alphabet:: A
definition: [capable of (being), able to]
---
>[!Note] DEFINITION of -able
>forms adjectives: capable of (being), able to
_____
>[!info]+ ETYMOLOGY of -able
>#latin
_____
>[!example]+ RELATED TERMS to -able
> 
| [[-able]] | capable of (being) | able to |       -       |  -   |
|:---------:|:------------------:|:-------:|:-------------:|:----:|
| [[-ile]]  |        YES         |    -    | pertaining to | like |
| [[-ible]] |        YES         |    -    |       -       |  -   |
_____
>[!tip]+ DERIVATIONS of -able
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____ 
>[!faq]- Query functionality (default define synonyms)
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]