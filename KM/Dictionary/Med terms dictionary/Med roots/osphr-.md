---
tags: [" #medroot"]
aliases: []
roots: [osphr-]
forms: [combining]
alphabet:: O
definition: [sense of smell]
---
>[!Note] DEFINITION of osphr-
>sense of smell
_____
>[!info]+ ETYMOLOGY of osphr-
>#greek osphresis
_____
>[!example]+ RELATED TERMS to osphr-
>
>|  [[osphr-]]  | sense of smell | - |
|:----------:|:--------------:|:----:|
| [[osm-]] |      YES       | odor     |
_____
>[!tip]+ DERIVATIONS of osphr-
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