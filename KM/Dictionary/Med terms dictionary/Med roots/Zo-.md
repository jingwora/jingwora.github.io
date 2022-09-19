---
tags: [" #medroot"]
aliases: []
roots: [Zo-]
forms: [combining]
alphabet:: Z
definition: [animal, organism]
---
>[!Note] DEFINITION of Zo-
>animal, organism
_____
>[!info]+ ETYMOLOGY of Zo-
>#greek zoon
_____
>[!example]+ RELATED TERMS to Zo-
>
_____
>[!tip]+ DERIVATIONS of Zo-
>```dataview
>TABLE definition AS Definition 
>FROM #medterm 
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