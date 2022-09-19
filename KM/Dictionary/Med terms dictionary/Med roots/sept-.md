---
tags: [" #medroot"]
aliases: []
roots: [sept-]
forms: [combining]
alphabet:: S
definition: [wall, partition]
---
>[!Note] DEFINITION of sept-
>wall, partition
_____
>[!info]+ ETYMOLOGY of sept-
>#latin saptum
_____
>[!example]+ RELATED TERMS to sept-
>
_____
>[!tip]+ DERIVATIONS of sept-
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