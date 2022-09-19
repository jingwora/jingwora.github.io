---
tags: [" #medroot"]
aliases: []
roots: [arthr-]
forms: [combining]
alphabet:: A
definition: [joint]
---
>[!Note] DEFINITION of arthr-
>joint
_____
>[!info]+ ETYMOLOGY of arthr-
>#greek arthron
_____
>[!example]+ RELATED TERMS to arthr-
>
_____
>[!tip]+ DERIVATIONS of arthr-
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