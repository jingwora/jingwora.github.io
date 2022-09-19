---
tags: [" #medroot"]
aliases: [pharynx]
roots: [pharyng-, pharynx]
forms: [combining]
alphabet:: P
definition: [pharynx]
---
>[!Note] DEFINITION of pharyng-
>pharynx
_____
>[!info]+ ETYMOLOGY of pharyng-
>#greek pharynx, pharyngos (throat)
_____
>[!example]+ RELATED TERMS to pharyng-
>
_____
>[!tip]+ DERIVATIONS of pharyng-
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