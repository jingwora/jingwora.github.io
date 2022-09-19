---
tags: [" #medroot"]
aliases: []
roots: [man-]
forms: [combining]
alphabet:: M
definition: [be mad]
---
>[!Note] DEFINITION of man-
>be mad (crazy)
_____
>[!info]+ ETYMOLOGY of man-
>#greek mainesthai
_____
>[!example]+ RELATED TERMS to man-
>
_____
>[!tip]+ DERIVATIONS of man-
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