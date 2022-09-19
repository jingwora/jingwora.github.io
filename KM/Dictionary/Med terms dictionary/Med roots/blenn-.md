---
tags: [" #medroot"]
aliases: []
roots: [blenn-]
forms: [combining]
alphabet:: B
definition: [mucus]
---
>[!Note] DEFINITION of blenn-
>mucus
_____
>[!info]+ ETYMOLOGY of blenn-
>#greek blennos
_____
>[!example]+ RELATED TERMS to blenn-
>
>| [[blenn-]] | mucus |
| ---------- | ----- |
| [[myx-]]   | YES      |
_____
>[!tip]+ DERIVATIONS of blenn-
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
>```]]

[[Med roots dictionary]]