---
tags: [" #medroot"]
aliases: []
roots: [copr-]
forms: [combining]
alphabet:: C
definition: [excrement, fecal matter]
---
>[!Note] DEFINITION of copr-
>excrement, fecal matter
_____
>[!info]+ ETYMOLOGY of copr-
>#greek kopros
_____
>[!example]+ RELATED TERMS to copr-
>
>| [[copr-]] | excrement | fecal matter |
| --------- | --------- | ------------ |
| [[fec-]]  | YES       | YES          |
| [[scat-]] | YES       | YES             |
_____
>[!tip]+ DERIVATIONS of copr-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]