---
tags: [" #medroot"]
aliases: []
roots: [log-]
forms: [combining]
alphabet:: L
definition: [word, study]
---
>[!Note] DEFINITION of log-
>word, study
_____
>[!info]+ ETYMOLOGY of log-
>#greek logos
_____
>[!example]+ RELATED TERMS to log-
>
>| [[log-]]  | word | study | -   |
|:---------:|:----:|:-----:| --- |
| [[-logy]] |  -   |  YES  | science    |
_____
>[!tip]+ DERIVATIONS of log-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
___
>[!faq]- Query
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]