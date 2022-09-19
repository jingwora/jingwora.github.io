---
tags: [" #medroot"]
aliases: []
forms: [prefix]
roots: [ambi-]
alphabet:: A
definition: [both]
---
>[!Note] DEFINITION of ambi-
>Both
_____
>[!info]+ ETYMOLOGY of ambi-
>#latin
_____
>[!example]+ RELATED TERMS to ambi-
>
>| [[ambi-]]  | both | -             | -      |
| ---------- | ---- | ------------- | ------ |
| [[amphi-]] | YES  | on both sides | around |
| [[bi-]]    | YES  | twice, double | two       |
_____
>[!tip]+ DERIVATIONS of ambi-
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