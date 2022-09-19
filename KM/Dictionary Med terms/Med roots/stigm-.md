---
tags: [" #medroot"]
aliases: [stigmat-]
roots: [stigm-, stigmat-]
forms: [combining]
alphabet:: S
definition: [point, mark, spot]
---
>[!Note] DEFINITION of stigm-
>point, mark, spot
_____
>[!info]+ ETYMOLOGY of stigm-
>#greek stigma, stigmatos
_____
>[!example]+ RELATED TERMS to stigm-
>
>| [[stigm-]] | point | mark | spot |
|:----------:|:-----:|:----:|:----:|
| [[cusp-]]  |  YES  |  -   | -     |
_____
>[!tip]+ DERIVATIONS of stigm-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
___
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]