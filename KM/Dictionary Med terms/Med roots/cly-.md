---
tags: [" #medroot"]
aliases: [clys-]
roots: [cly-, clys-]
forms: [combining]
alphabet:: C
definition: [rinse out, inject fluid]
---
>[!Note] DEFINITION of cly-
>rinse out, inject fluid
_____
>[!info]+ ETYMOLOGY of cly-
>#greek klyzein
_____
>[!example]+ RELATED TERMS to cly-
>
_____
>[!tip]+ DERIVATIONS of cly-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!FAQ]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]