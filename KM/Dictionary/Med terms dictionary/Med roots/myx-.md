---
tags: [" #medroot"]
aliases: []
roots: [myx-]
forms: [combining]
alphabet:: M
definition: [mucus]
---
>[!Note] DEFINITION of myx-
>mucus
_____
>[!info]+ ETYMOLOGY of myx-
>#greek myxa
_____
>[!example]+ RELATED TERMS to myx-
>
>| [[blenn-]] | mucus |
| ---------- | ----- |
| [[myx-]]   | YES      |
_____
>[!tip]+ DERIVATIONS of myx-
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