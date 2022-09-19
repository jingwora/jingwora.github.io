---
tags: [" #medroot"]
aliases: []
roots: [bary-]
forms: [combining]
alphabet:: B
definition: [heavy, dull, hard]
---
>[!Note] DEFINITION of bary-
>heavy, dull, hard
_____
>[!info]+ ETYMOLOGY of bary-
>#greek barys
_____
>[!example]+ RELATED TERMS to bary-
>
>| [[bary-]]  | heavy | dull | hard | -     |
| ---------- | ----- | ---- | ---- | ----- |
| [[ambly-]] | -     | YES  | -    | faint |
| [[scler-]] | -     | -    | YES  | -      |
_____
>[!tip]+ DERIVATIONS of bary-
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