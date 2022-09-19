---
tags: [" #medroot"]
aliases: []
roots: [andr-]
forms: [combining]
alphabet:: A
definition: [man, male]
---
>[!Note] DEFINITION of andr-
>man, male
_____
>[!info]+ ETYMOLOGY of andr-
>#greek aner, andros
_____
>[!example]+ RELATED TERMS to andr-
>
_____
>[!tip]+ DERIVATIONS of andr-
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