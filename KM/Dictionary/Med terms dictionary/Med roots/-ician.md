---
tags: [" #medroot"]
aliases: []
roots: [-ician]
forms: [suffix]
alphabet:: I
definition: [denotes occupation]
---
>[!Note] DEFINITION of -ician
>(forms nouns) denotes occupation
_____
>[!info]+ ETYMOLOGY of -ician
>
_____
>[!example]+ RELATED TERMS to -ician
>
_____
>[!tip]+ DERIVATIONS of -ician
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