---
tags: [" #medroot"]
aliases: [anthrax]
roots: [anthrac-, anthrax]
forms: [combining]
alphabet:: A
definition: [coal, anthrax]
---
>[!Note] DEFINITION of anthrac-
>1. coal
>2. anthrax
_____
>[!info]+ ETYMOLOGY of anthrac-
>#greek anthrax, anthrakos
_____
>[!example]+ RELATED TERMS to anthrac-
>
_____
>[!tip]+ DERIVATIONS of anthrac-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]