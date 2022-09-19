---
tags: [" #medroot"]
aliases: [pept-]
roots: [peps-, pept-]
forms: [combining]
alphabet:: P
definition: [digest]
---
>[!Note] DEFINITION of peps-
>digest
_____
>[!info]+ ETYMOLOGY of peps-
>#greek peptein
_____
>[!example]+ RELATED TERMS to peps-
>
_____
>[!tip]+ DERIVATIONS of peps-
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