---
tags: [" #medroot"]
aliases: []
roots: [felineus]
forms: [combining]
alphabet:: F
definition: [of a cat, belonging to a cat]
---
>[!Note] DEFINITION of felineus
>of or belonging to a cat
_____
>[!info]+ ETYMOLOGY of felineus
>#latin felineus
_____
>[!example]+ RELATED TERMS to felineus
>
_____
>[!tip]+ DERIVATIONS of felineus
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
____
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]