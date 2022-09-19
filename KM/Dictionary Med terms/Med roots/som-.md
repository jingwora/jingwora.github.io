---
tags: [" #medroot"]
aliases: [-soma, somat-]
roots: [som-, -soma, somat-]
forms: [combining]
alphabet:: S
definition: [body]
---
>[!Note] DEFINITION of som-
>body
_____
>[!info]+ ETYMOLOGY of som-
>#greek soma, somatos
>latin equivalent is corp
_____
>[!example]+ RELATED TERMS to som-
>
_____
>[!tip]+ DERIVATIONS of som-
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