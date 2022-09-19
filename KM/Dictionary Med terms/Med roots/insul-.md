---
tags: [" #medroot"]
aliases: []
roots: [insul-]
forms: [combining]
alphabet:: I
definition: [island]
---
>[!Note] DEFINITION of insul-
>island
_____
>[!info]+ ETYMOLOGY of insul-
>#latin insula
_____
>[!example]+ RELATED TERMS to insul-
>
_____
>[!tip]+ DERIVATIONS of insul-
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