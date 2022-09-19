---
tags: [" #medroot"]
aliases: []
roots: [scat-]
forms: [combining]
alphabet:: S
definition: [excrement, fecal matter]
---
>[!Note] DEFINITION of scat-
>excrement, fecal matter
_____
>[!info]+ ETYMOLOGY of scat-
>#greek skor, skatos
_____
>[!example]+ RELATED TERMS to scat-
>
>| [[scat-]] | excrement | fecal matter |
| --------- | --------- | ------------ |
| [[copr-]]  | YES       | YES          |
| [[fec-]] | YES       | YES             |
_____
>[!tip]+ DERIVATIONS of scat-
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