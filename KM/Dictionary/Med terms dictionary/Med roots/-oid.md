---
tags: [" #medroot"]
aliases: [-ode, -(o)id]
roots: [-oid, -(o)id]
forms: [suffix, noun, adjective]
alphabet:: O
definition: [resembling, indicating a particular shape form or resemblance]
---
>[!Note] DEFINITION of -oid
>forms nouns or adjectives: resembling, indicating a particular shape, form, or resemblance
_____
>[!info]+ ETYMOLOGY of -oid
>#greek
_____
>[!example]+ RELATED TERMS to -oid
>
>| [[-oid]] | resembling | -       | -   |
| -------- | ---------- | ------- | --- |
| [[-ose]] | YES        | full of | chemical substance    |
_____
>[!tip]+ DERIVATIONS of -oid
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