---
tags: [" #medroot"]
aliases: []
roots: [synov-]
forms: [combining]
alphabet:: S
definition: [synovial fluid, synovial membrane or sac]
---
>[!Note] DEFINITION of synov-
>synovial fluuid, synovial membrane or sac
_____
>[!info]+ ETYMOLOGY of synov-
>synovia
_____
>[!example]+ RELATED TERMS to synov-
>
_____
>[!tip]+ DERIVATIONS of synov-
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