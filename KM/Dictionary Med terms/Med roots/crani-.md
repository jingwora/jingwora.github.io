---
tags: [" #medroot"]
aliases: []
roots: [crani-]
forms: [combining]
alphabet:: C
definition: [skull]
---
>[!Note] DEFINITION of crani-
>skull
_____
>[!info]+ ETYMOLOGY of crani-
>#greek kranion
_____
>[!example]+ RELATED TERMS to crani-
>
_____
>[!tip]+ DERIVATIONS of crani-
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