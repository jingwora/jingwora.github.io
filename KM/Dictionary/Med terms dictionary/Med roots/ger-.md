---
tags: [" #medroot"]
aliases: []
roots: [ger-]
forms: [combining]
alphabet:: G
definition: [old]
---
>[!Note] DEFINITION of ger-
>old (not to be confused with: [[gest-|ger_-]])
_____
>[!info]+ ETYMOLOGY of ger-
>#greek geras
_____
>[!example]+ RELATED TERMS to ger-
>
>|  [[ger-]]   | old |  -  |
|:-----------:|:---:|:---:|
| [[presby-]] | YES | old age    |
_____
>[!tip]+ DERIVATIONS of ger-
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