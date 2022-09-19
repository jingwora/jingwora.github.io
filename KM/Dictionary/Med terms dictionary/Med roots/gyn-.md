---
tags: [" #medroot"]
aliases: [gynec-]
roots: [gyn-, gynec-]
forms: [combining]
alphabet:: G
definition: [woman, female]
---
>[!Note] DEFINITION of gyn-
>woman, female
_____
>[!info]+ ETYMOLOGY of gyn-
>#greek gyne, gynaikos
_____
>[!example]+ RELATED TERMS to gyn-
>
_____
>[!tip]+ DERIVATIONS of gyn-
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