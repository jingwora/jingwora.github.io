---
tags: [" #medroot"]
aliases: []
roots: [anter-]
forms: [combining]
alphabet:: a
definition: [front, in front]
---
>[!Note] DEFINITION of anter-
>front, in front
>*see also: [[ante-]]*
_____
>[!info]+ ETYMOLOGY of anter-
>#latin anterior
_____
>[!example]+ RELATED TERMS to anter-
>
>| [[anter-]] | in front | front | -      | -   |
| ---------- | -------- | ----- | ------ | --- |
| [[pro-]]   | YES      | -     | before | forward    |
_____
>[!tip]+ DERIVATIONS of anter-
>```dataview
>TABLE definition AS Definition 
WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
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