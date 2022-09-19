---
tags: [" #medroot"]
aliases: []
roots: [osm-]
forms: [combining]
alphabet:: O
definition: [sense of smell, odor]
---
>[!Note] DEFINITION of osm-
>1. sense of smell
>2. odor
_____
>[!info]+ ETYMOLOGY of osm-
>#greek osme
_____
>[!example]+ RELATED TERMS to osm-
>
>|  [[osm-]]  | sense of smell | odor |
|:----------:|:--------------:|:----:|
| [[osphr-]] |      YES       | -     |
_____
>[!tip]+ DERIVATIONS of osm-
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