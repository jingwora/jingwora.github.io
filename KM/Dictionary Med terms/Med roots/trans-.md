---
tags: [" #medroot"]
aliases: []
roots: [trans-]
forms: [prefix]
alphabet:: T
definition: [across, through]
---
>[!Note] DEFINITION of trans-
>across, through
_____
>[!info]+ ETYMOLOGY of trans-
>#latin
_____
>[!example]+ RELATED TERMS to trans-
>
>| [[trans-]] | across | through |   -   |
|:----------:|:------:|:-------:|:-----:|
|  [[dia-]]  |  YES   |   YES   | apart |
|  [[per-]]  |   -    |   YES   | very, throroughly      |
_____
>[!tip]+ DERIVATIONS of trans-
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