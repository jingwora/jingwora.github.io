---
tags: [" #medroot"]
aliases: [cord-]
roots: [cor]
forms: [combining]
alphabet:: C
definition: [heart]
---
>[!Note] DEFINITION of cor
>heart
_____
>[!info]+ ETYMOLOGY of cor
>#latin cor, cordis
_____
>[!example]+ RELATED TERMS to cor
>
>| [[cor]]    | heart | -   |
| ---------- | ----- | --- |
| [[cardi-]] | YES   | cardia    |
_____
>[!tip]+ DERIVATIONS of cor
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