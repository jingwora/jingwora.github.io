---
tags: [" #medroot"]
aliases: []
roots: [phall-]
forms: [combining]
alphabet:: P
definition: [penis]
---
>[!Note] DEFINITION of phall-
>penis
_____
>[!info]+ ETYMOLOGY of phall-
>#greek phallos
_____
>[!example]+ RELATED TERMS to phall-
>
>| [[phall-]]  | penis |
|:----------:| ----- |
| [[pen_-]] |   YES    |
_____
>[!tip]+ DERIVATIONS of phall-
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