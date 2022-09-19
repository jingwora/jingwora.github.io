---
tags: [" #medroot"]
aliases: [nemat-]
roots: [nema, nemat-]
forms: [combining]
alphabet:: N
definition: [thread]
---
>[!Note] DEFINITION of nema
>thread (worm)
_____
>[!info]+ ETYMOLOGY of nema
>#greek nema, nematos
_____
>[!example]+ RELATED TERMS to nema
>
_____
>[!tip]+ DERIVATIONS of nema
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