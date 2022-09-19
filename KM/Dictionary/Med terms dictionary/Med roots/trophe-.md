---
tags: [" #medroot"]
aliases: []
roots: [trophe-]
forms: [combining]
alphabet:: T
definition: [nourishment]
---
>[!Note] DEFINITION of trophe-
>nourishment
>*see also: [[sit-]] (food)*
_____
>[!info]+ ETYMOLOGY of trophe-
>#greek trophe
_____
>[!example]+ RELATED TERMS to trophe-
>
_____
>[!tip]+ DERIVATIONS of trophe-
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