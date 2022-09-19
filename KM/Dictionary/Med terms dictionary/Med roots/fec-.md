---
tags: [" #medroot"]
aliases: []
roots: [fec-]
forms: [combining]
alphabet:: F
definition: [excrement, fecal mattr]
---
>[!Note] DEFINITION of fec-
>excrement, fecal metter
_____
>[!info]+ ETYMOLOGY of fec-
>#latin faex, faecis
_____
>[!example]+ RELATED TERMS to fec-
>
>| [[copr-]] | excrement | fecal matter |
| --------- | --------- | ------------ |
| [[fec-]]  | YES       | YES          |
| [[scat-]] | YES       | YES             |
_____
>[!tip]+ DERIVATIONS of fec-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
____
>[!faq]- Query
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]