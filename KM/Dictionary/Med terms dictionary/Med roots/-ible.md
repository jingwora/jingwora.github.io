---
tags: [" #medroot"]
aliases: []
roots: [-ible]
forms: [suffix, adjective]
alphabet:: I
definition: [capable of (being)]
---
>[!Note] DEFINITION of -ible
>forms adjectives: capable of (being)
_____
>[!info]+ ETYMOLOGY of -ible
>#latin
_____
>[!example]+ RELATED TERMS to -ible
>
>| [[-ible]] | capable of (being) | -             | -   |
| --------- | ------------------ | ------------- | --- |
| [[-able]] | YES                | able to       |     |
| [[-ile]]  | YES                | pertaining to | like    |
_____
>[!tip]+ DERIVATIONS of -ible
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