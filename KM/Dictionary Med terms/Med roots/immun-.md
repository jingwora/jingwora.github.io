---
tags: [" #medroot"]
aliases: []
roots: [immun-]
forms: [combining]
alphabet:: I
definition: [safe, protected]
---
>[!Note] DEFINITION of immun-
>safe, protected
>*see also: [[phylac-]]*
_____
>[!info]+ ETYMOLOGY of immun-
>#latin immunis (exempt)
_____
>[!example]+ RELATED TERMS to immun-
>
_____
>[!tip]+ DERIVATIONS of immun-
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